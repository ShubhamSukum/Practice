package Interfaces;

public class Main {
    public static void main(String[] args) {
//        Car car=new Car();
//        car.start();
//        car.stop();
//        car.brake();
//        car.acc();

//        Car elec= new CDplayer();
//        elec.start();


        PowerCar p=new PowerCar();
        ElectircCar e=new ElectircCar();
        CDplayer cd=new CDplayer();

        NiceCar a=new NiceCar();
        NiceCar n=new NiceCar(p);
        NiceCar M=new NiceCar();
        NiceCar A=new NiceCar();

        a.stop();
        n.start();
        n.stopMusic();
        a.upgrade(p);
        a.start();
        a.stop();
        a.upgrade(e);   // Upgrading back to Electric Engine
        a.start();
        a.upgrade(p);   // Upgrading back to Power Engine
    }
}
