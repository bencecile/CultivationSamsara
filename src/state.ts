import MetaState from "./state/meta";
import { reactive } from 'vue';

class GameState {
  readonly meta: MetaState;

  constructor() {
    this.meta = new MetaState();
  }
}

export default reactive(new GameState());
