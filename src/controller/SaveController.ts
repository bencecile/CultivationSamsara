import { LangName } from "@/i18n/Language";
import { GameState } from "@/state";

const SAVE_DATA_KEY = "CultivationSamsaraSaveData";

class SaveController {
    loadSaveData(state: GameState): boolean {
        let saveString = localStorage.getItem(SAVE_DATA_KEY);
        if (saveString) {
            let saveObject = JSON.parse(saveString);
            try {
                let saveData = validateSaveObject(saveObject);
                toGameState(saveData, state);
                return true;
            } catch (e: any) {
                console.log(`Failed to read the save data ${e} from ${saveObject}`);
            }
        } else {
            console.log("Failed to find any save data");
        }
        return false;
    }

    saveSaveData(state: GameState) {
        let saveData = fromGameState(state);
        let saveString = JSON.stringify(saveData);
        localStorage.setItem(SAVE_DATA_KEY, saveString);
    }
}
export default new SaveController();

interface SaveData {
    readonly lang: LangName;
}

function fromGameState(state: GameState): SaveData {
    return {
        lang: state.lang.lang,
    };
}

function toGameState(saveData: SaveData, state: GameState) {
    state.setLang(saveData.lang);
}

function validateSaveObject(saveObject: any): SaveData {
    if (typeof saveObject !== "object")
        throw new TypeError("Save object wasn't an object");
    if (!("lang" in saveObject) || !(Object.values(LangName).includes(saveObject["lang"])))
        throw new TypeError("lang wasn't good on the save object");

    return saveObject as SaveData;
}
