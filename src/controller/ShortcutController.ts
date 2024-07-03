class ShortcutController {
    readonly keyMap: Map<string, () => void> = new Map();
    isKeyPressed = false;

    hookGlobalKeyPresses() {
        window.onkeydown = (event: KeyboardEvent) => {
            if (this.isKeyPressed)
                return;
            this.isKeyPressed = true;

            let keyFn = this.keyMap.get(event.key);
            if (keyFn)
                keyFn();
        };
        window.onkeyup = () => {
            this.isKeyPressed = false;
        };
    }

    addKeyFn(key: string, keyFn: () => void) {
        if (this.keyMap.has(key)) {
            console.error(`There's already a shortcut for '${key}'`);
            return;
        }
        this.keyMap.set(key, keyFn);
    }

    removeKeyFn(key: string) {
        this.keyMap.delete(key);
    }
}
export default new ShortcutController();
