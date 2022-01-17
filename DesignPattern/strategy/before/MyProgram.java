package strategy.before;

public class MyProgram {

    public SearchButton SearchButton = new SearchButton(this);

    public Mode mode = Mode.ALL;

    public void SetModeALL() {
        mode = Mode.ALL;
    }

    public void SetModeImage() {
        mode = Mode.IMAGE;
    }

    public void SetModeNews() {
        mode = Mode.NEWS;
    }

    public void SetModeMap() {
        mode = Mode.MAP;
    }
}