class ShortcutController {
    readonly keyMap: Map<string, () => void> = new Map();
    isKeyPressed = false;

    hookGlobalKeyPresses() {
        window.onkeydown = (event?: KeyboardEvent) => {
            if (!event || this.shouldIgnoreKeypress(event) || this.isKeyPressed)
                return;
            this.isKeyPressed = true;

            let keyFn = this.keyMap.get(event.key);
            if (keyFn)
                keyFn();
        };
        window.onkeyup = (event?: KeyboardEvent) => {
            if (!event || this.shouldIgnoreKeypress(event))
                return;
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

    private shouldIgnoreKeypress(event: KeyboardEvent) {
        if (event.isComposing)
            return true;
        switch (event.code) {
            case "AltLeft":
            case "AltRight":
            case "ShiftLeft":
            case "ShiftRight":
            case "ControlLeft":
            case "ControlRight":
            case "MetaLeft":
            case "MetaRight":
            case "Tab":
            case "CapsLock":
            case "ContextMenu":
                return true;
        }
        return false;
    }
}
export default new ShortcutController();
