function callBack(name, age , dept, year){
      console.log('your name:', name);
      console.log('your age;', age); 
      dept();
      year();

}
function cseDept(){
      console.log('depertment: Cse' );

}
function sweDept(){
      console.log('depertment SWE');
}
function BBA(){
      console.log('depertmet of BBA');
}
function cseFundationYear(){
      console.log('cse depertment stablist 2005');
}
function BBAFundation(){
      console.log( 'BBA fundation year 2008');
}
function SWEFundation(){
      console.log( 'swe fundation year 2009');
}

callBack('shukumar ', 25, cseDept,cseFundationYear);
callBack('jihad',24, sweDept,SWEFundation );
callBack('hasan', 25, BBA ,BBAFundation)