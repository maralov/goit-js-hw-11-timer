import '../styles/main.css';

import { CountdownTimer } from './timer'


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 15, 2021, 23:26:00'),
});

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('May 25, 2021, 23:26:00'),
});

timer.start();
timer2.start();
