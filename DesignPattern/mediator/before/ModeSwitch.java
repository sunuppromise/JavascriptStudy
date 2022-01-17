package mediator.before;

public class ModeSwitch {
    Mode mode = Mode.LIST;

    ListView listView = new ListView();
    GalleryView galleryView = new GalleryView();
    DataDownloader dataDownloader = new DataDownloader();

    public void ToggleMode() {
        mode = mode == Mode.LIST ? Mode.GALLERY : Mode.LIST;

        listView.onModeChange(mode);
        galleryView.onModeChange(mode);
        dataDownloader.onModeChange(mode);
    }
}
