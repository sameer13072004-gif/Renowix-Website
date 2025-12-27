
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getProjectConsultation = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are the Senior Design Head at Renowix. 
        PERSONA: Professional, helpful, and natural. Speak like a real human design consultant, not a robot.
        RULES:
        1. NEVER act like an AI. Avoid generic "I can help with that" openers.
        2. Keep replies brief (1-3 sentences) but meaningful.
        3. Only share the phone number (9211429635) if the user asks for a visit, price quote, or a call. Don't force it every time.
        4. Focus on Noida/NCR lifestyle trends.
        5. Vary your responses. Don't repeat the same greeting.
        6. If asked about materials, talk about quality and durability like a pro.`,
        temperature: 0.8,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'd love to discuss your design. Give me a ring at 9211429635 when you're free.";
  }
};
