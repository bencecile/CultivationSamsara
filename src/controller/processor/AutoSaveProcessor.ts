import State from "@/state";
import { Processor } from "../GameController";
import SaveController from "../SaveController";

class AutoSaveProcessor implements Processor {
    readonly name = "AutoSaveProcessor";

    process(deltaMs: number): void {
        if (needToAutoSave()) {
            SaveController.saveSaveData();
        }
    }
}
export default new AutoSaveProcessor();

function needToAutoSave(): boolean {
    if (State.lastSaveDate === undefined)
        return true;
    return (Date.now() - State.lastSaveDate.getTime()) > State.option.autoSaveTime;
}
