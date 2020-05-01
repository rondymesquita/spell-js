import Spell from './spell'

describe('Spell', function (){
  test('Should cast a spell right away', function () {
    const s = jest.spyOn(Math, 'random').mockReturnValue(0);
    const spell = new Spell();
    spell.cast()
  })

  describe('Should cast a spell', function () {
    test('When magic words are correct', function () {
      const s = jest.spyOn(Math, 'random').mockReturnValue(0);
      const spell = new Spell();
      const assert = () => {
        spell.cast()
      };
      expect(assert).not.toThrow();
    })

    test('When using grimoire', function () {
      const spell = new Spell();
      const assert = () => {
        spell.cast(true)
      };
      expect(assert).not.toThrow();
    })
  })

  describe('Should not cast a spell', function () {
    test('When magic words are incorrect', function () {
      const s = jest.spyOn(Math, 'random').mockReturnValue(1);
      const spell = new Spell();
      const assert = () => {
        spell.cast()
      };
      expect(assert).toThrow();
    })
    test('When not using a grimoire', function () {
      const spell = new Spell();
      const assert = () => {
        spell.cast(false)
      };
      expect(assert).toThrow();
    })
  })
})

