import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client to prevent crash on startup if key is missing
let aiClient: GoogleGenAI | null = null;
function getGemini(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Chatbot API Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    const ai = getGemini();
    
    // Build context-rich prompt focusing on Kearny Legion
    const systemPrompt = `You are a helpful and polite virtual assistant for KearnyAmerican Legion Post (Kearny Legion).
Website Domain: KearnyLegion.org
Phone: 201-889-8759
Email: ramon.rivera1987@gmail.com
Address: Kearny, NJ (represented by Kearny Legion Post)

Information About Us:
- Kearny American Legion Post was chartered in 1919. Our mission centers on service to veterans, military servicemembers, their families, and local youth/community programs.
- Leadership: Post Commander, Vice Commanders, Adjutant, and Service Officer who assist local vets.
- Programs: Veterans Assistance (help filing VA claims, peer support, local resources), Community Service (outreach, memorial events, volunteer programs), Youth Programs (Boys State, Scout sponsorships, flag education), Scholarship Opportunities for local students, Military Family Support.
- Membership: To join, a person must have served at least one day of active military duty in any branch of the US Armed Forces during eligible war eras (since April 6, 1917) and have been honorably discharged or still serving. Dues can be inquired via form on website, phone, or email.

Instructions:
- Keep responses patriotic, respectful, highly welcoming, and professional.
- Refer to contact information (Phone: 201-889-8759 and Email: ramon.rivera1987@gmail.com) if users have specific queries or want to join.
- Avoid listing technical data, container details, paths, or code.
- Answer user queries professionally. Make sure your response sounds concise and clear, usually 2-3 short paragraphs at most. Just return clean, nicely formatted text.`;

    // Map history to the structured parts if available, otherwise just send the message with system instruction
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        { role: "user", parts: [{ text: systemPrompt }] },
        ...(history || []).map((h: any) => ({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.text }],
        })),
        { role: "user", parts: [{ text: message }] }
      ],
    });

    const reply = response.text || "I apologize, but I am unable to process that request right now. Please feel free to email us at ramon.rivera1987@gmail.com or call 201-889-8759.";
    res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    res.status(500).json({ 
      error: "Unable to complete request.",
      details: error.message || "Unknown error"
    });
  }
});

// Serve frontend assets
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

setupVite();
