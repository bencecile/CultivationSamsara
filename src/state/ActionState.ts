import Gold from "./types/Gold";

export default class ActionState {
    readonly jobs = new Jobs();
}

class Jobs {
    readonly farmer = new Job(JobName.Farmer, Gold.asGold(0, 0, 1));
}

export class Job {
    readonly name: JobName;
    readonly basePay: Gold;
    unlocked = false;

    constructor(name: JobName, basePay: Gold) {
        this.name = name;
        this.basePay = basePay;
    }
}

export enum JobName {
    Farmer = "farmer",
}
