package Kteam;

public class Array {
    public static void main(String[] args) {
        char [][] a = {{'C', 'o', 'd', 'e'},{'G','y','m'}};
        for (int i=0; i<a.length; i++) {
            for (int j = 0; j < a[i].length; j++) {
                System.out.print(a[i][j] + " ");
            }
            System.out.println();
        }
    }
}
