const fs = require("fs");
const path = require("path");

let folderPath = path.join(__dirname, "src");
const filePath = path.join(folderPath, "example.txt");

// Ensure the `src` directory exists
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
  console.log(`Folder created: ${folderPath}`);
}

folderPath = folderPath + "/GravitySidebar";

if (!fs.existsSync(folderPath)){
fs.mkdirSync(`${folderPath}`);
}

// Create the file inside the `src` directory
fs.copyFileSync(`dist/Sidebar/index.js`, `${folderPath}/index.js`);
fs.copyFileSync(`dist/Sidebar/style.css`, `${folderPath}/style.css`);

console.log(`File created: ${filePath}`);
