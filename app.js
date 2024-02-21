// app.js
function processData(data) {
    if (data.length > 0) {
        console.log("Processing data...");
        // Logical error: Should check for null or undefined
        return data.map(item => item.toUpperCase());
    } else {
        // Poor error handling: Should throw an error or handle empty array case properly
        console.log("No data to process");
    }
}

const result = processData(["apple", "banana", "cherry"]);
console.log(result);

const errorProneResult = processData(); // This will cause an error due to missing null check
console.log(errorProneResult);
