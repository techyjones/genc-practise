import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@interface MyAnnotation {
    String value();
}

@MyAnnotation(value = "Hello Annotation")
public class AnnotationDemo {
    public static void main(String[] args) {
        Class<AnnotationDemo> cls = AnnotationDemo.class;
    }
}