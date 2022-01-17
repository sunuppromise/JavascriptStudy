package singleton.before;

public class SecondPage {
    private Settings _settings = new Settings();

    public void PrintSettings() {
        System.out.print(_settings.getDarkMode() + " " + _settings.getFontSize());
    }
}