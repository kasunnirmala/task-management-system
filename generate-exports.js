const fs = require('fs');
const path = require('path');

function generateExports(dir, basePath = '') {
  const files = fs.readdirSync(dir);
  const exports = [];
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const relativePath = path.join(basePath, file);
    
    if (fs.statSync(fullPath).isDirectory()) {
      // Recursively process subdirectories
      const subExports = generateExports(fullPath, relativePath);
      exports.push(...subExports);
    } else if (file.endsWith('.ts') && file !== 'index.ts') {
      // Export TypeScript files (except index.ts)
      const exportPath = `./${relativePath.replace('.ts', '')}`;
      exports.push(`export * from '${exportPath}';`);
    }
  });
  
  return exports;
}

// Example usage for your lib directory
const libPath = './libs/data/src/lib';
const exports = generateExports(libPath);
console.log(exports.join('\n'));
