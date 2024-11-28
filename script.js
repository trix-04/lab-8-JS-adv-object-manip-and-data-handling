let student = {
    name: "Trish",
    age: 27 ,
    enrolled: true,
    courses: [ "CPAN134", "PSY230", "CPAN116", "SCIE223" ],
    display: function () {
        console.log("Basic Student Info: " + "\nName: " + this.name + "\nAge: " + this.age + "\nEnrolled: " + this.enrolled + "\nCourses: " + this.courses);
        
    }
}
    
    console.log(`The student's name is ${student.name} and they are ${student.age} years old`);
    student.display();
    
    