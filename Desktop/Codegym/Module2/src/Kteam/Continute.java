package Kteam;

public class Continute {
    public static void main(String[] args) {
        int [] array = {1,2,13,3};
        int S = 0;
        for (int i:array){
            if (i == 13) {
                continue;
            }
            S += i;
        }
        System.out.println(S);
    }
}
