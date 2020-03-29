var employee = {
    name : "David",
    email: "d@mail.com",
    title : "Daveloper",
    phone : {
        home: "092556",
        offer: "264516",
        mobil: "251511231"
    }
   
}
console.log(typeof emp);
console.log(typeof employee);






console.log(employee.phone.home + ","+ employee['phone']['mobil'])


// for (const prop in employee){
//     console.log(`${prop}`)
// }


// for (const prop in employee){
//     console.log(`employee.${prop}:${employee[prop]}`);
// }



var emp = new Object();
emp.name="David";
emp.email = "d@mail.com";
console.log(emp.name)




