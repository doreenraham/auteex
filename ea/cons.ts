function getResult(input: any): string {
  // Check if the input is a string and return it directly
  if (typeof input === 'string') {
    return input;
  }

  // If the input is an array, join the elements into a string
  if (Array.isArray(input)) {
    return input.join(', ');
  }

  // For other types, convert to string using JSON.stringify
  return JSON.stringify(input);
}

// Example usage:
const data = ['apple', 'banana', 'cherry'];
let result: string = getResult(data);
