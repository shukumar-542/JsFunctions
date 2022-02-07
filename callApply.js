const normalPerson = {
      firstName : 'shukumar',
      lastName : 'ghosh',
      salary :2000,
      getFullName : function(){
            console.log(this.firstName, this.lastName);
      },
      chargeBill : function(amount,tax){
            this.salary = this.salary - amount - tax;
            return this.salary;

      }
}
const employeePerson = {
      firstName : 'david',
      lastName  : 'james',
      salary : 25000,
}
const employeePersonChargeBill = normalPerson.chargeBill.bind(employeePerson);
employeePersonChargeBill(2000);
console.log(employeePerson.salary);

normalPerson.chargeBill.call(employeePerson,5000,100);
console.log(employeePerson.salary);


normalPerson.chargeBill.apply(employeePerson,[1000,90]);
console.log(employeePerson.salary);