package Interfaces;

public class Car implements Engine,Brake {

    @Override
    public void brake() {
        System.out.println("Car's brake");
    }

    @Override
    public void start() {
        System.out.println("Car's start()");
    }

    @Override
    public void stop() {
        System.out.println("Car's stop()");
    }

    @Override
    public void acc() {
        System.out.println("Car's acc()");
    }
}
