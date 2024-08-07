export default class Age {
    readonly totalDays: number;
    get years(): number {
        return Math.floor(this.totalDays / 365);
    }
    get days(): number {
        return this.totalDays % 365;
    }

    constructor(totalDays: number) {
        this.totalDays = Math.floor(totalDays);
    }
    static asYears(years: number, days: number): Age {
        return new Age(years * 365 + days);
    }

    addDay(): Age {
        return new Age(this.totalDays + 1);
    }
}
