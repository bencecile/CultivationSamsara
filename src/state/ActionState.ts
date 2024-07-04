import Gold from "./types/Gold";

export default class ActionState {
    readonly jobs = new Jobs();
    readonly actives = new ActiveActions();
    get activeJobPayPerDay(): Gold {
        return this.actives.activeJobs.reduce((totalGold, jobName) => {
            return totalGold.add(this.jobs[jobName].payPerDay);
        }, new Gold(0));
    }
}

export class Job {
    readonly name: JobName;
    readonly basePay: Gold;
    get payPerDay(): Gold {
        return this.basePay;
    }
    unlocked = false;

    constructor(name: JobName, basePay: Gold) {
        this.name = name;
        this.basePay = basePay;
    }
}

export enum JobName {
    Farmer = "farmer",
}

class Jobs {
    readonly [JobName.Farmer] = new Job(JobName.Farmer, Gold.asGold(0, 0, 1));
}

class ActiveActions {
    activeJobs: JobName[] = [];
    get activeMainActions(): number {
        return this.activeJobs.length;
    }
    // currentSubActions: SubAction[] = [];
}
