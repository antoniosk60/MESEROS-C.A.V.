
import { GoogleGenAI, Type } from "@google/genai";
import { EventQuoteRequest, AIRecommendation } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getEventStaffingRecommendation = async (request: EventQuoteRequest): Promise<AIRecommendation> => {
  const prompt = `
    Actúa como un experto consultor de catering y servicios de meseros con 20 años de experiencia.
    Analiza la siguiente solicitud de evento y proporciona una recomendación profesional:
    - Tipo de Evento: ${request.eventType}
    - Número de Invitados: ${request.guestCount}
    - Duración: ${request.durationHours} horas
    - Información adicional: ${request.additionalInfo || 'N/A'}

    Criterios técnicos (guía general):
    - 1 mesero por cada 15-20 personas en servicio de mesa.
    - 1 mesero por cada 25-30 personas en buffet.
    - Eventos VIP/Gala: 1 mesero por cada 10-12 personas.
    - Capitán de meseros recomendado si hay más de 4 meseros.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          waitersCount: { type: Type.NUMBER, description: "Número total de meseros recomendados" },
          captainNeeded: { type: Type.BOOLEAN, description: "Si se requiere un capitán de meseros" },
          serviceStyle: { type: Type.STRING, description: "Estilo de servicio recomendado (Banquete, Buffet, Cocktail, etc.)" },
          tips: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "3 a 5 consejos profesionales para el éxito del evento"
          }
        },
        required: ["waitersCount", "captainNeeded", "serviceStyle", "tips"]
      },
      systemInstruction: "Eres el consultor experto de 'Meseros C.A.V.'. Tu objetivo es dar recomendaciones técnicas precisas y elegantes sobre el personal necesario."
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error parsing Gemini response", error);
    // Fallback logic
    return {
      waitersCount: Math.ceil(request.guestCount / 20),
      captainNeeded: request.guestCount > 50,
      serviceStyle: "Servicio Clásico",
      tips: ["Planifica el montaje con 2 horas de anticipación.", "Asegura un área de office despejada."]
    };
  }
};
