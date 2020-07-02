const RNA = { C: 'G',T: 'A',G: 'C',A: 'U' };

export const toRna = rna => {
  return rna.split('').map(r => RNA[r]).join('');
};
