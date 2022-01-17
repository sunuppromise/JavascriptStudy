package singleton.after;

public class Settings {

    private Settings() {
    };

    private static Settings _settings = null;

    public static Settings GetSettings() {
        if (_settings == null) {
            _settings = new Settings();
        }

        return _settings;
    }

    private boolean _darkMode = false;
    private int _fonSize = 13;

    public boolean getDarkMode() {
        return _darkMode;
    }

    public int getFontSize() {
        return _fonSize;
    }

    public void setDarkMode(boolean darkMode) {
        _darkMode = darkMode;
    }

    public void setFontSize(int fontSize) {
        _fonSize = fontSize;
    }
}