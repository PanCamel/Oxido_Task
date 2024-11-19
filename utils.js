import fs from "fs/promises";
/** 
@param {string} article
@returns {string}
*/
export function preparePrompt(article) {
  return `Format the following article into properly structured HTML. Follow these guidelines:
  
  1. Use appropriate HTML tags for structuring the content, such as <h1>, <h2>, <p>, <ul>, and <ol>.
  2. Determine suitable locations for images based on the article's content. Insert <img> tags with src="image_placeholder.jpg" for each image. 
     - Add a detailed alt attribute describing the image, which can serve as a prompt for generating it.
     - Provide captions for each image using the <figcaption> tag, placed inside a <figure> element.
  3. Do not include any CSS or JavaScript. The output should contain only the content for the <body> tag.
  4. Exclude the <html>, <head>, and <body> tags themselves.

  Article content:
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
