import Gold from "./types/Gold";

export default class ActionState {
    readonly jobs = new Jobs();
    activeJob?: JobName;
    // currentSubAction?: SubAction;
    get activeJobPayPerDay(): Gold {
        let total = new Gold(0);
        if (this.activeJob)
            total = total.add(this.jobs[this.activeJob].payPerDay)
        return total;
    }
}

export abstract class Job {
    readonly abstract name: JobName;
    readonly abstract baseXpGain: number;
    readonly abstract baseXpTotal: number;
    readonly abstract baseXpTotalRate: number
    readonly abstract basePay: Gold;
    readonly abstract basePayGain: number;
    unlocked = false;
    level = 0;
    currentXp = 0;
    get xpGain(): number {
        return this.baseXpGain;
    }
    get xpToLevel(): number {
        return this.getLevelXp(this.level);
    }
    get payPerDay(): Gold {
        return this.getLevelPay(this.level);
    }

    getLevelXp(level: number): number {
        return Math.floor(this.baseXpTotal * Math.pow(this.baseXpTotalRate, level));
    }
    getLevelPay(level: number): Gold {
        return this.basePay.mult((level + 1) * this.basePayGain);
    }
}

export enum JobName {
    Farmer = "farmer",
    Woodcutter = "woodcutter",
}

class Jobs {
    readonly [JobName.Farmer] = new class Farmer extends Job {
        readonly name = JobName.Farmer;
        readonly basePay = Gold.asGold(0, 0, 1);
        readonly baseXpGain = 1;
        readonly baseXpTotal = 10;
        readonly baseXpTotalRate = 1.2;
        readonly basePayGain = 1.2;
    };
    readonly [JobName.Woodcutter] = new class Woodcutter extends Job {
        readonly name = JobName.Woodcutter;
        readonly basePay = Gold.asGold(0, 0, 5);
        readonly baseXpGain = 2;
        readonly baseXpTotal = 30;
        readonly baseXpTotalRate = 1.5;
        readonly basePayGain = 1.5;
    };
    // readonly [JobName.Farmer] = new Job(JobName.Farmer, Gold.asGold(0, 0, 1), 1, 10, );
}
