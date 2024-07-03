import State from "@/state";
import { Processor } from "../GameController";
import SaveController from "../SaveController";

export default class AutoSaveProcessor implements Processor {
    readonly name = "AutoSaveProcessor";

    process(deltaMs: number): void {
        if (needToAutoSave()) {
            SaveController.saveSaveData();
        }
    }
}

function needToAutoSave(): boolean {
    if (State.lastSaveDate === undefined)
        return true;
    return (Date.now() - State.lastSaveDate.getTime()) > State.option.autoSaveTime;
}
