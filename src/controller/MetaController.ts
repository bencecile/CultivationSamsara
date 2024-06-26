import State from "@/state";

class MetaController {
    setWindowResize() {
        window.onresize = () => {
            State.meta.windowWidth = window.innerWidth;
            State.meta.windowHeight = window.innerHeight;
        };
    }
}

export default new MetaController();
