let student = {
    name: "Trish",
    age: 27 ,
    enrolled: true,
    courses: [ "CPAN134", "PSY230", "CPAN116", "SCIE223" ],
    display: function () {
        let studentInfoDisplay = ("Basic Student Info: " + "\nName: " + this.name + "\nAge: " + this.age + "\nEnrolled: " + this.enrolled + "\nCourses: " + this.courses.join(", "));
        console.log(studentInfoDisplay);
        return studentInfoDisplay;

    }
}
    
    console.log(`The student's name is ${student.name} and they are ${student.age} years old`);
    student.display();


    student.display = student.display();
    const myJSON = JSON.stringify(student);
    console.log(myJSON);

    
    