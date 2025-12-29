// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  const minValue = [];
  for (let i = 0; i < array.length; i++) {
    minValue.push(array[i]);
  }
  return Math.min(...minValue);
}

export function findMaxValueInArray(array) {
  const maxValue = [];
  for (let i = 0; i < array.length; i++) {
    maxValue.push(array[i]);
  }
  return Math.max(...maxValue);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
