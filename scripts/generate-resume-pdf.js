/**
 * Generates PDF resumes from HTML for all developers (or a single one).
 * Run: node scripts/generate-resume-pdf.js [profileId]
 * Example: node scripts/generate-resume-pdf.js keval-panchasara
 * Requires: npm install puppeteer
 */
import { launch } from "puppeteer";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const resumeBase = path.join(projectRoot, "public", "resume");

const developers = [
  { id: "meet-shah", folder: "meet", htmlName: "Meet-Shah-Resume", pdfName: "Meet-Shah-Resume" },
  { id: "keval-panchasara", folder: "keval", htmlName: "Keval-Panchasara-Resume", pdfName: "Keval-Panchasara-Resume" },
  { id: "krishna-patel", folder: "krishna", htmlName: "Krishna-Patel-Resume", pdfName: "Krishna-Patel-Resume" },
  { id: "roushan-singh", folder: "roushan", htmlName: "Roushan-Singh-Resume", pdfName: "Roushan-Singh-Resume" },
  { id: "sagar-maheta", folder: "sagar", htmlName: "Sagar-Maheta-Resume", pdfName: "Sagar-Maheta-Resume" },
  { id: "satyam-singh", folder: "satyam", htmlName: "Satyam-Singh-Resume", pdfName: "Satyam-Singh-Resume" },
];

const profileId = process.argv[2];
const toGenerate = profileId
  ? developers.filter((d) => d.id === profileId)
  : developers;

if (toGenerate.length === 0) {
  console.error("No matching profile. Use one of:", developers.map((d) => d.id).join(", "));
  process.exit(1);
}

const browser = await launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

for (const dev of toGenerate) {
  const resumeDir = path.join(resumeBase, dev.folder);
  const htmlPath = path.join(resumeDir, `${dev.htmlName}.html`);
  const pdfPath = path.join(resumeDir, `${dev.pdfName}.pdf`);

  if (!fs.existsSync(htmlPath)) {
    console.warn("Resume HTML not found:", htmlPath);
    continue;
  }

  const page = await browser.newPage();
  await page.setViewport({ width: 794, height: 1123 });
  const fileUrl = "file:///" + htmlPath.replace(/\\/g, "/").replace(/ /g, "%20");
  await page.goto(fileUrl, { waitUntil: "networkidle0" });

  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: { top: "6mm", right: "6mm", bottom: "6mm", left: "6mm" },
  });

  await page.close();
  console.log("PDF saved:", pdfPath);
}

await browser.close();
console.log("Done.");
