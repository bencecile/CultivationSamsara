import { LangName } from "@/i18n/Language";
import State from "@/state";

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
        State.setLang(langName);
    }
}
export default new LangController();
