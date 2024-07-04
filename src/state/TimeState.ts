import Age from "./types/Age";

const BASE_AGE_PER_SECOND = new Age(2);
export default class TimeState {
    isFlowing = false;
    get agePerSecond(): Age {
        return BASE_AGE_PER_SECOND;
    }
}
