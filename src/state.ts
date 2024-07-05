import ActionState from "./state/ActionState";
import MetaState from "./state/MetaState";
import Language, { LangName } from "@/i18n/Language";
import { reactive } from 'vue';
import OptionState from "./state/OptionState";
import CharacterState from "./state/CharacterState";
import TimeState from "./state/TimeState";

export class GameState {
    lastSaveDate?: Date;
    readonly character = new CharacterState();
    readonly action = new ActionState();
    readonly meta = new MetaState();
    readonly option = new OptionState();
    readonly time = new TimeState();
    lang: Language = new Language();

    setLang(lang: LangName) {
        this.lang.currentLang = lang;
        document.documentElement.lang = lang;
        document.title = this.lang.gameName;
    }
}

export default reactive(new GameState());
