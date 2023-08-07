import { checkWinner, createBoard, placeThingy } from "./gamelogic";

describe('createBoard', () => {
  it('creates a 6x7 board with all cells set to null', () => {
    const board = createBoard();
    expect(board).toEqual([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]);
  });
});

describe('placeThingy', () => {
  it('mutates board to place 1 at location 5, 0', () => {
    const board = createBoard();
    placeThingy(board, 1, 5, 0)
    expect(board).toEqual([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [1, null, null, null, null, null, null],
    ]);
  });
  it('invalid move, row below unoccupied', () => {
    const board = createBoard();
    expect(() => placeThingy(board, 1, 4, 0) // second from bottom-row (4).
    ).toThrow("Invalid move 4, 0!")
  });
  it('invalid move, place is occupied', () => {
    const board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [1, null, null, null, null, null, null],
    ];
    expect(() => placeThingy(board, 1, 5, 0) // second from bottom-row (4).
    ).toThrow("Invalid move 5, 0!")
  });
});

describe('checkWinner', () => {
  it('horizontal winner', () => {
    const board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, 1, 1, 1, 1, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    expect(checkWinner(board)).toEqual(1);
  });
  it('vertical winner', () => {
    const board = [
      [null, null, null, null, null, null, null],
      [null, null, null, 1, null, null, null],
      [null, null, null, 1, null, null, null],
      [null, null, null, 1, null, null, null],
      [null, null, null, 1, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    expect(checkWinner(board)).toEqual(1);
  });
  it('diagonal (left to right) winner', () => {
    const board = [
      [null, null, null, null, null, null, null],
      [null, null, 1, null, null, null, null],
      [null, null, null, 1, null, null, null],
      [null, null, null, null, 1, null, null],
      [null, null, null, null, null, 1, null],
      [null, null, null, null, null, null, null],
    ]
    expect(checkWinner(board)).toEqual(1);
  });
  it('diagonal (right to left) winner', () => {
    const board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, 1, null, null],
      [null, null, null, 1, null, null, null],
      [null, null, 1, null, null, null, null],
      [null, 1, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
    expect(checkWinner(board)).toEqual(1);
  });
});