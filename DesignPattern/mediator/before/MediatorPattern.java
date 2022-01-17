package mediator.before;

public class MediatorPattern {
    public static void main(String[] args) {
        ModeSwitch modeSwitch = new ModeSwitch();

        modeSwitch.ToggleMode();
        modeSwitch.ToggleMode();
    }
}
