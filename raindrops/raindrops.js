export const convert = num => {
  let rain = '';
  if(num % 3 === 0) rain += 'Pling';
  if(num % 5 === 0) rain += 'Plang'; 
  if(num % 7 === 0) rain += 'Plong';
  return rain || num.toString();
};
