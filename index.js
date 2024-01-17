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
    },
    fireTeacher: function(teacher){
        let index = this.teachers.indexOf(teacher);
        this.teachers.splice(index, 1);
    }
};

// ----- teachers -----
let shigeru = {
    name: 'Shigeru Miyamoto',
    subjects: [],
    addSubject: function(subject){
        this.subjects.push(subject);
        subject.addTeacher(this);
    }
};

let bill = {
    name: 'Bill Gates',
    subjects: [],
    addSubject: function(subject){
        this.subjects.push(subject);
        subject.addTeacher(this);
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
    },
    removeStudent: function(student){
        let index = this.students.indexOf(student);
        this.students.splice(index, 1);
    },
    removeTeacher: function(){
        this.teacher = {};
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
    },
    removeStudent: function(student){
        let index = this.students.indexOf(student);
        this.students.splice(index, 1);
    },
    removeTeacher: function(){
        this.teacher = {};
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
    },
    removeStudent: function(student){
        let index = this.students.indexOf(student);
        this.students.splice(index, 1);
    },
    removeTeacher: function(){
        this.teacher = {};
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
        subject.addStudent(this);
    },
    quitSubject: function(subject){
        let index = this.subjects.indexOf(subject);
        this.subjects.splice(index, 1);
    }
};

let eric = {
    name: 'Eric',
    age: 24,
    gender: 'male',
    subjects: [],
    enlistToSubject: function(subject){
        this.subjects.push(subject);
        subject.addStudent(this);
    },
    quitSubject: function(subject){
        let index = this.subjects.indexOf(subject);
        this.subjects.splice(index, 1);
    }
};

let jenny = {
    name: 'Jenny',
    age: 23,
    gender: 'female',
    subjects: [],
    enlistToSubject: function(subject){
        this.subjects.push(subject);
        subject.addStudent(this);
    },
    quitSubject: function(subject){
        let index = this.subjects.indexOf(subject);
        this.subjects.splice(index, 1);
    }
};

let lisa = {
    name: 'Lisa',
    age: 21,
    gender: 'female',
    subjects: [],
    enlistToSubject: function(subject){
        this.subjects.push(subject);
        subject.addStudent(this);
    },
    quitSubject: function(subject){
        let index = this.subjects.indexOf(subject);
        this.subjects.splice(index, 1);
    }
};

let alex = {
    name: 'Alex',
    age: 22,
    gender: 'male',
    subjects: [],
    enlistToSubject: function(subject){
        this.subjects.push(subject);
        subject.addStudent(this);
    },
    quitSubject: function(subject){
        let index = this.subjects.indexOf(subject);
        this.subjects.splice(index, 1);
    }
};

// add students to the school
function goToSchool(student){
    codeSchool.students.push(student);
}
codeSchool.addStudent(john);
codeSchool.addStudent(eric);
codeSchool.addStudent(jenny);
codeSchool.addStudent(lisa);
codeSchool.addStudent(alex);
for(student in codeSchool.students){
    console.log(codeSchool.students[student].name);
}

// add teachers to the school
codeSchool.addTeacher(shigeru);
codeSchool.addTeacher(bill);
for(teacher in codeSchool.teachers){
    console.log(codeSchool.teachers[teacher].name);
}

// assign subjects to the teachers
shigeru.addSubject(assembly6502);
shigeru.addSubject(fortran);
bill.addSubject(basic);

console.log(fortran.teacher.name);
console.log(basic.teacher.name);

basic.removeTeacher();
console.log(basic.teacher.name);