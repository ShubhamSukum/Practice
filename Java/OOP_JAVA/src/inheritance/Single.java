package inheritance;

public class Single {
    int num;
    String name;

    Single(int num,String name){
        this.num=num;
        this.name=name;
    }

    public static void main(String[] args) {
        Single obj=new Single(10,"Single Inheritance");

//      ****************** Single Inheritance ******************
        SingleInner sI=new SingleInner(13,"Inner",179);
//        sI.getter(sI);
//      ****************** Single Inheritance ******************

    }
}


