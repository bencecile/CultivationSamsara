<script setup lang="ts">
import State from '@/state';
import LangController from "@/controller/LangController";
import PopupWindow from "./components/PopupWindow.vue";
import { LANG_MAP, LangName } from "@/i18n/Language";

const LANGS = [
    { lang: LangName.ZhS, value: LANG_MAP.nameOfLang[LangName.ZhS] },
    { lang: LangName.ZhT, value: LANG_MAP.nameOfLang[LangName.ZhT] },
    { lang: LangName.En, value: LANG_MAP.nameOfLang[LangName.En] },
    { lang: LangName.Ja, value: LANG_MAP.nameOfLang[LangName.Ja] },
];
</script>

<template>
    <PopupWindow :title="State.lang.titles.options">
        <div id="optionView">
            <div class="optionViewSection">
                <div id="optionViewLanguageHeader">{{ State.lang.titles.language }}</div>
                <button v-for="{ lang, value } in LANGS" class="langButton"
                    :class="{ selectedLang: lang === State.lang.lang }" @click="LangController.setLang(lang, true)">
                    {{ value }}
                </button>
            </div>
            <div class="optionViewSection">
                TODO Game options
            </div>
            <div class="optionViewSection">
                TODO last save datetime, auto save time, save game, export/import save, delete save
            </div>
            <div class="optionViewSection">
                TODO Game title, game version, game patch notes, author name, cultivation wiki page
            </div>
            <div class="optionViewSection">
                TODO Shortcut keys
            </div>
            <div class="optionViewSection">
                <a href="https://github.com/bencecile/CultivationSamsara" target="_blank">
                    {{ State.lang.messages.github.link }}
                </a>
                <p>{{ State.lang.messages.github.issue }}</p>
            </div>
        </div>
    </PopupWindow>
</template>

<style scoped>
#optionView {
    display: grid;
    gap: 10px;
}

.optionViewSection {
    display: block;
    width: calc(100% - 20px - 4px);
    border: 2px solid black;
    border-radius: 5px;
    padding: 5px 10px;
}

#optionViewLanguageHeader {
    font-size: 1.2em;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
}

.selectedLang {
    background: radial-gradient(transparent 0, transparent 50%, black);
}

.langButton {
    display: block;
    width: 7.5em;
    height: 2em;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
}

#optionViewGithubSection {
    font-size: 0.75em;
    line-height: 1em;
}

/* Portrait */
@media only screen and (max-aspect-ratio: 1/1) {
    #optionView {
        grid-template-columns: 1fr 1fr;
    }
}

/* Landscape */
@media only screen and (min-aspect-ratio: 1/1) {
    #optionView {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>
