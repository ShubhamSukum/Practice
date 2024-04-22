package Interfaces;

public class CDplayer implements Media{
    @Override
    public void start() {
        System.out.println("start CD player");
    }

    @Override
    public void stop() {
        System.out.println("stop CD player");
    }
}
