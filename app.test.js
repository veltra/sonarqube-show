// app.test.js
const { processData } = require('./app');

describe('processData', () => {
    it('should process data correctly', () => {
        const input = ["test", "data"];
        const expectedOutput = ["TEST", "DATA"];
        expect(processData(input)).toEqual(expectedOutput);
    });

    // Missing tests for error cases and empty data scenario
});
