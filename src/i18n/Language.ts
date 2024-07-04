import { GameLocation } from "@/state/CharacterState";
import { JobName } from "@/state/ActionState";
import { TimeUnit } from "@/state/types/TimeUnit";

export default interface Language {
    readonly lang: LangName;
    get isWide(): boolean;
    readonly nameOfLang: string;
    readonly gameName: string;

    readonly enums: {
        readonly [JobName.Farmer]: string;
        readonly [GameLocation.MountainVillage]: string;
    };

    readonly messages: {
        readonly flowTime: {
            readonly continue: string;
            readonly pause: string;
        };
        readonly github: {
            readonly link: string;
            readonly issue: string;
        }
    };

    readonly punctuation: {
        readonly leftParentheses: string;
        readonly rightParentheses: string;
        readonly slash: string;
    };

    readonly titles: {
        readonly actions: string;
        readonly age: string;
        readonly gold: string;
        readonly goldIncomePerDay: string;
        readonly jobs: string;
        readonly language: string;
        readonly location: string;
        readonly options: string;
    };

    readonly units: {
        readonly gold: {
            readonly gold: string;
            readonly silver: string;
            readonly copper: string;
        };
        readonly time: {
            readonly [TimeUnit.Second]: string;
            readonly [TimeUnit.Day]: string;
            readonly [TimeUnit.Year]: string;
        };
    };
}

interface LanguageMap {
    readonly nameOfLang: LangString;
    readonly gameName: LangString;

    readonly enums: {
        readonly [JobName.Farmer]: LangString;
        readonly [GameLocation.MountainVillage]: LangString;
    };

    readonly messages: {
        readonly flowTime: {
            readonly continue: LangString;
            readonly pause: LangString;
        };
        readonly github: {
            readonly link: LangString;
            readonly issue: LangString;
        }
    };

    readonly punctuation: {
        readonly leftParentheses: LangString;
        readonly rightParentheses: LangString;
        readonly slash: LangString;
    };

    readonly titles: {
        readonly actions: LangString;
        readonly age: LangString;
        readonly gold: LangString;
        readonly goldIncomePerDay: LangString;
        readonly jobs: LangString;
        readonly language: LangString;
        readonly location: LangString;
        readonly options: LangString;
    };

    readonly units: {
        readonly gold: {
            readonly gold: LangString;
            readonly silver: LangString;
            readonly copper: LangString;
        };
        readonly time: {
            readonly day: LangString;
            readonly second: LangString;
            readonly year: LangString;
        };
    };

    getLanguage(lang: LangName): Language;
}

export enum LangName {
    ZhS = "zh-hans",
    ZhT = "zh-hant",
    En = "en",
    Ja = "ja",
}

export const LANG_MAP: LanguageMap = {
    nameOfLang: {
        [LangName.ZhS]: "中文 - 简体",
        [LangName.ZhT]: "中文 - 繁體",
        [LangName.En]: "English",
        [LangName.Ja]: "日本語"
    },
    gameName: {
        [LangName.ZhS]: "修炼：轮回到极天",
        [LangName.ZhT]: "修煉：輪迴到極天",
        [LangName.En]: "Cultivation: Samsara to the Polar Heavens",
        [LangName.Ja]: "修煉：輪廻に極天"
    },

    enums: {
        [JobName.Farmer]: {
            [LangName.ZhS]: "农民",
            [LangName.ZhT]: "農民",
            [LangName.En]: "Farmer",
            [LangName.Ja]: "農民"
        },
        [GameLocation.MountainVillage]: {
            [LangName.ZhS]: "山村",
            [LangName.ZhT]: "山村",
            [LangName.En]: "Mountain Village",
            [LangName.Ja]: "山村"
        },
    },

    messages: {
        flowTime: {
            continue: {
                [LangName.ZhS]: "开始时流",
                [LangName.ZhT]: "開始時流",
                [LangName.En]: "Start the Flow of Time",
                [LangName.Ja]: "時流を始める"
            },
            pause: {
                [LangName.ZhS]: "止住时流",
                [LangName.ZhT]: "止住時流",
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
    },

    punctuation: {
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
        slash: {
            [LangName.ZhS]: "／",
            [LangName.ZhT]: "／",
            [LangName.En]: "/",
            [LangName.Ja]: "／"
        },
    },

    titles: {
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
        goldIncomePerDay: {
            [LangName.ZhS]: "每天金钱收入",
            [LangName.ZhT]: "每天金錢收入",
            [LangName.En]: "Gold Income Per Day",
            [LangName.Ja]: "日ごとに収入お金"
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
    },

    units: {
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
    },

    getLanguage(lang: LangName): Language {
        return {
            lang,
            get isWide(): boolean {
                switch (this.lang) {
                    case LangName.ZhS:
                    case LangName.ZhT:
                    case LangName.Ja:
                        return true;
                    case LangName.En:
                        return false;
                }
            },
            nameOfLang: this.nameOfLang[lang],
            gameName: this.gameName[lang],

            enums: {
                [JobName.Farmer]: this.enums[JobName.Farmer][lang],
                [GameLocation.MountainVillage]: this.enums[GameLocation.MountainVillage][lang],
            },

            messages: {
                flowTime: {
                    continue: this.messages.flowTime.continue[lang],
                    pause: this.messages.flowTime.pause[lang],
                },
                github: {
                    link: this.messages.github.link[lang],
                    issue: this.messages.github.issue[lang],
                },
            },

            punctuation: {
                leftParentheses: this.punctuation.leftParentheses[lang],
                rightParentheses: this.punctuation.rightParentheses[lang],
                slash: this.punctuation.slash[lang],
            },

            titles: {
                actions: this.titles.actions[lang],
                age: this.titles.age[lang],
                gold: this.titles.gold[lang],
                goldIncomePerDay: this.titles.goldIncomePerDay[lang],
                jobs: this.titles.jobs[lang],
                language: this.titles.language[lang],
                location: this.titles.location[lang],
                options: this.titles.options[lang],
            },

            units: {
                gold: {
                    gold: this.units.gold.gold[lang],
                    silver: this.units.gold.silver[lang],
                    copper: this.units.gold.copper[lang],
                },
                time: {
                    [TimeUnit.Second]: this.units.time[TimeUnit.Second][lang],
                    [TimeUnit.Day]: this.units.time[TimeUnit.Day][lang],
                    [TimeUnit.Year]: this.units.time[TimeUnit.Year][lang],
                },
            },
        }
    }
};

export abstract class LangString {
    readonly abstract [LangName.ZhS]: string;
    readonly abstract [LangName.ZhT]: string;
    readonly abstract [LangName.En]: string;
    readonly abstract [LangName.Ja]: string;
}
