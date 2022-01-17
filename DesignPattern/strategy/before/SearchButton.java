package strategy.before;

public class SearchButton {

    private MyProgram _myProgram;

    public SearchButton(MyProgram myProgram) {
        _myProgram = myProgram;
    }

    public void onClick() {
        if (_myProgram.mode == Mode.ALL) {
            System.out.println("Search All");

        } else if (_myProgram.mode == Mode.IMAGE) {
            System.out.println("Search Image");

        } else if (_myProgram.mode == Mode.NEWS) {
            System.out.println("Search News");

        } else if (_myProgram.mode == Mode.MAP) {
            System.out.println("Search Map");

        }
    }
}
