package view;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ManagerQualityView {

    public static  void run() {
        Scanner scanner = new Scanner(System.in);
        QualityView qualityView = new QualityView();
        Menu.qualityMenu();
        try {
            System.out.println("\nChọn chức năng ");
            System.out.print(" ⭆ ");
            int number = scanner.nextInt();
            switch (number) {
                case 1:
                    qualityView.importGoods();
                    break;
                case 2:
                    qualityView.exportGoods();
                    break;
                case 3:
                    qualityView.showGoods();
                    break;
                case 0:
                    Menu.exit();
                    System.exit(0);
                    break;
                case 9:
                    Menu.selection();
                    break;
                default:
                    System.out.println("Chọn chức năng không đúng! Vui lòng chọn lại");
                    run();
            }
        } catch (Exception e) {
            System.out.println("Nhập sai! vui lòng nhập lại");
        }
        run();
    }
}
