import java.util.HashMap;

public class HashMapDemo {
    public static void main(String[] args) {
        HashMap<Integer, String> map = new HashMap<>();
        map.put(101, "Alice");
        map.put(102, "Bob");
        map.put(103, "Charlie");

        System.out.println("Student 102: " + map.get(102));

        for (Integer key : map.keySet()) {
            System.out.println("ID: " + key + ", Name: " + map.get(key));
        }
    }
}
