export default class Spell {
    private MAGIC_WORD: string = 'Abracadabra'
    private GRIMOIRE: Array<string> = [ this.MAGIC_WORD ]

    cast(useGrimoire = false):void {
        if (useGrimoire || this.GRIMOIRE.includes(this.sayMagicWords())) {
            console.log('Spell casted!')
        } else {
            throw new Error('You spell went really wrong!')
        }
    }

    private sayMagicWords():string{
        return Math.floor(Math.random() * 2) === 0
            ? this.MAGIC_WORD
            : ''
    }
}
