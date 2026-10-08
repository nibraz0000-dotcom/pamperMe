const fs = require('fs');
const path = require('path');

const operationsDir = path.join(__dirname, '..', 'app', 'operations');
const cssFile = path.join(operationsDir, 'operations.module.css');
const tsxFile = path.join(operationsDir, 'page.tsx');

function pxToRem(match, p1) {
    const px = parseFloat(p1);
    if (px === 0) return '0';
    const rem = px / 16;
    return `${rem}rem`;
}

function processFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return;
    }
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace integer and float px values
    const regex = /(\d*\.?\d+)px/g;
    const newContent = content.replace(regex, pxToRem);
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
}

processFile(cssFile);
processFile(tsxFile);
