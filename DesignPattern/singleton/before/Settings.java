package singleton.before;

public class Settings {

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