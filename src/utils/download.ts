import { saveAs } from "file-saver";
import { getMime } from "./mime";

export function downloadTextFile(fileName, fileContent) {
  const blob = new Blob([fileContent], {
    type: getMime(fileName),
  });
  saveAs(blob, fileName);
}
