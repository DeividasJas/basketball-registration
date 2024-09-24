'use client';
import {
  formatDuration,
  intervalToDuration,
  setHours,
  setMinutes,
  nextTuesday,
} from 'date-fns';
import { useEffect, useState } from 'react';


export default function TimeTillGame() {
  const [timeRemaining, setTimeRemaining] = useState('');

  const calculateTimeRemaining = () => {
    const now = new Date();
    let targetDate = nextTuesday(now); // Get next Tuesday
    // console.log(targetDate, 'nextTUesday');

    // If today is Tuesday and it's before 8 PM, use today instead of next Tuesday
    if (now.getDay() === 2 && now.getHours() < 20) {
      targetDate = now;
    }

    // Set the time to 8 PM on the next Tuesday
    targetDate = setHours(targetDate, 20); // 20 hours = 8 PM
    targetDate = setMinutes(targetDate, 0);

    // Calculate the time difference
    const duration = intervalToDuration({ start: now, end: targetDate });
    // console.log(duration);
    const durationWithSeconds = formatDuration(duration, {
      format: ['days', 'hours', 'minutes'],
    });
    return durationWithSeconds;
  };

  calculateTimeRemaining();
  console.log(calculateTimeRemaining());

  useEffect(() => {
    // Initial calculation
    setTimeRemaining(calculateTimeRemaining());

    // Update every second
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);


    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
  // console.log(isNewUser);

  return (
    <>
        <p className='text-lg'>{timeRemaining} ...</p>
    </>
  );
}
