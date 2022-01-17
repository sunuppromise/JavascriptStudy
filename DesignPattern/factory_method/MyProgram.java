package factory_method;

class MyProgram {

    public static void main(String[] args) {
        new Console().withoutFactory();
        new Console().withFactory();
    }
}