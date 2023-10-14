import { useEffect, useState } from 'react';

export default function Timer(props) {
  const {timestamp} = props;
  const [timeLeft, setTimeLeft] = useState((timestamp * 1000) + 86400000 - Math.floor(Date.now()));

  useEffect(() => {
    const startTimer = () => {
      if (timestamp === 0) {
        setTimeLeft(0);
      }
      if (timeLeft > 0) {
        setInterval(() => setTimeLeft(timeLeft - 1000), 1000);
      }
    }
    startTimer();
  }, [timestamp, timeLeft, setTimeLeft]);

  const getTimeLeft = () => {
    if (timestamp === 0) {
      return 0;
    } else {
      if ((timestamp * 1000) + 86400000 - Math.floor(Date.now()) < 0) {
        return 0;
      } else {
        return ((timestamp * 1000) + 86400000 - Math.floor(Date.now()));
      }
    }
  }

  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const MS_PER_HOUR = 1000 * 60 * 60;
  const MS_PER_MINUTE = 1000 * 60;
  const MS_PER_SECOND = 1000;

  const formatTime = (time) => {
    let hours = (time % MS_PER_DAY) / MS_PER_HOUR;
    let minutes = (time % MS_PER_HOUR) / MS_PER_MINUTE;
    let seconds = (time % MS_PER_MINUTE) / MS_PER_SECOND;

    return(`${time > 0 ? Math.floor(hours) : Math.abs(Math.ceil(hours))}h:${time > 0 ? Math.floor(minutes) : Math.abs(Math.ceil(minutes))}m:${time > 0 ? Math.floor(seconds) : Math.abs(Math.ceil(seconds))}s`)
  }

  return (
    <div>
      {
        <p>Time until claim: {formatTime(getTimeLeft())}</p>
      }
    </div>
  );
}