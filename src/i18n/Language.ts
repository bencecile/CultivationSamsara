import { GameLocation } from "@/state/CharacterState";
import { JobName } from "@/state/ActionState";

export default interface Language {
    readonly lang: LangName;
    readonly nameOfLang: string;
    readonly gameName: string;

    readonly actions: string;
    readonly age: string;
    readonly ageDays: string;
    readonly ageYears: string;
    readonly gold: string,
    readonly goldUnitGold: string;
    readonly goldUnitSilver: string;
    readonly goldUnitCopper: string;
    readonly jobs: string;
    readonly [JobName.Farmer]: string;
    readonly language: string;
    readonly location: string;
    readonly [GameLocation.MountainVillage]: string;
    readonly options: string;
    readonly perDay: string;

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
    readonly age: LangString = {
        [LangName.ZhS]: "年龄",
        [LangName.ZhT]: "年齡",
        [LangName.En]: "Age",
        [LangName.Ja]: "年齢"
    };
    readonly ageDays: LangString = {
        [LangName.ZhS]: "天",
        [LangName.ZhT]: "天",
        [LangName.En]: "D",
        [LangName.Ja]: "日"
    };
    readonly ageYears: LangString = {
        [LangName.ZhS]: "年",
        [LangName.ZhT]: "年",
        [LangName.En]: "Y",
        [LangName.Ja]: "年"
    };
    readonly gold: LangString = {
        [LangName.ZhS]: "金钱",
        [LangName.ZhT]: "金錢",
        [LangName.En]: "Gold",
        [LangName.Ja]: "お金"
    };
    readonly goldUnitGold: LangString = {
        [LangName.ZhS]: "金",
        [LangName.ZhT]: "金",
        [LangName.En]: "g",
        [LangName.Ja]: "金"
    };
    readonly goldUnitSilver: LangString = {
        [LangName.ZhS]: "银",
        [LangName.ZhT]: "銀",
        [LangName.En]: "s",
        [LangName.Ja]: "銀"
    };
    readonly goldUnitCopper: LangString = {
        [LangName.ZhS]: "铜",
        [LangName.ZhT]: "銅",
        [LangName.En]: "c",
        [LangName.Ja]: "銅"
    };
    readonly jobs: LangString = {
        [LangName.ZhS]: "职业",
        [LangName.ZhT]: "職業",
        [LangName.En]: "Jobs",
        [LangName.Ja]: "職業"
    };
    readonly [JobName.Farmer]: LangString = {
        [LangName.ZhS]: "农民",
        [LangName.ZhT]: "農民",
        [LangName.En]: "Farmer",
        [LangName.Ja]: "農民"
    };
    readonly language: LangString = {
        [LangName.ZhS]: "语言",
        [LangName.ZhT]: "語言",
        [LangName.En]: "Language",
        [LangName.Ja]: "言語"
    };
    readonly location: LangString = {
        [LangName.ZhS]: "地方",
        [LangName.ZhT]: "地方",
        [LangName.En]: "Location",
        [LangName.Ja]: "場所"
    };
    readonly [GameLocation.MountainVillage]: LangString = {
        [LangName.ZhS]: "山村",
        [LangName.ZhT]: "山村",
        [LangName.En]: "Mountain Village",
        [LangName.Ja]: "山村"
    };
    readonly options: LangString = {
        [LangName.ZhS]: "设定",
        [LangName.ZhT]: "設定",
        [LangName.En]: "Options",
        [LangName.Ja]: "設定"
    };
    readonly perDay: LangString = {
        [LangName.ZhS]: "每天",
        [LangName.ZhT]: "每天",
        [LangName.En]: "/ D",
        [LangName.Ja]: "日ごとに"
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
            age: this.age[lang],
            ageDays: this.ageDays[lang],
            ageYears: this.ageYears[lang],
            gold: this.gold[lang],
            goldUnitGold: this.goldUnitGold[lang],
            goldUnitSilver: this.goldUnitSilver[lang],
            goldUnitCopper: this.goldUnitCopper[lang],
            jobs: this.jobs[lang],
            [JobName.Farmer]: this[JobName.Farmer][lang],
            language: this.language[lang],
            location: this.location[lang],
            [GameLocation.MountainVillage]: this[GameLocation.MountainVillage][lang],
            options: this.options[lang],
            perDay: this.perDay[lang],

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

export interface LangString {
    readonly [LangName.ZhS]: string;
    readonly [LangName.ZhT]: string;
    readonly [LangName.En]: string;
    readonly [LangName.Ja]: string;
}

interface LangFunc<T> {
    readonly [LangName.ZhS]: (t: T) => string;
    readonly [LangName.ZhT]: (t: T) => string;
    readonly [LangName.En]: (t: T) => string;
    readonly [LangName.Ja]: (t: T) => string;
}
