import { LangName } from "@/i18n/Language";
import State from "@/state";

const SAVE_DATA_KEY = "CultivationSamsaraSaveData";

class SaveController {
    loadSaveData(): boolean {
        let saveString = localStorage.getItem(SAVE_DATA_KEY);
        if (saveString) {
            let saveObject = stringToSaveObject(saveString);
            try {
                let saveData = validateSaveObject(saveObject);
                toGameState(saveData);
                return true;
            } catch (e: any) {
                console.log(`Failed to read the save data ${e} from ${saveObject}`);
            }
        } else {
            console.log("Failed to find any save data");
        }
        return false;
    }

    saveSaveData() {
        State.lastSaveDate = new Date();
        let saveData = fromGameState();
        let saveString = saveDataToString(saveData);
        localStorage.setItem(SAVE_DATA_KEY, saveString);
    }
}
export default new SaveController();

interface SaveData {
    readonly lang: LangName;
    readonly lastSaveDate: number;
}

function fromGameState(): SaveData {
    if (!State.lastSaveDate)
        throw new TypeError("lastSaveData was still falsey");

    return {
        lang: State.lang.currentLang,
        lastSaveDate: State.lastSaveDate.getTime(),
    };
}

function toGameState(saveData: SaveData) {
    State.setLang(saveData.lang);
    State.lastSaveDate = new Date(saveData.lastSaveDate);
}

function saveDataToString(saveData: SaveData): string {
    let jsonString = JSON.stringify(saveData);
    // Split each multi-byte character so each UTF-16 character has a max of 0xFF
    let jsonBytes = new TextEncoder().encode(jsonString);
    let binaryString = String.fromCodePoint(...Array.from(jsonBytes));
    return window.btoa(binaryString);
}

function stringToSaveObject(base64String: string): any {
    let binaryString = window.atob(base64String);
    let jsonBytes = Uint8Array.from(binaryString, c => c.codePointAt(0)!);
    let jsonString = new TextDecoder().decode(jsonBytes);
    return JSON.parse(jsonString);
}

function validateSaveObject(saveObject: any): SaveData {
    if (typeof saveObject !== "object")
        throw new TypeError("Save object wasn't an object");
    if (!("lang" in saveObject) || !(Object.values(LangName).includes(saveObject["lang"])))
        throw new TypeError("lang wasn't good on the save object");
    if (!("lastSaveDate" in saveObject) || saveObject["lastSaveDate"] <= 0)
        throw new TypeError("lastSaveDate wasn't a positive number");

    return saveObject as SaveData;
}
