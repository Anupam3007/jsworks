// create an object employee with attributes id,name,department,salary

var employee={

    id:12,
    name:"Abhijith",
    department:"Tech",
    salary:"10000"
}
console.log(employee.id);
console.log(employee.name);
console.log(employee.department);
console.log(employee.salary);
employee.experience="2 years"
console.log(employee)
if("department"  in employee){
    console.log("It exists")
}
else{
    console.log("not exists")
}
if("bonus" in employee){
    employee.bonus=5

}
else{
    employee.bonus=10
}
console.log(employee)

var product={

    id:"sku123",
    title:"oreo",
    price:"50"
}

// add a new attribute category:"food"

product.category="food"
console.log(product)

// chk an attribute exist or not
// key in dictionary
 if("price" in product){
    console.log("exist")
 }
 else{
    console.log("not exist")
 }

 //  add an attribute offer with value 5 if offer exists else add offer with value 10

 if("offer" in product){
    product.offer=5
 }
 else{
    product.offer=20
 }
console.log(product)


// if offer exists update offer as current offer +10 else add offer of 20

if("offer" in product){
    product.offer+=10
}
else{
    product.offer=20
}
console.log(product)



