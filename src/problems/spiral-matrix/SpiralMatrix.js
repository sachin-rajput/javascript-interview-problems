const spiralOrder = (matrix) => {
  if (!matrix || matrix.length === 0) return [];

  if (matrix[0].length === 0) return matrix[0];

  const result = [];
  const visited = [...Array(matrix.length)].map(() => {
    return Array(matrix[0].length).fill(false);
  });

  const addToResult = (r, c) => {
    if (!visited[r][c]) {
      result.push(matrix[r][c]);
      visited[r][c] = true;
    }
  };

  const traverse = (index, direction, reverse) => {
    const len = direction === "row" ? matrix[index].length : matrix.length;
    if (reverse) {
      for (let i = len - 1; i >= 0; i -= 1) {
        if (direction === "row") addToResult(index, i);
        else addToResult(i, index);
      }
    } else {
      for (let i = 0; i < len; i += 1) {
        if (direction === "row") addToResult(index, i);
        else addToResult(i, index);
      }
    }
  };

  let rowStart = 0;
  let rowEnd = matrix[0].length - 1;

  let colStart = 0;
  let colEnd = matrix.length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    if (rowStart === rowEnd) {
      traverse(rowStart, "row");
      traverse(rowEnd, "col");
    } else {
      traverse(rowStart, "row");
      traverse(rowEnd, "col");

      traverse(colEnd, "row", true);
      traverse(colStart, "col", true);
    }

    rowStart += 1;
    rowEnd -= 1;

    colStart += 1;
    colEnd -= 1;
  }

  return result;
};

// const input = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

// console.log(spiralOrder(input));

export default spiralOrder;
