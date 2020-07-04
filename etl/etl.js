export const transform = scores => {
  let newScores = {};

  for(let score in scores) {
    [...scores[score]].map(letter => {
      newScores[letter.toLowerCase()] = parseInt(score);
    });
  }

  return newScores;
};
