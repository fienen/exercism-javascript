export class Clock {
  constructor(hours = 0, mins = 0) {
    this.hours = hours;
    this.mins = mins;

    this.checkTime();
  }

  checkHours() {
    if( this.hours > 24 || this.hours < 0 ) {
      if( this.hours > 24 ) {
        while( this.hours > 24 ) {
          this.hours -= 24;
        }
      } else {
        while( this.hours < 0 ) {
          this.hours += 24;
        }
      }
    }

    this.hours = this.hours === 24 ? 0 : this.hours;
  }

  checkMins() {
    if( this.mins > 59 || this.mins < 0 ) {
      if( this.mins > 59 ) {
        while (this.mins >= 60) {
          this.mins -= 60; 
          ++this.hours;
        }
      } else {
        while( this.mins < 0 ) {
          this.mins += 60; 
          --this.hours;
        }
      }
    }
  }

  checkTime() {
    this.checkMins();
    this.checkHours();    
  }

  toString() {
    let time;
  
    time = `${this.hours.toString().padStart(2, '0')}:${this.mins.toString().padStart(2, '0')}`;

    return time;
  }

  plus(mins) {
    return new Clock(this.hours, this.mins + mins);
  }

  minus(mins) {
    return new Clock(this.hours, this.mins - mins);
  }

  equals(eqClock) {
    return this.mins === eqClock.mins && this.hours === eqClock.hours ? true : false;
  }
}
