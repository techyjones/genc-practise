abstract class Shape {
    abstract void draw();

    void display() {
        System.out.println("Displaying shape");
    }
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing Circle");
    }
}

public class AbstractClassDemo {
    public static void main(String[] args) {
        Circle c = new Circle();
        c.display();
        c.draw();
    }
}
