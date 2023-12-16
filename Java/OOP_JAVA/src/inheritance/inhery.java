package inheritance;

public class inhery {
    int a;
    float b;
    String A;

    inhery(){
        this.a=-1;
        this.b=1.1f;
        this.A="Default";
    }

    inhery(int a,float b,String A){
        this.a=a;
        this.b=b;
        this.A=A;
    }

//    copy constructor
    inhery (inhery cop){
        this.a=cop.a;
        this.b=cop.b;
        this.A=cop.A;
    }
}

class inner extends inhery{
    int inside;

    inner(){
//        super();          // to call Base call constructor
//        we can pass super(1,1.1,"sample");     // if it has constructor(para1,para2,para 3){}
        super(7,7.7f,"SUPER se bhi UPPER !!");
        this.a=1;
        this.b=2.2f;
        this.A=super.A;     // to access parent class fields or methods
        this.inside=0;
    }
}
