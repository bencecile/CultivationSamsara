import State from "@/state";
import GameController from "./GameController";
import TimeFlowProcessor from "./processor/TimeFlowProcessor";
import CharacterController from "./CharacterController";
import ActionController from "./ActionController";

class TimeController {
    private timeFlowProcessor = new TimeFlowProcessor(() => this.processOneDay());

    toggleFlowOfTime() {
        if (State.time.isFlowing) {
            GameController.removeProcessor(this.timeFlowProcessor);
            State.time.isFlowing = false;
        } else {
            GameController.addProcessor(this.timeFlowProcessor);
            State.time.isFlowing = true;
        }
    }

    private processOneDay() {
        CharacterController.processOneDay();
        ActionController.processOneDay();
    }
}
export default new TimeController();
