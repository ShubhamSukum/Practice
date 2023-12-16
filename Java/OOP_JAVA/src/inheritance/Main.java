package inheritance;

public class Main {
    public static void main(String[] args) {
        inhery obj= new inhery();

//        System.out.println(obj.a+" "+obj.b+" "+obj.A);

        inhery obj1= new inhery(17,6.22f,"SHUBZ");
//        System.out.println(obj1.a+" "+obj1.b+" "+obj1.A);

//        copy constructor
        inhery copyy=new inhery(obj);
//        System.out.println(copyy.a+" "+copyy.b+" "+copyy.A);

//      *********** INHERITANCE **************
        inner ok= new inner();
        System.out.println(ok.a+" "+ok.b+" "+ok.A+" "+ok.inside);
//      *********** INHERITANCE **************

    }
}
