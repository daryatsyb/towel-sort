
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  return matrix.reduce((acc, curr, index) => {
    const sortedRow = index % 2 === 0 ? curr : curr.reverse();
    return acc.concat(sortedRow);
  }, []);
}
