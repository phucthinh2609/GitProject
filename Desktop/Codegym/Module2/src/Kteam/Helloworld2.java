package Kteam;

public class Helloworld2 {
    public static void main(String[] args) {
        Person1 a = new Person1("Thinh", 21, 1.7f);
        a.eat("rice");
        int age = a.getAge();
        System.out.println(age);
    }
}
