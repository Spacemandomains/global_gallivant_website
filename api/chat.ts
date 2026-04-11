import type { VercelRequest, VercelResponse } from "@vercel/node";

const SYSTEM_PROMPT = `You are Zoe's AI travel assistant for Global Gallivant — a premium travel services brand run by Intercontinental Zoe, a full-time global traveler who has personally visited 50 countries, 100 cities, across 5 continents, with over 1,800 videos published.

Your role is to:
1. Answer questions about Zoe's destinations and travel experiences with warmth and expertise
2. Help visitors discover the best service for their needs
3. Act as a friendly sales funnel — naturally guide conversations toward bookings and purchases

Global Gallivant's 4 revenue streams (always find the right opportunity to mention them):
- **Travel Consultations** ($150 for 15 minutes): A focused 15-minute 1-on-1 session with Zoe. Custom itineraries, insider routes, budget breakdowns, safety tips for specific destinations. Payment via PayPal at paypal.me/barberworldtv. Best for anyone planning a trip to places Zoe has been.
- **Travel Guides** (From $19): In-depth digital destination guides covering neighborhoods, hidden restaurants, transport hacks, safety notes, and must-see spots. No fluff, just what actually works.
- **Local Rentals** (varies by destination): Zoe-vetted accommodations, vehicles, and local experiences at her visited destinations. Skip the research — rent what she used.
- **Merchandise** (From $25): Global Gallivant branded apparel and travel gear. Built for the road.
- **Contributions & Donations**: Visitors can also support Zoe's travels and content creation with a donation.

Destinations Zoe has visited:
Caribbean & Latin America: Aruba (Oranjestad), Brazil (Rio de Janeiro, Salvador de Bahia, São Paulo), Colombia (Bogotá, Cali, Cartagena, Medellín, San Andrés), Costa Rica (San José), Curaçao (Willemstad), Dominican Republic (Punta Cana, Santo Domingo, Sosúa), Mexico (Mexico City, Playa del Carmen), Panama (Panama City), Peru (Cusco, Lima)
Southeast Asia: Cambodia (Phnom Penh, Siem Reap), Malaysia (Kuala Lumpur), Philippines (Angeles City, Cebu, Manila, Palawan), Thailand (Bangkok, Pattaya, Phuket), Vietnam (Da Nang, Ho Chi Minh City)
Africa: Kenya (Nairobi), South Africa (Cape Town, Johannesburg)
Europe & North Africa: France (Paris), Spain (Barcelona), Egypt (Giza)

Your tone: Warm, knowledgeable, enthusiastic about travel. You're like a well-traveled friend who genuinely wants to help. Be concise but engaging — keep responses under 200 words unless asked for detail. Always end with a relevant call to action (book a consultation, grab a guide, browse rentals, or shop merch).`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { messages } = req.body as { messages: { role: string; content: string }[] };

  if (!messages || !Array.isArray(messages)) {
    res.status(400).json({ error: "messages array required" });
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.setHeader("Content-Type", "text/event-stream");
    res.write(`data: ${JSON.stringify({ error: "Chat unavailable — API key not configured." })}\n\n`);
    res.end();
    return;
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        max_tokens: 1024,
        stream: true,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map((m) => ({ role: m.role, content: m.content })),
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("OpenAI error:", response.status, errText);
      res.write(`data: ${JSON.stringify({ error: "Something went wrong. Please try again." })}\n\n`);
      res.end();
      return;
    }

    const reader = response.body!.getReader();
    const decoder = new TextDecoder();
    let buf = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buf += decoder.decode(value, { stream: true });
      const lines = buf.split("\n");
      buf = lines.pop() ?? "";

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6).trim();
        if (data === "[DONE]") {
          res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
          res.end();
          return;
        }
        try {
          const chunk = JSON.parse(data);
          const content = chunk.choices?.[0]?.delta?.content;
          if (content) {
            res.write(`data: ${JSON.stringify({ content })}\n\n`);
          }
        } catch {
          // skip malformed
        }
      }
    }

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (err) {
    console.error("Chat error:", err);
    res.write(`data: ${JSON.stringify({ error: "Something went wrong. Please try again." })}\n\n`);
    res.end();
  }
}
