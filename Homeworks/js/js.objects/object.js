// //* Об'єкти ( Норма )

const time = {
  seconds: 3,
  minutes: 24,
  hours: 47,
  changeSeconds: function (userSeconds) {
    this.seconds = (userSeconds % 60) + this.seconds;
    if (this.seconds + userSeconds >= 60) {
      this.minutes += Math.floor(userSeconds / 60);
      if (this.seconds >= 60) {
        this.seconds -= 60 * Math.floor(userSeconds / 60);
      }
    }
  },
  changeMinutes: function (userMinutes) {
    this.minutes = (userMinutes % 60) + this.minutes;
    if (this.minutes + userMinutes >= 60) {
      this.hours += Math.floor(userMinutes / 60);
      if (this.minutes >= 60) {
        this.minutes -= 60 * Math.floor(userMinutes / 60);
      }
    }
  },
  changeHours: function (userHours) {
    this.hours += userHours;
  },

  showTime: function () {
    Object.keys(this).forEach((key) => {
      if (typeof this[key] !== "function") {
        console.log(`${key}: ${this[key]}`);
      }
    });
  },
};

time.changeSeconds(10);
time.changeMinutes(100);
time.changeHours(11);
time.showTime();