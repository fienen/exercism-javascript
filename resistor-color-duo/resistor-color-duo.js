const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];

export const decodedValue = ( [band1, band2] ) => {
  return COLORS.indexOf(band1) * 10 + COLORS.indexOf(band2);
};
