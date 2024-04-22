package inheritance;
public class SingleInner extends Single{
    int Innerfield;

    SingleInner(int num,String name,int Innerfield){
        super(num,name);
        this.Innerfield=Innerfield;
    }

    public void getter(SingleInner obj){
        System.out.println("This is a getter method!!");

        System.out.println(obj.num);
        System.out.println(obj.name);
        System.out.println(obj.Innerfield);
    }

}
