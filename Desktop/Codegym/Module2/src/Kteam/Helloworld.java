package Kteam;

public class Helloworld {
//    public static void main(String[] args) {
//        Person a = new Person();
//        a.name = "Thinh";
//        a.age = 22;
//        a.height = 1.7f;
//        System.out.println(a.name);
//        System.out.println(a.age);
//        System.out.println(a.height);
//    }

    public static void main(String[] args) {
        Person [] a = new Person [2];
        for (int i=0; i<a.length; i++) {
            a[i] = new Person();
            a[i].name = "Thinh" + i;
            a[i].age = i;
            a[i].height = 1.7f;
        }
        for (int i=0; i<a.length; i++) {
            System.out.println(a[i].name);
            System.out.println(a[i].age);
            System.out.println(a[i].height);
        }
    }
}
