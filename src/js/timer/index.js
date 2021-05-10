
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.intervalId = null;
    this.isActive = false;
    this.timerContainer = document.querySelector(selector);
    this.targetDate = targetDate;
    this.init();
  }

  init() {
    const startTime = this.targetDate - Date.now()

    const targetTime = startTime < 0 ? 0 : startTime

    if (targetTime === 0) {
      console.error('Дата не может быть раньше текущей!!')
    }

    this.renderTimer(this.getTimeComponents(targetTime));
  }


  renderTimer({ days, hours, mins, secs }) {

    this.timerContainer.querySelector('[data-value="days"]').textContent = days;
    this.timerContainer.querySelector('[data-value="hours"]').textContent = hours;
    this.timerContainer.querySelector('[data-value="mins"]').textContent = mins;
    this.timerContainer.querySelector('[data-value="secs"]').textContent = secs;
  }

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const targetTime = this.targetDate - Date.now()

      if (targetTime < 0) {
        return
      }

      this.renderTimer(this.getTimeComponents(targetTime));

    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.renderTimer(time);
  }

  getTimeComponents(time) {





    const days = this.pad(
      Math.floor(time / (1000 * 60 * 60 * 24))
    );
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}


export { CountdownTimer }