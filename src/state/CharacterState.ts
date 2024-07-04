import Age from "./types/Age";
import Gold from "./types/Gold";

export default class CharacterState {
    age = Age.asYears(16, 0);
    location = GameLocation.MountainVillage;
    gold = Gold.asGold(0, 0, 0);
}

export enum GameLocation {
    MountainVillage = "mountainVillage",
}
