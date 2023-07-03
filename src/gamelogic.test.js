import { createBoard, placeThingy } from "./gamelogic";

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
});