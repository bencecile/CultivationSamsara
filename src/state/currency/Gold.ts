export default class Gold {
    readonly copper: number;
    readonly silver: number;
    readonly gold: number;

    constructor(copper: number, silver: number, gold: number) {
        if (copper < 0 || copper >= 100 || !Number.isInteger(copper))
            throw new RangeError("Copper must be 0-99");
        if (silver < 0 || silver >= 100 || !Number.isInteger(silver))
            throw new RangeError("Silver must be 0-99");
        if (gold < 0 || !Number.isInteger(gold))
            throw new RangeError("Gold must be >0")
        this.copper = copper;
        this.silver = silver;
        this.gold = gold;
    }

    get copperAmount(): number {
        return this.copper + this.silver * 100 + this.gold * 10000;
    }

    lt(other: Gold): boolean {
        return this.copperAmount < other.copperAmount;
    }
    eq(other: Gold): boolean {
        return this.copperAmount === other.copperAmount;
    }
    gt(other: Gold): boolean {
        return this.copperAmount > other.copperAmount;
    }

    add(other: Gold): Gold {
        return copperAmountToGold(this.copperAmount + other.copperAmount)
    }

    sub(other: Gold): Gold {
        return copperAmountToGold(this.copperAmount - other.copperAmount);
    }

    mult(factor: number): Gold {
        return copperAmountToGold(Math.floor(this.copperAmount * factor));
    }
}

function copperAmountToGold(copperAmount: number): Gold {
    if (copperAmount < 0)
        throw RangeError(`Gold would be negative`);
    let gold = Math.floor(copperAmount / 10000);
    copperAmount = copperAmount % 10000;
    let silver = Math.floor(copperAmount / 100);
    copperAmount = copperAmount % 100;
    return new Gold(copperAmount, silver, gold);
}
