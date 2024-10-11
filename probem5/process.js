export const getProcessInfo = () => {
    return {
      pid: process.pid,
      title: process.title,
      platform: process.platform,
      version: process.version,
    };
  };