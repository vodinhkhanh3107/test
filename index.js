let student={
    name: "evondev",
    age: 27,
    male: true,
    "last-name": "tuan",
    hi: function(){
        console.log("hello evondev");
    }
}

delete student["last-name"]

student.brand="new";
for (key in student){
    console.log(`${key} ${student[key]}`)
} 
console.log(student);

//lấy key của Object
const keys=Object.keys(student);
console.log(keys)

console.log(keys.length)

//lấy values của Object
const values=Object.values(student);

console.log(values);

// không cho thêm cặp key value mới vào object
const seals=Object.seal(student);

student.birth="31/07/2004";

console.log(student);

// ngăn chặn ko cho cặp nhật object

const freezes=Object.freeze(student);
student.male=false;

console.log(student);


let student2={
    name2: "khánh",
    address: "NA",
    age: 21
}

//gộp 2 object 
const student3={...student,...student2};
console.log(student3);
