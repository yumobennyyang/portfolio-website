
// /components/LastCommitTime.js

import React, { useEffect, useState } from 'react';
import { getLastCommit } from '../lib/getLastCommit';

const LastCommitTime = () => {
  const [lastCommitTime, setLastCommitTime] = useState(null);
  const [timeAgo, setTimeAgo] = useState('· · ·');

  useEffect(() => {
    async function fetchData() {
      const lastCommitDate = await getLastCommit();
      setLastCommitTime(new Date(lastCommitDate));
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (lastCommitTime) {
      const intervalId = setInterval(() => {
        const currentTime = new Date();
        const timeDifference = currentTime - lastCommitTime;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeAgo(`${days}d-${hours}h-${minutes}m-${seconds}s ago`);
      }, 1000);

      return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }
  }, [lastCommitTime]);

  return <span>{timeAgo}</span>;
};

export default LastCommitTime;
