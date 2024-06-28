import Jobs, { Job } from "./action/Jobs";

export default class ActionState {
    readonly jobs = new Jobs();
}
