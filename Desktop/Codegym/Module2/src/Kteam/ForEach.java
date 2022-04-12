package Kteam;

public class ForEach {
    public static void main(String[] args) {
        int [] array = {1,2,3};
        for (int a: array) {
            System.out.println(a);
        }
        System.out.println();

        for (int i = array.length -1; i>=0; i--){
            System.out.println(array[i]);
        }
    }
}

