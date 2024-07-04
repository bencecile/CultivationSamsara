import State from "@/state";
import { Processor } from "../GameController";

export default class TimeFlowProcessor implements Processor {
    readonly name = "TimeFlowProcessor";
    private leftoverMs = 0;
    private dayFn: () => void;

    constructor(dayFn: () => void) {
        this.dayFn = dayFn;
    }

    process(deltaMs: number): void {
        const msPerDay = 1000 / State.time.agePerSecond.totalDays;
        let totalMs = this.leftoverMs + deltaMs;

        // Every loop is a day that needs to be processed
        while (totalMs >= msPerDay) {
            totalMs -= msPerDay;
            this.dayFn();
        }
        this.leftoverMs = totalMs;
    }
}
