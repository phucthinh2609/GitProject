package view;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Menu {
    public static void mainMenu(){
        System.out.println("\n=================================================");
        System.out.println("|                  MAIN MENU                    |");
        System.out.println("=================================================");
        System.out.println("|                                               |");
        System.out.println("|        1. Quản lý kho                         |");
        System.out.println("|        2. Quản lý thông tin khách hàng        |");
        System.out.println("|        3. Quản lý đơn hàng                    |");
        System.out.println("|                                               |");
        System.out.println("=================================================");
    }

    public static void showHomePage(){
        System.out.println("\n>> WELCOME TO THE 2HAND SHOP'S MANAGEMENT SYSTEM <<");
        Menu.selection();
    }

    public static void selection() {
        do {
            mainMenu();
            try {
                Scanner scanner = new Scanner(System.in);
                System.out.println("\nChọn chức năng ");
                System.out.print("⭆ ");
                int number = scanner.nextInt();
                switch (number) {
                    case 1:
                        ManagerQualityView.run();
                        break;
                    case 2:
                        ManagerUserView.run();
                        break;
                    case 3:
                        ManagerOrderView.run();
                        break;
                    default:
                        System.out.println("Chọn chức năng không đúng! Vui lòng chọn lại");
                        selection();
                }

            } catch (InputMismatchException io) {
                System.out.println("Nhập sai! Vui lòng nhập lại");
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
        } while (true);
    }

    public static void exit() {
        System.out.println("\tTạm biệt. Hẹn gặp lại!");
        System.exit(5);
    }

    public static void qualityMenu(){
        System.out.println("\n===============================");
        System.out.println("|        QUALITY MENU         |");
        System.out.println("===============================");
        System.out.println("|                             |");
        System.out.println("|    1. Nhập hàng             |");
        System.out.println("|    2. Xuất hàng             |");
        System.out.println("|    3. Danh sách kho hàng    |");
        System.out.println("|                             |");
        System.out.println("===============================");
        System.out.println("<== 9: Quay lại        0: Thoát");
    }

    public static void userMenu(){
        System.out.println("\n=====================================");
        System.out.println("|            USER MENU              |");
        System.out.println("=====================================");
        System.out.println("|                                   |");
        System.out.println("|    1. Thêm khách hàng             |");
        System.out.println("|    2. Sửa thông tin khách hàng    |");
        System.out.println("|    3. Danh sách khách hàng        |");
        System.out.println("|                                   |");
        System.out.println("=====================================");
        System.out.println("<== 9: Quay lại              0: Thoát");

    }

    public static void orderMenu(){
        System.out.println("\n============================");
        System.out.println("|        ORDER MENU        |");
        System.out.println("============================");
        System.out.println("|                          |");
        System.out.println("|    1. Tạo order          |");
        System.out.println("|    2. Danh sách order    |");
        System.out.println("|                          |");
        System.out.println("============================");
        System.out.println("<== 9: Quay lại     0: Thoát");

    }
}
