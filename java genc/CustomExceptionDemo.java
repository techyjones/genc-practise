class NegativeNumberException extends Exception {
    public NegativeNumberException(String msg) {
        super(msg);
    }
}

public class CustomExceptionDemo {
    static void checkNumber(int num) throws NegativeNumberException {
        if (num < 0) throw new NegativeNumberException("Negative number: " + num);
        else System.out.println("Positive number: " + num);
    }

    public static void main(String[] args) {
        try {
            checkNumber(10);
            checkNumber(-5);
        } catch (NegativeNumberException e) {
            System.out.println("Caught exception: " + e.getMessage());
        }
    }
}
