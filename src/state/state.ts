import { reactive } from 'vue';

class GameState {
  count: number;

  constructor() {
    this.count = 0;
  }

  get doubleCount(): number {
    return this.count * 2;
  }

  increment() {
    this.count++;
  }
}

export const State = reactive(new GameState());
