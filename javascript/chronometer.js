class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback();
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime;
    if (seconds > 60) {
      seconds = seconds % 60;
    }
    return seconds;
  }

  twoDigitsNumber(value) {
    if (value < 10) return `0${value}`;
    return `${value}`;
  }

  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }

  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
      this.getSeconds()
    )}`;
  }
}
