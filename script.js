let student = {
    name: "Trish",
    age: 27 ,
    enrolled: true,
    courses: [ "CPAN134", "PSY230", "CPAN116", "SCIE223" ],
    display: () => {
        let studentInfo = `Basic Student Info: \nName: ${this.name}\nAge: ${this.age}\nEnrolled: ${this.enrolled}\nCourses: ${this.courses}`
        console.log(studentInfo);
        return studentInfo;
    }
}
    
    console.log(`The student's name is ${student.name} and they are ${student.age} years old`);
    student.display();
    
    