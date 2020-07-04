const RNA = { C: 'G',T: 'A',G: 'C',A: 'U' };

export const toRna = rna  => {
  return [...rna].map(r => RNA[r]).join('');
};
