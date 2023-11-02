import Mime from "mime/lite.js";

export function getMime(fileName) {
  const mime = Mime.getType(fileName);
  // Assurance for .js files (debate going on)
  if (mime === "text/javascript") return "application/javascript";
  return mime;
}
