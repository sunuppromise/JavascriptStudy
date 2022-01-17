package strategy.after;

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