/* eslint-disable no-param-reassign */
/* eslint-disable max-len */

/**
 * Flag the candies to crush,
 * move to the right,
 * move down, hunt down candies,
 * if count >= 3 then start flagging
 *
 * @param {number[][]} board
 * @param {number} i
 * @param {number} j
 * @param {number} target
 * @param {number} count
 * @param {boolean} right
 * @param {boolean} down
 */

const flagCandiesToCrush = (board, i, j, target, count, right, down) => {
  if (j === board[0].length || i === board.length || Math.abs(board[i][j]) !== Math.abs(target)) {
    return count >= 3;
  }

  const shouldFlagCandiesToRight = flagCandiesToCrush(board, i, j + 1, target, right ? count + 1 : 1, true, false);
  const shouldFlagCandiesToDown = flagCandiesToCrush(board, i + 1, j, target, down ? count + 1 : 1, false, true);

  if ((shouldFlagCandiesToRight && right) || (shouldFlagCandiesToDown && down)) {
    board[i][j] = -Math.abs(board[i][j]);
    return true;
  }

  return false;
};

/**
 * Destroy the candies which are
 * flagged, make them 0
 *
 *
 * @param {number[][]} board
 */
const crushTheCandies = (board) => {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (board[i][j] < 0) board[i][j] = 0;
    }
  }
};

/**
 * Reset the board, as in move non-zero
 * numbers closer to base
 *
 * @param {number[][]} board
 */
const resetBoard = (board) => {
  for (let j = 0; j < board[0].length; j += 1) {
    let start = board.length - 1;
    let end = board.length - 2;
    while (end >= 0) {
      if (board[start][j] === 0 && board[end][j] !== 0) {
        const temp = board[start][j];
        board[start][j] = board[end][j];
        board[end][j] = temp;
        start -= 1;
      } else if (board[start][j] !== 0) {
        start -= 1;
      }
      end -= 1;
    }
  }
};

/**
 * @param {number[][]} board
 * @return {number[][]}
 */
const candyCrush = (board) => {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    let moreToCrush = false;

    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[0].length; j += 1) {
        if (board[i][j] > 0) {
          moreToCrush = flagCandiesToCrush(board, i, j, board[i][j], 0, true, false) || moreToCrush;
          moreToCrush = flagCandiesToCrush(board, i, j, board[i][j], 0, false, true) || moreToCrush;
        }
      }
    }

    if (!moreToCrush) break;

    crushTheCandies(board);
    resetBoard(board);
  }

  return board;
};

export default candyCrush;
