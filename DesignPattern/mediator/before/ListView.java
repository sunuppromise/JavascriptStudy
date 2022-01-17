package mediator.before;

public class ListView {
    public void onModeChange(Mode mode) {
        System.out.println(
                "리스트뷰 " + (mode == Mode.LIST ? "보여줌" : "숨김"));
    }
}
