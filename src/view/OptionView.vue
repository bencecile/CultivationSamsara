<script setup lang="ts">
import State from '@/state';
import LangController from "@/controller/LangController";
import PopupWindow from "./components/PopupWindow.vue";
import { LangMap, LangName } from "@/i18n/Language";

const LANGS = [
    { lang: LangName.ZhS, value: LangMap.nameOfLang[LangName.ZhS] },
    { lang: LangName.ZhT, value: LangMap.nameOfLang[LangName.ZhT] },
    { lang: LangName.En, value: LangMap.nameOfLang[LangName.En] },
    { lang: LangName.Ja, value: LangMap.nameOfLang[LangName.Ja] },
];
</script>

<template>
    <PopupWindow :title="State.lang.titles.options">
        <div id="optionView">
            <div class="optionViewSection">
                <div id="optionViewLanguageHeader">{{ State.lang.titles.language }}</div>
                <div v-for="{ lang, value } in LANGS" class="button langButton" :lang="lang"
                    :class="{ selectedLang: lang === State.lang.currentLang }"
                    @click="LangController.setLang(lang, true)">
                    {{ value }}
                </div>
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
    gap: 0.5em;
}

.optionViewSection {
    display: block;
    width: calc(100% - 1em - 4px);
    border: 2px solid black;
    border-radius: 5px;
    padding: 0.25em 0.5em;
}

#optionViewLanguageHeader {
    font-size: 1.2em;
    text-align: center;
    width: 100%;
    margin-bottom: 0.5em;
}

.selectedLang {
    background: radial-gradient(transparent 0, transparent 50%, var(--highlight-blue));
}

.langButton {
    display: block;
    width: 7.5em;
    height: 2em;
    margin-bottom: 0.25em;
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
        grid-template-columns: 1fr;
    }
}

/* Landscape */
@media only screen and (min-aspect-ratio: 1/1) {
    #optionView {
        grid-template-columns: 1fr 1fr;
    }
}
</style>
