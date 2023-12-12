package NewPackage;

public class Human {
    int age;
    int salary;
    public static int population=0;

    public Human(int age, int salary){
        this.age=age;
        this.salary=salary;
        Human.population+=1;
    }
}