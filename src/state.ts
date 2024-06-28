import ActionState from "./state/ActionState";
import MetaState from "./state/MetaState";
import Language, { LANG_MAP, LangName } from "@/i18n/Language";
import { reactive } from 'vue';

export class GameState {
    lastSaveDate?: Date;
    readonly meta = new MetaState();
    readonly action = new ActionState();
    lang: Language = LANG_MAP.getLanguage(LangName.En);

    setLang(lang: LangName) {
        this.lang = LANG_MAP.getLanguage(lang);
        document.documentElement.lang = lang;
        document.title = this.lang.gameName;
    }
}

export default reactive(new GameState());
