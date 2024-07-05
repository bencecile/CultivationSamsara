import { LangName } from "@/i18n/Language";
import State from "@/state";
import SaveController from "./SaveController";

class LangController {
    chooseLangOfUser() {
        const userLang = navigator.language.toLocaleLowerCase();
        const langName = (() => {
            if (userLang.startsWith("zh")) {
                if (userLang.includes("hant"))
                    return LangName.ZhT;
                return LangName.ZhS;
            }
            if (userLang.startsWith("ja"))
                return LangName.Ja;
            return LangName.En;
        })();
        this.setLang(langName, false);
    }

    setLang(lang: LangName, willSave: boolean) {
        State.setLang(lang);
        if (willSave)
            SaveController.saveSaveData();
    }
}
export default new LangController();
