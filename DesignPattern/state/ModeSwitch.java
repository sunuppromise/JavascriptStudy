package state;

public class ModeSwitch {

    private ModeState _modeState = new ModeStateLigth();

    public void SetState(ModeState modeState) {
        _modeState = modeState;
    }

    public void OnSwitch() {
        _modeState.toggle(this);
    }
}
