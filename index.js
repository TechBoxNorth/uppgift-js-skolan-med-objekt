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

john.enlistToSubject(assembly6502);
john.enlistToSubject(fortran);
john.enlistToSubject(basic);

for(subject in john.subjects){
    console.log(john.subjects[subject].name);
}

john.quitSubject(fortran);

for(subject in john.subjects){
    console.log(john.subjects[subject].name);
}

fortran.removeStudent(john);


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
        subject.removeStudent(this);
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
        subject.removeStudent(this);
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
        subject.removeStudent(this);
    }
};

