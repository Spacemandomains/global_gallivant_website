import { Router } from "express";
import OpenAI from "openai";

const chatRouter = Router();

const SYSTEM_PROMPT = `You are Zoe's AI travel assistant for Global Gallivant — a premium travel services brand run by Intercontinental Zoe, a full-time global traveler who has personally visited 50 countries, 100 cities, across 4 continents.

Your role is to:
1. Answer questions about Zoe's destinations and travel experiences with warmth and expertise
2. Help visitors discover the best service for their needs
3. Act as a friendly sales funnel — naturally guide conversations toward bookings and purchases

Global Gallivant's 4 revenue streams (always find the right opportunity to mention them):
- **Travel Consultations** (From $99): 1-on-1 personalized sessions with Zoe. Custom itineraries, insider routes, budget breakdowns, safety tips for specific destinations. Best for anyone planning a trip to places Zoe has been.
- **Travel Guides** (From $19): In-depth digital destination guides covering neighborhoods, hidden restaurants, transport hacks, safety notes, and must-see spots. No fluff, just what actually works.
- **Local Rentals** (varies by destination): Zoe-vetted accommodations, vehicles, and local experiences at her visited destinations. Skip the research — rent what she used.
- **Merchandise** (From $25): Global Gallivant branded apparel and travel gear. Built for the road.
- **Contributions & Donations**: Visitors can also support Zoe's travels and content creation with a donation.

Destinations Zoe has visited:
Caribbean & Latin America: Aruba (Oranjestad), Brazil (Rio de Janeiro, Salvador de Bahia, São Paulo), Colombia (Bogotá, Cali, Cartagena, Medellín, San Andrés), Costa Rica (San José), Curaçao (Willemstad), Dominican Republic (Punta Cana, Santo Domingo, Sosúa), Mexico (Mexico City, Playa del Carmen), Panama (Panama City), Peru (Cusco, Lima)
Southeast Asia: Cambodia (Phnom Penh, Siem Reap), Malaysia (Kuala Lumpur), Philippines (Angeles City, Cebu, Manila, Palawan), Thailand (Bangkok, Pattaya, Phuket), Vietnam (Da Nang, Ho Chi Minh City)
Africa: Ethiopia (Addis Ababa), Kenya (Nairobi), Nigeria (Lagos), South Africa (Cape Town, Johannesburg)
Europe & North Africa: France (Paris), Spain (Barcelona), Egypt (Giza)

Your tone: Warm, knowledgeable, enthusiastic about travel. You're like a well-traveled friend who genuinely wants to help. Be concise but engaging — keep responses under 200 words unless asked for detail. Always end with a relevant call to action (book a consultation, grab a guide, browse rentals, or shop merch).`;

function getOpenAI() {
  const apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY ?? process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not set");
  }
  const baseURL = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL ?? undefined;
  return new OpenAI({ apiKey, ...(baseURL ? { baseURL } : {}) });
}

chatRouter.post("/chat", async (req, res) => {
  const { messages } = req.body as { messages: { role: string; content: string }[] };

  if (!messages || !Array.isArray(messages)) {
    res.status(400).json({ error: "messages array required" });
    return;
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const openai = getOpenAI();

    const stream = await openai.chat.completions.create({
      model: "gpt-4o",
      max_tokens: 1024,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      ],
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (err: unknown) {
    const message =
      err instanceof Error && err.message.includes("OPENAI_API_KEY")
        ? "Chat unavailable — API key not configured."
        : "Something went wrong. Please try again.";
    console.error("Chat error:", err);
    res.write(`data: ${JSON.stringify({ error: message })}\n\n`);
    res.end();
  }
});

export default chatRouter;
