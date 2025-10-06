export const generateArray = (): number[] => {
  const numbers: number[] = [1, 2, 3, 4, 5];

  const single: number = numbers[Math.floor(Math.random() * numbers.length)];

  const available: number[] = numbers.filter((n) => n !== single);
  const pairs: number[] = [];

  while (pairs.length < 4) {
    const rand: number = available[Math.floor(Math.random() * available.length)];
    if (!pairs.includes(rand)) {
      pairs.push(rand);
    }
  }

  const result: number[] = [...pairs.flatMap((n) => [n, n]), single];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};