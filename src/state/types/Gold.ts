export default class Gold {
    readonly totalCopper: number;
    get gold(): number {
        return Math.floor(this.totalCopper / 10000);
    }
    get silver(): number {
        return Math.floor((this.totalCopper % 10000) / 100);
    }
    get copper(): number {
        return this.totalCopper % 100;
    }

    constructor(totalCopper: number) {
        this.totalCopper = Math.floor(totalCopper);
    }
    static asGold(gold: number, silver: number, copper: number): Gold {
        return new Gold(gold * 10000 + silver * 100 + copper);
    }

    lt(other: Gold): boolean {
        return this.totalCopper < other.totalCopper;
    }
    eq(other: Gold): boolean {
        return this.totalCopper === other.totalCopper;
    }
    gt(other: Gold): boolean {
        return this.totalCopper > other.totalCopper;
    }

    add(other: Gold): Gold {
        return new Gold(this.totalCopper + other.totalCopper)
    }

    sub(other: Gold): Gold {
        return new Gold(this.totalCopper - other.totalCopper);
    }

    mult(factor: number): Gold {
        return new Gold(Math.floor(this.totalCopper * factor));
    }
}
