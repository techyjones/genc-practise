import java.io.*;

public class DeserializationDemo {
    public static void main(String[] args) {
        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream("person.ser"))) {
            Person p = (Person) in.readObject();
            System.out.println("Name: " + p.name + ", Age: " + p.age);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}

class Person implements Serializable {
    String name;
    int age;
    Person(String n, int a) {
        name = n; age = a;
    }
}
