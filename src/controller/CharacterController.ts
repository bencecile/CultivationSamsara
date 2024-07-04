import State from "@/state";

class CharacterController {
    processOneDay() {
        State.character.age = State.character.age.addDay();
        State.character.gold = State.character.gold.add(State.action.activeJobPayPerDay);
    }
}
export default new CharacterController();
