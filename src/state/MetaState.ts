export default class MetaState {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    constructor() {
    }

    get isLandscape(): boolean {
        return this.windowWidth - this.windowHeight >= 0;
    }
}
