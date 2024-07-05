import { GameLocation } from "@/state/CharacterState";
import { JobName } from "@/state/ActionState";
import { TimeUnit } from "@/state/types/TimeUnit";
import { ref } from "vue";

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
    readonly [LangName.Ja]: string
}

let currentLang = ref(LangName.En);
export default class Language {
    get currentLang(): LangName { return currentLang.value }
    set currentLang(newLang: LangName) { currentLang.value = newLang; }
    get isWide(): boolean {
        switch (currentLang.value) {
            case LangName.ZhS:
            case LangName.ZhT:
            case LangName.Ja:
                return true;
            case LangName.En:
                return false;
        }
    }

    get nameOfLang(): string { return LangMap.nameOfLang[currentLang.value] }
    get gameName(): string { return LangMap.gameName[currentLang.value] }

    enums = {
        get [JobName.Farmer](): string { return LangMap.enums[JobName.Farmer][currentLang.value] },
        get [JobName.Woodcutter](): string { return LangMap.enums[JobName.Woodcutter][currentLang.value] },
        get [GameLocation.MountainVillage](): string { return LangMap.enums[GameLocation.MountainVillage][currentLang.value] },
    };

    readonly messages = {
        flowTime: {
            get continue(): string { return LangMap.messages.flowTime.continue[currentLang.value] },
            get pause(): string { return LangMap.messages.flowTime.pause[currentLang.value] },
        },
        github: {
            get link(): string { return LangMap.messages.github.link[currentLang.value] },
            get issue(): string { return LangMap.messages.github.issue[currentLang.value] },
        }
    };

    readonly punctuation = {
        get leftParentheses(): string { return LangMap.punctuation.leftParentheses[currentLang.value] },
        get rightParentheses(): string { return LangMap.punctuation.rightParentheses[currentLang.value] },
    };

    readonly titles = {
        get actions(): string { return LangMap.titles.actions[currentLang.value] },
        get age(): string { return LangMap.titles.age[currentLang.value] },
        get gold(): string { return LangMap.titles.gold[currentLang.value] },
        get jobs(): string { return LangMap.titles.jobs[currentLang.value] },
        get language(): string { return LangMap.titles.language[currentLang.value] },
        get level(): string { return LangMap.titles.level[currentLang.value] },
        get location(): string { return LangMap.titles.location[currentLang.value] },
        get options(): string { return LangMap.titles.options[currentLang.value] },
        get xp(): string { return LangMap.titles.xp[currentLang.value] },
    };

    readonly units = {
        gold: {
            get gold(): string { return LangMap.units.gold.gold[currentLang.value] },
            get silver(): string { return LangMap.units.gold.silver[currentLang.value] },
            get copper(): string { return LangMap.units.gold.copper[currentLang.value] },
        },
        time: {
            get [TimeUnit.Second](): string { return LangMap.units.time[TimeUnit.Second][currentLang.value] },
            get [TimeUnit.Day](): string { return LangMap.units.time[TimeUnit.Day][currentLang.value] },
            get [TimeUnit.Year](): string { return LangMap.units.time[TimeUnit.Year][currentLang.value] },
        },
    };
}

export namespace LangMap {
    export const nameOfLang: LangString = {
        [LangName.ZhS]: "简体中文",
        [LangName.ZhT]: "繁體中文",
        [LangName.En]: "English",
        [LangName.Ja]: "日本語"
    };
    export const gameName: LangString = {
        [LangName.ZhS]: "修炼：轮回到极天",
        [LangName.ZhT]: "修煉：輪迴到極天",
        [LangName.En]: "Cultivation: Samsara to the Polar Heavens",
        [LangName.Ja]: "修煉：輪廻に極天"
    };

    export const enums = {
        [JobName.Farmer]: {
            [LangName.ZhS]: "农民",
            [LangName.ZhT]: "農民",
            [LangName.En]: "Farmer",
            [LangName.Ja]: "農民"
        },
        [JobName.Woodcutter]: {
            [LangName.ZhS]: "樵夫",
            [LangName.ZhT]: "樵夫",
            [LangName.En]: "Woodcutter",
            [LangName.Ja]: "木樵"
        },
        [GameLocation.MountainVillage]: {
            [LangName.ZhS]: "山村",
            [LangName.ZhT]: "山村",
            [LangName.En]: "Mountain Village",
            [LangName.Ja]: "山村"
        },
    }

    export const messages = {
        flowTime: {
            continue: {
                [LangName.ZhS]: "开始时流",
                [LangName.ZhT]: "開始時流",
                [LangName.En]: "Start the Flow of Time",
                [LangName.Ja]: "時流を始める"
            },
            pause: {
                [LangName.ZhS]: "停止时流",
                [LangName.ZhT]: "停止時流",
                [LangName.En]: "Stop the Flow of Time",
                [LangName.Ja]: "時流を止める"
            },
        },
        github: {
            link: {
                [LangName.ZhS]: "程式码库@Github",
                [LangName.ZhT]: "程式碼庫@Github",
                [LangName.En]: "Code Repository @ Github",
                [LangName.Ja]: "コードリポジトリ＠Github"
            },
            issue: {
                [LangName.ZhS]: "若是寻找到问题（漏洞，翻译等），为我会知道请做起issue。",
                [LangName.ZhT]: "若是尋找到問題（漏洞，翻譯等），爲我會知道請做起issue。",
                [LangName.En]: "If you find any issues (bug, translation, etc.), please create an issue to let me know.",
                [LangName.Ja]: "問題が見つかったら（バグ、翻訳など）、私が知るためにissueを作ってください。"
            },
        },
    };

    export const punctuation = {
        leftParentheses: {
            [LangName.ZhS]: "（",
            [LangName.ZhT]: "（",
            [LangName.En]: "(",
            [LangName.Ja]: "（"
        },
        rightParentheses: {
            [LangName.ZhS]: "）",
            [LangName.ZhT]: "）",
            [LangName.En]: ")",
            [LangName.Ja]: "）"
        },
    };

    export const titles = {
        actions: {
            [LangName.ZhS]: "行动",
            [LangName.ZhT]: "行動",
            [LangName.En]: "Actions",
            [LangName.Ja]: "行動"
        },
        age: {
            [LangName.ZhS]: "年龄",
            [LangName.ZhT]: "年齡",
            [LangName.En]: "Age",
            [LangName.Ja]: "年齢"
        },
        gold: {
            [LangName.ZhS]: "金钱",
            [LangName.ZhT]: "金錢",
            [LangName.En]: "Gold",
            [LangName.Ja]: "お金"
        },
        jobs: {
            [LangName.ZhS]: "职业",
            [LangName.ZhT]: "職業",
            [LangName.En]: "Jobs",
            [LangName.Ja]: "職業"
        },
        language: {
            [LangName.ZhS]: "语言",
            [LangName.ZhT]: "語言",
            [LangName.En]: "Language",
            [LangName.Ja]: "言語"
        },
        level: {
            [LangName.ZhS]: "等级",
            [LangName.ZhT]: "等級",
            [LangName.En]: "Level",
            [LangName.Ja]: "レベル"
        },
        location: {
            [LangName.ZhS]: "地方",
            [LangName.ZhT]: "地方",
            [LangName.En]: "Location",
            [LangName.Ja]: "場所"
        },
        options: {
            [LangName.ZhS]: "设定",
            [LangName.ZhT]: "設定",
            [LangName.En]: "Options",
            [LangName.Ja]: "設定"
        },
        xp: {
            [LangName.ZhS]: "经验值",
            [LangName.ZhT]: "經驗值",
            [LangName.En]: "XP",
            [LangName.Ja]: "経験値"
        },
    };

    export const units = {
        gold: {
            gold: {
                [LangName.ZhS]: "金",
                [LangName.ZhT]: "金",
                [LangName.En]: "g",
                [LangName.Ja]: "金"
            },
            silver: {
                [LangName.ZhS]: "银",
                [LangName.ZhT]: "銀",
                [LangName.En]: "s",
                [LangName.Ja]: "銀"
            },
            copper: {
                [LangName.ZhS]: "铜",
                [LangName.ZhT]: "銅",
                [LangName.En]: "c",
                [LangName.Ja]: "銅"
            },
        },
        time: {
            [TimeUnit.Second]: {
                [LangName.ZhS]: "秒",
                [LangName.ZhT]: "秒",
                [LangName.En]: "s",
                [LangName.Ja]: "秒"
            },
            [TimeUnit.Day]: {
                [LangName.ZhS]: "天",
                [LangName.ZhT]: "天",
                [LangName.En]: "d",
                [LangName.Ja]: "日"
            },
            [TimeUnit.Year]: {
                [LangName.ZhS]: "年",
                [LangName.ZhT]: "年",
                [LangName.En]: "y",
                [LangName.Ja]: "年"
            },
        },
    };
}
