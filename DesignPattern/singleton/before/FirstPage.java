package singleton.before;

public class FirstPage {
    private Settings _settings = new Settings();

    public void SetAndPrintSettings() {
        _settings.setDarkMode(true);
        _settings.setFontSize(15);

        System.out.print(_settings.getDarkMode() + " " + _settings.getFontSize());
    }
}