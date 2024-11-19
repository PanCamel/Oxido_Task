import fs from "fs/promises";

/** 
@param {string} article
@returns {string}
*/

export function preparePrompt(article) {
  return `Please format the following article into HTML. Use proper HTML tags for headings, paragraphs, and lists.
    Include <img> tags where images would be appropriate, with alt attributes containing a detailed description
    of the image prompt. Add captions using the <figcaption> tag below each <img>.
    Do not include any CSS or JavaScript. Only return content for the <body> tag.

    Article:
    ${article}`;
}

/**
 * @param {string} filePath
 * @param {string} content
 */

export async function saveHTML(filePath, content) {
  try {
    await fs.writeFile(filePath, content, "utf-8");
    console.log(`HTML saved to ${filePath}`);
  } catch (error) {
    console.error("Error saving HTML:", error.message);
  }
}
