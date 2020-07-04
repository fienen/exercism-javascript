const EARTH_YR = 31557600;
const ORBIT_ADJ = { mercury: .2408467,venus: .61519726,earth: 1,mars: 1.8808158,jupiter: 11.862615,saturn: 29.447498,uranus: 84.016846,neptune: 164.79132 };

export const age = ( planet, secs ) => {
  let ageInSeconds = secs / EARTH_YR / ORBIT_ADJ[planet];
  return +ageInSeconds.toFixed(2);
};
