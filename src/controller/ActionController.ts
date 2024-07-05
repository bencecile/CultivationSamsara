import State from "@/state";
import { JobName } from "@/state/ActionState";

class ActionController {
    unlockFarmer() {
        State.action.jobs.farmer.unlocked = true;
    }

    toggleSelectedJob(jobName: JobName) {
        if (State.action.activeJob === jobName) {
            State.action.activeJob = undefined;
        } else {
            State.action.activeJob = jobName;
        }
    }

    processOneDay() {
        if (State.action.activeJob) {
            const job = State.action.jobs[State.action.activeJob];
            job.currentXp += job.xpGain;
            while (job.currentXp >= job.xpToLevel) {
                job.currentXp -= job.xpToLevel;
                job.level += 1;
            }
        }
    }
}
export default new ActionController();
