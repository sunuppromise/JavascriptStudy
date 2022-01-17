package singleton.after;

public class SecondPage {
    private Settings _settings = Settings.GetSettings();

    public void PrintSettings() {
        System.out.print(_settings.getDarkMode() + " " + _settings.getFontSize());
    }
}