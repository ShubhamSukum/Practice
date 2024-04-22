package inheritance;

public class level1 extends Multilevel{
    int second;

    level1(){
        super();
        this.second=-1;
    }
    
    level1(int second){
        super();
        this.second=second;
    }

    public void getlevel1() {
        System.out.println(super.first);
        System.out.println(second);
    }
}
