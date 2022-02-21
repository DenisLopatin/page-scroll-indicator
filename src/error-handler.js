/**
 * @function errorHandler - a function that handles errors
 * @param { Object } err - object with error
 * */

export default function errorHandler(err) {
    const {
        columnNumber, fileName, lineNumber, message, stack,
    } = err;
    const errorMessage = `Reason: ${message} \n` +
        `Filename: ${fileName} \n` +
        `Column: ${columnNumber} \n` +
        `line: ${lineNumber} \n` +
        `You can view the full trace: \n\n` +
        `${stack}`;
    console.error(errorMessage);
}
