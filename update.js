let fs = require('fs');

function clearAndUpper(text) {
    return text.replace(/_/, "").toUpperCase();
}

function transfromFileToExportString(file) {
    let fileNameWithoutExtension = file.slice(0, file.length - 3);
    let className = fileNameWithoutExtension.replace(/(^\w|_\w)/g, clearAndUpper);
    return 'export { default as ' + className + ' } from \'./entities/' + fileNameWithoutExtension + '\';\n';
}

let indexFile = '';

fs.readdirSync('./entities/').forEach(file => {
    if (file.endsWith('.ts')) {
        indexFile += transfromFileToExportString(file);
    }
});

fs.writeFileSync('index.ts', indexFile);