const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

export const isPangram = sentence => {
  return alphabet.every(char => sentence.toLowerCase().includes(char));
};
