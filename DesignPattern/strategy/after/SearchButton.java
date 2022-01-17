package strategy.after;

public class SearchButton {

    private MyProgram _myProgram;

    public SearchButton(MyProgram myProgram) {
        set_myProgram(myProgram);
    }

    public MyProgram get_myProgram() {
        return _myProgram;
    }

    public void set_myProgram(MyProgram _myProgram) {
        this._myProgram = _myProgram;
    }

    public SearchStrategy SearchStrategy = new SearchStrategyAll();

    public void SetSearchStrategy(SearchStrategy searchStrategy) {
        SearchStrategy = searchStrategy;
    }

    public void onClick() {
        SearchStrategy.Search();
    }
}
