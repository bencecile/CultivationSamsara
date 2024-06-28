<script setup lang="ts">
import State from '@/state';
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
    <PopupWindow :title="State.lang.options">
        <div id="optionView">
            <div id="optionViewLanguageSection">
                <div id="optionViewLanguageHeader">{{ State.lang.language }}</div>
                <button v-for="{ lang, value } in LANGS"
                    :class="{ selectedLang: lang === State.lang.lang, langButton: true }" @click="State.setLang(lang)">
                    {{ value }}
                </button>
            </div>
            <div id="optionViewGithubSection">
                <a href="https://github.com/bencecile/CultivationSamsara" target="_blank">
                    {{ State.lang.githubLink }}
                </a>
                <p>{{ State.lang.githubIssue }}</p>
            </div>
        </div>
    </PopupWindow>
</template>

<style scoped>
#optionView {
    display: grid;
    gap: 10px;
}

#optionView>div {
    display: block;
    width: calc(100% - 20px - 4px);
    border: 2px solid black;
    border-radius: 5px;
    padding: 5px 10px;
}

#optionViewLanguageHeader {
    font-size: 120%;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
}

.selectedLang {
    background: radial-gradient(transparent 0, transparent 50%, black);
}

.langButton {
    display: block;
    width: 10em;
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
