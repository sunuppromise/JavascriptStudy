package mediator.before;

public class GalleryView {
    public void onModeChange(Mode mode) {
        System.out.println(
                "갤러리뷰 " + (mode == Mode.GALLERY ? "보여줌" : "숨김"));
    }
}
