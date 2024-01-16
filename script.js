function throttle(callback, delay) {
  let timeoutId;
  let lastArgs;

  const throttled = function(...args) {
    lastArgs = args;
    if (!timeoutId) {
      callback.apply(this, lastArgs);
      timeoutId = setTimeout(() => {
        timeoutId = null;
        if (lastArgs) {
          callback.apply(this, lastArgs);
          lastArgs = null;
        }
      }, delay);
    }
  };

  throttled.cancel = function() {
    clearTimeout(timeoutId);
    timeoutId = null;
    lastArgs = null;
  };

  return throttled;
}
module.exports= throttle