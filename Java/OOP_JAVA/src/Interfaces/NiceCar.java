package Interfaces;

public class NiceCar {
    private Engine engine;
    private Media media=new CDplayer();

    public NiceCar(){
        engine=new ElectircCar();
    }

    NiceCar(Engine engine){
        this.engine=new PowerCar();
    }

    public void start(){
        engine.start();
    }

    public void stop(){
        engine.stop();
    }

    public void acc(){
        engine.acc();
    }

    public void startMusic(){
        media.start();
    }

    public void stopMusic(){
        media.stop();
    }

    public void upgrade(Engine engine){
        this.engine=engine;
    }
}
