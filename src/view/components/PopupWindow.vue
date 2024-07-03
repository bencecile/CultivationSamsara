<script setup lang="ts">
defineEmits(["closeClicked"]);
defineProps<{
    title: string,
}>();
</script>

<template>
    <div class="popupWindowBackground" @click="$emit('closeClicked')">
        <div class="popupWindow" @click="(e) => e.stopPropagation()">
            <div class="popupWindowBanner">
                <div class="popupWindowTitle">{{ title }}</div>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32"
                    @click="$emit('closeClicked')" class="popupWindowCloseButton">
                    <path
                        d="M18.12109,16L31.06055,3.06055c0.58594-0.58545,0.58594-1.53564,0-2.12109c-0.58594-0.58594-1.53516-0.58594-2.12109,0L16,13.87891L3.06055,0.93945c-0.58594-0.58594-1.53516-0.58594-2.12109,0c-0.58594,0.58545-0.58594,1.53564,0,2.12109L13.87891,16L0.93945,28.93945c-0.58594,0.58545-0.58594,1.53564,0,2.12109C1.23242,31.35352,1.61621,31.5,2,31.5s0.76758-0.14648,1.06055-0.43945L16,18.12109l12.93945,12.93945C29.23242,31.35352,29.61621,31.5,30,31.5s0.76758-0.14648,1.06055-0.43945c0.58594-0.58545,0.58594-1.53564,0-2.12109L18.12109,16z">
                    </path>
                </svg>
            </div>
            <div class="popupWindowBody">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.popupWindowBackground {
    position: absolute;
    background: rgba(100, 100, 100, 0.8);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.popupWindow {
    display: block;
    overflow-y: scroll;
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    background: white;
    box-shadow: black 0 0 2px 1px;
}

.popupWindowBanner {
    display: grid;
    position: sticky;
    top: 0;
    background: white;
    grid-template-columns: 1fr 1.5em;
    align-items: center;
    margin: 5px 10px 0 10px;
    padding-bottom: 5px;
    border-bottom: 2px solid black;
}

.popupWindowTitle {
    grid-column: 1 / span 2;
    grid-row: 1;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
}

.popupWindowCloseButton {
    grid-column: 2;
    grid-row: 1;
    z-index: 3;
    height: 1.3em;
    width: 1.3em;
}

.popupWindowCloseButton:hover {
    cursor: pointer;
}

.popupWindowBody {
    padding: 10px;
}

/* Portrait */
@media only screen and (max-aspect-ratio: 1/1) {
    .popupWindow {
        top: 5%;
        width: 80%;
        height: 90%;
    }
}

/* Landscape */
@media only screen and (min-aspect-ratio: 1/1) {
    .popupWindow {
        top: 10%;
        width: 50%;
        height: 80%;
    }
}
</style>
