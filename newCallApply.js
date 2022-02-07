class person {
      constructor(firstName, lastName, salary){
            this.firstName = firstName;
            this.lastName = lastName;
            this.salary =  salary;


      }
}
const normalPerson = new person('shukumar', 'ghosh',25000);
const employeePerson = new person ('david', 'james',25000);
console.log(normalPerson);
console.log(employeePerson);