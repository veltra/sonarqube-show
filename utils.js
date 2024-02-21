// utils.js
function dynamicEval(code) {
    // Security vulnerability: Use of eval can lead to code injection attacks
    return eval(code);
}

module.exports = { dynamicEval };
