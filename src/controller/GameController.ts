class GameController {
    lastRequestId = 0;
    lastMs: number = performance.now();
    readonly processors: Map<string, Processor> = new Map();

    hookGameLoop() {
        this.lastRequestId = window.requestAnimationFrame(this.processGameLoop);
    }

    processGameLoop(updateTimeStamp: number) {
        const deltaMs = updateTimeStamp - this.lastMs;

        // TODO Check for the set update time from options to skip this processing or not

        this.processors.forEach(p => p.process(deltaMs));
        this.lastMs = updateTimeStamp;

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
