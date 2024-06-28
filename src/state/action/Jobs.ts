import Gold from "../currency/Gold";

export default class Jobs {
    readonly farmer = new Job("Farmer", new Gold(10, 0, 0));
}

export class Job {
    readonly name: string;
    readonly basePay: Gold;
    unlocked = false;

    constructor(name: string, basePay: Gold) {
        this.name = name;
        this.basePay = basePay;
    }
}
