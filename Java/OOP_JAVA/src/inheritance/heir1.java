package inheritance;

public class heir1 extends heirarchical{
    int heir1;
    String company;
    int no;

    heir1(){
        super();
        this.heir1=10;
    }

    heir1(int no,String company,int heir1){
        super(no,company);
        this.heir1=heir1;
    }
    @Override
    public void hello(){
        System.out.println("Hello from Child!!");
    }
}
