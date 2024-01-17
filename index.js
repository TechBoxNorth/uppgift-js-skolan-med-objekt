// ----- school -----
let codeSchool = {
    name: 'Code School',
    address: 'Scriptstreet 64',
    zipcode: 101001,
    city: 'Loopville',
    students: [],
    teachers: [],
    addTeacher: function(teacher){
        this.teachers.push(teacher);
    },
    addStudent: function(student){
        this.students.push(student);
    }
};

// ----- subjects -----
let assembly6502 = {
    name: 'Assembly 6502',
    students: [],
    teacher: {},
    addStudent: function(student){
        this.students.push(student);
    },
    addTeacher: function(teacher){
        this.teacher = teacher;
    }
};

let fortran = {
    name: 'Fortran',
    students: [],
    teacher: {},
    addStudent: function(student){
        this.students.push(student);
    },
    addTeacher: function(teacher){
        this.teacher = teacher;
    }
};

let basic = {
    name: 'Basic',
    students: [],
    teacher: {},
    addStudent: function(student){
        this.students.push(student);
    },
    addTeacher: function(teacher){
        this.teacher = teacher;
    }
};

// ----- students -----
let john = {
    name: 'John',
    age: 22,
    gender: 'male',
    subjects: [],
    enlistToSubject: function(subject){
        this.subjects.push(subject);
        subject.students.push(this);
    }
};

john.enlistToSubject(assembly6502);

let eric = {
    name: 'Eric',
    age: 24,
    gender: 'male',
    subjects: [],
    enlistToSubject: function(subject){
        this.subjects.push(subject);
    }
};

let jenny = {
    name: 'Jenny',
    age: 23,
    gender: 'female',
    subjects: [],
    enlistToSubject: function(subject){
        this.subjects.push(subject);
    }
};

let lisa = {
    name: 'Lisa',
    age: 21,
    gender: 'female',
    subjects: [],
    enlistToSubject: function(subject){
        this.subjects.push(subject);
    }
};

let alex = {
    name: 'Alex',
    age: 22,
    gender: 'male',
    subjects: [],
    enlistToSubject: function(subject){
        this.subjects.push(subject);
    }
};

// ----- teachers -----
let shigeru = {
    name: 'Shigeru Miyamoto',
    subjects: [],
    addSubject: function(subject){
        this.subjects.push(subject);
    }
};

let bill = {
    name: 'Bill Gates',
    subjects: [],
    addSubject: function(subject){
        this.subjects.push(subject);
    }
};

shigeru.addSubject(assembly6502);
console.log(shigeru.name);
for(sub in shigeru.subjects){
    console.log(shigeru.subjects[sub].name);
}