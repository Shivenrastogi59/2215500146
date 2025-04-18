let window = [];
const WINDOW_SIZE = 10;

function updateWindow(newNumbers) {
  const prevWindow = [...window];

  newNumbers.forEach((num) => {
    if (!window.includes(num)) {
      window.push(num);
    }
  });

  while (window.length > WINDOW_SIZE) {
    window.shift();
  }

  return prevWindow;
}

function getAverage() {
  if (window.length === 0) return null;

  const sum = window.reduce((acc, val) => acc + val, 0);
  return parseFloat((sum / window.length).toFixed(2));
}

function getWindow() {
  return [...window];
}

module.exports = {
  updateWindow,
  getAverage,
  getWindow,
};
