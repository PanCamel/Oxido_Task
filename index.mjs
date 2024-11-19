import OpenAI from "openai";
import fs from "fs/promises";
import { preparePrompt, saveHTML } from "./utils.js";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
  try {
    const article = await fs.readFile("./resources/artykul.txt", "utf-8");
    const prompt = preparePrompt(article);
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are an HTML formatter." },
        { role: "user", content: prompt },
      ],
    });
    const html = completion.choices[0].message.content;
    await saveHTML("./output/artykul.html", html);
    console.log("HTML content successfully generated and saved.");
  } catch (error) {
    console.error("Error generating HTML:", error);
  }
}
main();