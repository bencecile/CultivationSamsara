import ActionState from "./state/ActionState";
import MetaState from "./state/MetaState";
import Language, { LANG_MAP, LangName } from "@/i18n/Language";
import { reactive } from 'vue';
import OptionState from "./state/OptionState";
import CharacterState from "./state/CharacterState";

export class GameState {
    lastSaveDate?: Date;
    readonly character = new CharacterState();
    readonly action = new ActionState();
    readonly meta = new MetaState();
    readonly option = new OptionState();
    lang: Language = LANG_MAP.getLanguage(LangName.En);

    setLang(lang: LangName) {
        this.lang = LANG_MAP.getLanguage(lang);
        document.documentElement.lang = lang;
        document.title = this.lang.gameName;
    }
}

export default reactive(new GameState());
