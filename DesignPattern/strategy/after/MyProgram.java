package strategy.after;

public class MyProgram {

    private SearchButton _searchButton = new SearchButton(this);

    public void SetModeALL() {
        _searchButton.SetSearchStrategy(new SearchStrategyAll());
    };

    public void SetModeImage() {
        _searchButton.SetSearchStrategy(new SearchStrategyImage());
    };

    public void SetModeNews() {
        _searchButton.SetSearchStrategy(new SearchStrategyNews());
    };

    public void SetModeMap() {
        _searchButton.SetSearchStrategy(new SearchStrategyMap());
    };

    public void TestProgram() {
        SetModeALL();
        _searchButton.onClick();
        SetModeImage();
        _searchButton.onClick();
        SetModeNews();
        _searchButton.onClick();
        SetModeMap();
        _searchButton.onClick();
    }
}