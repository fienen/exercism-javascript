const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export const meetup = ( year, month, descriptor, day ) =>  {
  let date;
  month--;
  console.log(`MONTH: ${month}`);
  
  switch (descriptor) {
    case 'first': 
      date = 1; 
      break;
    case 'second': 
      date = 8;
      break;
    case 'third': 
      date = 15; 
      break;
    case 'fourth': 
      date = 22; 
      break;
    case 'last': 
      date = 22; 
      break;
    case 'teenth': 
      date = 13; 
      break;
  }
  console.log(`DATE: ${date}`);

  day = DAYS.indexOf(day);
  console.log(`DAY: ${day}`);
  let foundDate = new Date(year, month, date);

  while (foundDate.getDay() !== day) {
    date++;
  }

  if (descriptor === 'last') {
    date = date + 7;
  }

  return new Date(year, month, date);
}
