'use server';

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function askPorscheExpert(carName: string, question: string) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return { success: false, reply: "Maaf, sistem sedang maintenance (API Key missing)." };
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Pake model yang tadi berhasil lu tes (misal gemini-1.5-flash)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      Role: Kamu adalah Salesman Senior Porsche yang eksklusif dan berwibawa.
      Konteks: User sedang melihat mobil "${carName}".
      Pertanyaan User: "${question}"
      
      Panduan Menjawab:
      1. Jawab dengan singkat (maksimal 2-3 kalimat).
      2. Gunakan bahasa Indonesia yang formal tapi tetap mengintimidasi secara halus (Luxury Vibe).
      3. Fokus pada engineering, heritage, dan performance.
      4. Jika pertanyaan konyol, jawab dengan sarkasme elegan.
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return { success: true, reply: text };

  } catch (error) {
    console.error("AI Error:", error); // Cukup log error di server aja
    return { success: false, reply: "Maaf, koneksi ke markas Stuttgart terputus. Silakan coba sesaat lagi." };
  }
}
