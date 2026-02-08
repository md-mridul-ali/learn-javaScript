const student = {
    name: 'Mridul',
    department: 'BSc in CSE',
    semester: '11th',
    cgpa: 3.68,
    family:{
        title: 'hawladar',
        father:{
            fname: 'Mr. X',
            profession: 'Business Man',
            age: 45
        },
        mother:{
            mname: 'Mrs. Y',
            profession: 'House Wife',
            age: 43
        }
    }
};

//show father and mother name
const fatherName = student.family.father.fname;
const motherName = student.family.mother.mname;
console.log(`Father Name: ${fatherName}`);
console.log(`Mother Name: ${motherName}`);