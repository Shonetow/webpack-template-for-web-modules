import { add } from '../src/main';

describe('Demo test', () => {
  it('should add numbers', () => {
    expect(add(2, 4)).toStrictEqual(6);
  });
});
