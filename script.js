// Function to perform division using Promise
const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {

        if (num2 === 0) {
            reject("Division by 0 is not allowed");
        } else {
            resolve(num1 / num2);
        }

    });
};

const runTest = async (example, num1, num2) => {

    console.log(`Example ${example}`);
    console.log(`Dividing ${num1} by ${num2}...`);

    try {
        const result = await divideNumbers(num1, num2);
        console.log("Result:", result);
    } catch (error) {
        console.log("Error:", error);
    }

    console.log("");
};
const runAllTests = async () => {

    await runTest(1, 10, 2);
    await runTest(2, 10, 0);
    await runTest(3, 20, 5);
    await runTest(4, 7, 2);
    await runTest(5, 100, 10);

};
runAllTests();