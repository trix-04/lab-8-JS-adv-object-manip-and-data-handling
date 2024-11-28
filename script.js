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

    console.log("\nCaching display: ")
    student.display = student.display();
    const myJSON = JSON.stringify(student);
    console.log(myJSON);

    let jsonObj = JSON.parse(myJSON);
    console.log("\nThe output of converting the JSON string back into a JavaScript object yields... ", jsonObj);
    
    
    