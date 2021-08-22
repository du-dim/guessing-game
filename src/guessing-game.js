class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max;
        this.min = min;
        this.num = Math.ceil((this.max + this.min)/2);
    }

    guess() {        
        return this.num;
    }

    lower() {  
        this.setRange(this.min, this.num);            
    }

    greater() {
        this.setRange(this.num, this.max);           
    }
}

module.exports = GuessingGame;
