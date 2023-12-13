import java.lang.reflect.Array;
import java.util.Arrays;

import NewPackage.Human;

class Student{
    int age;
    char letter;
    String name;
    float marks;
    boolean ok;

    Student(){
//        this (99,'g',false,"another constructor",9.34f);
    }
    Student(Student other){
        this.age=other.age;
        this.letter=other.letter;
        this.ok=other.ok;
        this.name=other.name;
        this.marks=other.marks;
//        System.out.println("31 111 53");
    }

    Student(int age,char letter,boolean ok,String name,float marks){
        this.age=age;
        this.letter=letter;
        this.ok=ok;
        this.name=name;
        this.marks=marks;
    }

    public static void swap(int[] arr) {
        int temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }

    void non_static(){
        System.out.println("Non Static method!! Need to create a Object to access it!!");
        System.out.println("also accessing static method!!");
    }

    static void static_method(){
        System.out.println("No need to create object");
//        non_static();     /* Can't access a Non-static Method  */
    }
};

public class Main {
    public static void main(String[] args) {
//        Student[] students=new Student[5];

//      students Shubz;
//      System.out.println(Arrays.toString(students));
//      compile time   Run time
//        Student shubz= new Student();

//        System.out.println(shubz.age);
//        System.out.println(shubz.letter);
//        System.out.println(shubz.name);
//        System.out.println(shubz.marks);
//        System.out.println(shubz.ok);

//        Setting user defined values

//        Student user = new Student(1, 'a', true, "word", 50.0f);
//        Student user = new Student();
//        System.out.println(user.age);
//        System.out.println(user.letter);
//        System.out.println(user.name);
//        System.out.println(user.marks);
//        System.out.println(user.ok);

//        ********* calling another constructor from constructor  ************
//        Student otherCon=new Student(user);
//        System.out.println(otherCon.age);
//        System.out.println(otherCon.letter);
//        System.out.println(otherCon.name);
//        System.out.println(otherCon.marks);
//        System.out.println(otherCon.ok);
//        ********* calling another constructor from constructor  ************

//        **********SWAPPING************
//        int[] values = {1, 2};
//
//        System.out.println("Before swap: " + values[0] + ", " + values[1]);
//        Student.swap(values);
//        System.out.println("After swap: " + values[0] + ", " + values[1]);

//        Human h1=new Human(17,100);
//        Human h2=new Human(17,100);
//        Human h3=new Human(17,100);
//        Human h4=new Human(17,100);

//        System.out.println(Human.population);

//***************** static and Non Static Things **************************

//        Student.static_method();          // Student is class name

//        Student.non_static();   // non static can't be accessed like this

        Student AccessNonStatic = new Student();
        AccessNonStatic.non_static();

    }
}
