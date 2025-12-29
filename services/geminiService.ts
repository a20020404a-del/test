import { GoogleGenAI } from "@google/genai";
import { AiResponse } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getNailDesignSuggestion = async (userInput: string): Promise<AiResponse> => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const prompt = `
    You are a professional, high-end nail artist and consultant at a luxury salon called "Lumière".
    The user will provide a scenario, mood, or outfit.
    Your task is to suggest a specific nail design, including color and art style.
    
    User Input: "${userInput}"
    
    Please provide the response in the following JSON format ONLY, do not include markdown code blocks:
    {
      "suggestion": "A polite, professional description of the recommended design in Japanese (approx 200 characters). tone: elegant, feminine.",
      "colorPalette": ["HexColor1", "HexColor2", "HexColor3"]
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    const data = JSON.parse(text);
    return {
      suggestion: data.suggestion,
      colorPalette: data.colorPalette || []
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("AIのご提案中にエラーが発生しました。もう一度お試しください。");
  }
};
