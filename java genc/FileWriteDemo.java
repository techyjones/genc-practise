import java.io.FileWriter;
import java.io.IOException;

public class FileWriteDemo {
    public static void main(String[] args) {
        String filename = "output.txt";
        String content = "Hello, file writing in Java!";

        try (FileWriter fw = new FileWriter(filename)) {
            fw.write(content);
            System.out.println("Successfully wrote to file.");
        } catch(IOException e) {
            System.out.println("Error writing file: " + e.getMessage());
        }
    }
}
