import os from 'os';

export const getUptime = () => {
  const uptimeSeconds = os.uptime();
  const uptimeMinutes = (uptimeSeconds / 60).toFixed(2);
  return `Tizim ishga tushganidan beri: ${uptimeMinutes} daqiqa`;
};