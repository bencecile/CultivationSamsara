export default interface Language {
    readonly lang: LangName;
    readonly nameOfLang: string;
    readonly gameName: string;

    readonly actions: string;
    readonly farmer: string;
    readonly jobs: string;
    readonly language: string;
    readonly options: string;

    readonly githubLink: string;
    readonly githubIssue: string;
}

class LanguageMap {
    readonly nameOfLang: LangString = {
        [LangName.ZhS]: "中文 - 简体",
        [LangName.ZhT]: "中文 - 繁體",
        [LangName.En]: "English",
        [LangName.Ja]: "日本語"
    };
    readonly gameName: LangString = {
        [LangName.ZhS]: "修炼：轮回到极天",
        [LangName.ZhT]: "修煉：輪迴到極天",
        [LangName.En]: "Cultivation: Samsara to the Polar Heavens",
        [LangName.Ja]: "修煉：輪廻に極天"
    };

    readonly actions: LangString = {
        [LangName.ZhS]: "行动",
        [LangName.ZhT]: "行動",
        [LangName.En]: "Actions",
        [LangName.Ja]: "行動"
    };
    readonly farmer: LangString = {
        [LangName.ZhS]: "农民",
        [LangName.ZhT]: "農民",
        [LangName.En]: "Farmer",
        [LangName.Ja]: "農民"
    };
    readonly jobs: LangString = {
        [LangName.ZhS]: "职业",
        [LangName.ZhT]: "職業",
        [LangName.En]: "Jobs",
        [LangName.Ja]: "職業"
    };
    readonly language: LangString = {
        [LangName.ZhS]: "语言",
        [LangName.ZhT]: "語言",
        [LangName.En]: "Language",
        [LangName.Ja]: "言語"
    };
    readonly options: LangString = {
        [LangName.ZhS]: "设定",
        [LangName.ZhT]: "設定",
        [LangName.En]: "Options",
        [LangName.Ja]: "設定"
    };

    readonly githubLink: LangString = {
        [LangName.ZhS]: "程式码库@Github",
        [LangName.ZhT]: "程式碼庫@Github",
        [LangName.En]: "Code Repository @ Github",
        [LangName.Ja]: "コードリポジトリ＠Github"
    };
    readonly githubIssue: LangString = {
        [LangName.ZhS]: "若是寻找到问题（漏洞，翻译等），为我会知道请做起issue。",
        [LangName.ZhT]: "若是尋找到問題（漏洞，翻譯等），爲我會知道請做起issue。",
        [LangName.En]: "If you find any issues (bug, translation, etc.), please create an issue to let me know.",
        [LangName.Ja]: "問題が見つかったら（バグ、翻訳など）、私が知るためにissueを作ってください。"
    };

    getLanguage(lang: LangName): Language {
        return {
            lang,
            nameOfLang: this.nameOfLang[lang],
            gameName: this.gameName[lang],

            actions: this.actions[lang],
            farmer: this.farmer[lang],
            jobs: this.jobs[lang],
            language: this.language[lang],
            options: this.options[lang],

            githubLink: this.githubLink[lang],
            githubIssue: this.githubIssue[lang],
        }
    }
}
export const LANG_MAP = new LanguageMap();

export enum LangName {
    ZhS = "zh-hans",
    ZhT = "zh-hant",
    En = "en",
    Ja = "ja",
}

interface LangString {
    readonly [LangName.ZhS]: string;
    readonly [LangName.ZhT]: string;
    readonly [LangName.En]: string;
    readonly [LangName.Ja]: string;
}
