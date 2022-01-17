package adapter.search;

interface SearchStrategy {
    public void Search();
}

class SearchStrategyAll implements SearchStrategy {
    public void Search() {
        System.out.println("Serach All");
    }
}

class SearchStrategyImage implements SearchStrategy {
    public void Search() {
        System.out.println("Serach Image");
    }
}

class SearchStrategyNews implements SearchStrategy {
    public void Search() {
        System.out.println("Serach News");
    }
}

class SearchStrategyMap implements SearchStrategy {
    public void Search() {
        System.out.println("Serach Map");
    }
}

class SearchFindAdapter implements SearchStrategy {
    private FindAlgorithm findAlgorithm;

    public SearchFindAdapter(FindAlgorithm _findAlgorithm) {
        findAlgorithm = _findAlgorithm;
    }

    public void Search() {
        findAlgorithm.find(true);
    }
}