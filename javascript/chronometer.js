class Chronometer {
  constructor() {
    (this.currentTime = 0), (this.intervalId = 0);
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  twoDigitsNumber(twoDigitsNumber) {
    if (twoDigitsNumber < 10) {
      return "0" + twoDigitsNumber;
    } else {
      return twoDigitsNumber;
    }
  }

  stopClick() {
    clearInterval(this.startClick());
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}
