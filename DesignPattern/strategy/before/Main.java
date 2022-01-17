package strategy.before;

public class Main {

    public static void main(String[] args) {
        MyProgram myProgram = new MyProgram();
        myProgram.SetModeALL();
        myProgram.SearchButton.onClick();
        myProgram.SetModeImage();
        myProgram.SearchButton.onClick();
        myProgram.SetModeNews();
        myProgram.SearchButton.onClick();
        myProgram.SetModeMap();
        myProgram.SearchButton.onClick();
    }
}
