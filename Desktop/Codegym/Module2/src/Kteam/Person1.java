package Kteam;

public class Person1 {
    public String name;
    public int age;
    public float height;

    public Person1(String name, int age, float height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    public void eat (String foodName) {
        System.out.println(name + " is eating " + foodName);
    }

    public int getAge() {
        return age;
    }
}
