package state;

public interface ModeState {
    public void toggle(ModeSwitch modeSwitch);
}

class ModeStateLigth implements ModeState {
    public void toggle(ModeSwitch modeSwitch) {
        System.out.println("From Light To Dark");

        modeSwitch.SetState(new ModeStateDark());
    }
}

class ModeStateDark implements ModeState {
    public void toggle(ModeSwitch modeSwitch) {
        System.out.println("From Dark To Light");

        modeSwitch.SetState(new ModeStateLigth());
    }
}