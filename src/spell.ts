export default class Spell {
    private MAGIC_WORD: string = 'Abracadabra'
    private GRIMOIRE: Array<string> = [ this.MAGIC_WORD ]

    cast(useGrimoire?: boolean):void {
        // console.log('useGrimoire', useGrimoire)
        if (useGrimoire === undefined) {
            if (this.sayMagicWords() === this.MAGIC_WORD) {
                console.log('Spell casted!')
            } else {
                throw new Error('You spell went really wrong!')
            }
        }
        // if (useGrimoire) {
        //     console.log('Spell casted!')
        // } else {
        //     throw new Error('You spell went really wrong!')
        // }
    }

    private sayMagicWords():string{
        return Math.floor(Math.random() * 2) === 0
            ? this.MAGIC_WORD
            : ''
    }
}
