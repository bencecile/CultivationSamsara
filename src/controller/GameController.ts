import State from "@/state";

class GameController {
    lastRequestId = 0;
    lastMs: number = performance.now();
    readonly processors: Map<string, Processor> = new Map();

    hookGameLoop() {
        this.lastRequestId = window.requestAnimationFrame(updateTimeStamp => this.processGameLoop(updateTimeStamp));
    }

    processGameLoop(updateTimeStamp: number) {
        const deltaMs = updateTimeStamp - this.lastMs;

        // Only update if we are set to by the update time
        if (deltaMs >= State.option.updateTime) {
            this.processors.forEach(p => p.process(deltaMs));
            this.lastMs = updateTimeStamp;
        }

        this.hookGameLoop();
    }

    addProcessor(processor: Processor) {
        // Ensure we don't add a duplicate processor
        if (!this.processors.has(processor.name))
            this.processors.set(processor.name, processor);
    }

    removeProcessor(processor: Processor) {
        this.processors.delete(processor.name);
    }
}
export default new GameController();

export interface Processor {
    readonly name: string;

    process(deltaMs: number): void;
}
