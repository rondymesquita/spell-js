import { empty, equals, and, or } from 'regent';

export default class Spell {
    private MAGIC_WORD: string = 'Abracadabra'
    private GRIMOIRE: Array<string> = [ this.MAGIC_WORD ]

    cast(useGrimoire?: boolean):void {

        const isUsingGrimoire = equals('@useGrimoire', true);
        const noGrimoireUsageInformed = empty('@useGrimoire');
        const isMagicWordCorrect = equals('@magicWord', this.MAGIC_WORD);

        const spellFacts = {
            useGrimoire,
            magicWord: this.sayMagicWord()
        }

        const canSpellBeCasted = or(
            isUsingGrimoire,
            and(
                noGrimoireUsageInformed,
                isMagicWordCorrect
            )
        )

        if (canSpellBeCasted(spellFacts)) {
            console.log('Spell casted!')
        } else {
            throw new Error('You spell went really wrong!')
        }
    }

    private sayMagicWord():string{
        return Math.floor(Math.random() * 2) === 0
            ? this.MAGIC_WORD
            : 'Hocus Pocus'
    }
}
