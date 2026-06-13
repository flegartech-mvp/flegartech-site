// Generates the app icon set from public/favicon.png (512x512 source).
// Usage: node scripts/generate-icons.mjs
import sharp from "sharp";

const source = "public/favicon.png";

await sharp(source).resize(512, 512).png().toFile("src/app/icon.png");

// Apple touch icons don't support transparency — flatten onto the site background.
await sharp(source)
  .resize(160, 160)
  .extend({ top: 10, bottom: 10, left: 10, right: 10, background: "#050705" })
  .flatten({ background: "#050705" })
  .png()
  .toFile("src/app/apple-icon.png");

console.log("Generated src/app/icon.png (512x512) and src/app/apple-icon.png (180x180)");
