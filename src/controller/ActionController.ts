import State from "@/state";

class ActionController {
    unlockFarmer() {
        State.action.jobs.farmer.unlocked = true;
    }
}
export default new ActionController();
