import { getFreeMemory } from './memory.js';
import { getProcessInfo } from './process.js';
import { getUptime } from './uptime.js';

const displaySystemInfo = () => {
  console.log(getFreeMemory());
  console.log(getProcessInfo());
  console.log(getUptime());
};

export default displaySystemInfo;