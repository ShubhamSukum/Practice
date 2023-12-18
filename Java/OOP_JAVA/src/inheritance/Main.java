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
//        System.out.println(ok.a+" "+ok.b+" "+ok.A+" "+ok.inside);
//      *********** INHERITANCE **************


//      *********** SINGLE INHERITANCE **************
        SingleInner sI=new SingleInner(13,"Inner",179);

//        System.out.println(sI.num);
//        System.out.println(sI.name);
//        System.out.println(sI.Innerfield);

        // getter
//        sI.getter(sI);
//      *********** SINGLE INHERITANCE **************

//      *********** Multilevel INHERITANCE **************
//        level2 l2=new level2(800,300);
//        l2.getterClass(l2);   // accessing l2 class member elements
//
//        level2 lcopy=new level2(l2);        // copy constructor using level2 obj
//        l2.getterClass(lcopy);
//      *********** Multilevel INHERITANCE **************

//      *********** Hierarchical INHERITANCE **************
//        heirarchical h=new heirarchical();
//        System.out.println(h.no+" "+h.company);
//
//        heir2 Obj=new heir2(99,"Novone",99999);
//        System.out.println(Obj.no+" "+ Obj.company+" "+Obj.heir2);
//      *********** Hierarchical INHERITANCE **************

    }
}
