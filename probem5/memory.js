import os from 'os';

export const getFreeMemory = () => {
  const freeMemory = os.freemem();
  const freeMemoryMB = (freeMemory / (1024 * 1024)).toFixed(2);
  return `Bo'sh xotira hajmi: ${freeMemoryMB} MB`;
};