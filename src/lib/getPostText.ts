import verses from "./verses.json" assert { type: "json" };


export default async function getPostText() {
  // Generate the text for your post here. You can return a string or a promise that resolves to a string
  // const verses = await ()
  // const verses = require('./verses.json');
  // const versesArray: { verses: array }[] = verses;

  var random = verses.verses[Math.floor(Math.random() * Object.keys(verses.verses).length)];
  return random;
}
