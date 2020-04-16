let fs = require('fs');

function clearAndUpper(text) {
    return text.replace(/_/, "").toUpperCase();
}

function transfromFileToExportString(file) {
    let fileNameWithoutExtension = file.slice(0, file.length - 3);
    let className = fileNameWithoutExtension.replace(/(^\w|_\w)/g, clearAndUpper);
    return 'export { default as ' + className + ' } from \'./entities/' + fileNameWithoutExtension + '\';\n';
}

function transfromMethodParamsFileToExportString(file) {
    let fileNameWithoutExtension = file.slice(0, file.length - 3);
    let className = fileNameWithoutExtension.replace(/(^\w|_\w)/g, clearAndUpper);
    return 'export { default as ' + className + ' } from \'./method_params/' + fileNameWithoutExtension + '\';\n';
}

function transfromSerializeFileToExportString(file) {
    let fileNameWithoutExtension = file.slice(0, file.length - 3);
    let className = fileNameWithoutExtension.replace(/(^\w|_\w)/g, clearAndUpper);

    let exportClass = '{ ' + className + ', ' + className + 'Params }';
    if (fileNameWithoutExtension === 'serializer') {
        exportClass = '{ Serializer, ConstructorParams }';
    }

    return 'export ' + exportClass + ' from \'./serialize/' + fileNameWithoutExtension + '\';\n';
}

let indexFile = '';

fs.readdirSync('./method_params/').forEach(file => {
    if (file.endsWith('.ts')) {
        indexFile += transfromMethodParamsFileToExportString(file);
    }
});

fs.readdirSync('./entities/').forEach(file => {
    if (file.endsWith('.ts')) {
        indexFile += transfromFileToExportString(file);
    }
});

fs.readdirSync('./serialize/').forEach(file => {
    if (file.endsWith('.ts')) {
        indexFile += transfromSerializeFileToExportString(file);
    }
});

fs.writeFileSync('index.ts', indexFile);