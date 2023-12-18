package inheritance;

public class level2 extends level1 {
    int third;

    level2(){
        super();
        this.third=3;
    }

    level2(int second,int third){
        super(second);
        this.third=100;
    }

    level2(level2 obj){
        this(obj.second,obj.third);
    }

    public void getterClass(level2 obj){
        System.out.println(obj.first+" "+obj.second+" "+obj.third);
    }
}
