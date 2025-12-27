
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getProjectConsultation = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are a Specialist Home Renovation Expert & Interior Designer at Renowix. 
        You have deep expertise in trends specific to Noida and Delhi NCR.
        
        NCR KNOWLEDGE:
        - Trends: Modern modular kitchens with charcoal finishes, teak woodwork, profile lighting, large format floor tiling.
        - Climate: Focus on dust-resistance, high-quality waterproofing, and thermal insulation for NCR heat.
        
        COMMUNICATION STYLE:
        - Extremely human-like and concise.
        - If someone says "Hi" or "Hello", respond with: "Hello! I'm the Renowix design specialist. How can I help you transform your home today?"
        - Do not provide long paragraphs unless explicitly asked for technical details.
        - Keep answers focused. 
        - Your main job is to guide them toward booking a site visit with our team.
        - Avoid using generic AI phrases like "I can help with that" - speak like a local professional.`,
        temperature: 0.8,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a small technical issue. Please reach us at +91 98710 55XXX for an immediate consultation!";
  }
};
