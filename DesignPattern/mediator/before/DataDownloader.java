package mediator.before;

public class DataDownloader {
    public void onModeChange(Mode mode) {
        System.out.println(
                (mode == Mode.LIST ? "리스트" : "갤러리") + "뷰용 데이터 다운로드");
    }
}
