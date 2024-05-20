export const smoothScrollTo = (target, duration) => {
    const start = window.pageYOffset;
    const distance = target.getBoundingClientRect().top;
    let startTime = null;
  
    const easeInOutQuad = (time, from, distance, duration) => {
      time /= duration / 2;
      if (time < 1) return distance / 2 * time * time + from;
      time--;
      return -distance / 2 * (time * (time - 2) - 1) + from;
    };
  
    const animation = currentTime => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, start, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
  
    requestAnimationFrame(animation);
  };
  