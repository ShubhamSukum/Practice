package Interfaces;

public class PowerCar implements Engine{

    @Override
    public void start() {
        System.out.println("Power car Engine START!!");
    }

    @Override
    public void stop() {
        System.out.println("Power car Engine STOP!!");
    }

    @Override
    public void acc() {
        System.out.println("Power car Engine ACC!!");
    }
}
