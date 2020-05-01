import Spell from './spell'
// import jest from 'jest'
// import { mocked } from 'ts-jest/utils'

// interface Random {
//   mockResolvedValue (number) {}
// }

// interface Math {
//   random: Random
// }

describe('asd', function (){
  test('Should cast a spell right away', function () {
    const s = jest.spyOn(Math, 'random').mockReturnValue(0);
    const spell = new Spell();
    spell.cast()
  })
  test('Should cast a spell when magic words are correct', function () {
    const s = jest.spyOn(Math, 'random').mockReturnValue(0);
    const spell = new Spell();
    const assert = () => {
      spell.cast()
    };
    expect(assert).not.toThrow();
  })

  test('Should cast a spell when magic words are incorrect', function () {
    const s = jest.spyOn(Math, 'random').mockReturnValue(1);
    const spell = new Spell();
    const assert = () => {
      spell.cast()
    };
    expect(assert).toThrow();
  })
})

