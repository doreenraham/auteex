interface Income {
  [key: string]: number; // Assuming 'income' consists of key-value pairs where the value is a number
}

const getValue = (obj: Income, key: keyof Income): number | undefined => {
  return obj[key];
};
