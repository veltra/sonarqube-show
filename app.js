// app.js

// Code Smell 1: Implicit dependency on the data parameter. This function assumes 'data' will always be provided and have a length property, which may not always be the case.
function processData(data) {
    // Code Smell 2: Error-prone conditional check. This does not account for null or undefined values, which can lead to runtime errors.
    if (data && data.length > 0) { // Fixed: Check for null or undefined to avoid runtime errors.
        console.log("Processing data...");
        // Code Smell 3: Assuming each item can be converted to uppercase without validation.
        return data.map(item => {
            // Potential improvement: Validate item is a string before calling toUpperCase.
            if (typeof item === 'string') {
                return item.toUpperCase();
            } else {
                // Handling non-string items
                console.log("Non-string item found, skipping...");
                return item; // Potentially return a default value or throw an error.
            }
        });
    } else {
        // Code Smell 4: Insufficient error handling. Logging an error without throwing or returning a meaningful response.
        console.error("No data to process or data is null/undefined");
        // Improvement: Consider throwing an error or returning null/undefined to indicate failure.
        return null; // Explicitly handle the error case.
    }
}

// Demonstrating proper usage
const result = processData(["apple", "banana", "cherry"]);
console.log(result);

// Demonstrating error handling with null input
const errorProneResult = processData(); // This now handles null/undefined safely.
console.log(errorProneResult);