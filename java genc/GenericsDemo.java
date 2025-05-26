import java.util.ArrayList;

public class GenericsDemo {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(10);
        numbers.add(20);

        for (Integer num : numbers) {
            System.out.println(num);
        }
    }
}
