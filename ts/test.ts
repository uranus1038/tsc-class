class Person {
    firstName: string;
    lastName: string;
    age: any ;
 
  
    constructor(firstName: string, lastName: string ) {
      this.firstName = firstName;
      this.lastName = lastName;

    }
  
    getFullName(): string {
      return this.firstName + " " + this.lastName;
    }

    getNumber(age:number): number {
        return this.age = age;
    }
  }
  
  const person = new Person("you" , "Aum" );
  console.log(person.getFullName()); // Output: "John Doe"