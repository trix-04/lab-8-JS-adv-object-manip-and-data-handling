// Part 1: 
let student = {
    name: "Trish",
    age: 27,
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

    //Part 2:
    console.log("\nCaching display: ")
    let cachedDisplay = student.display();
    const myJSON = JSON.stringify(student);
    console.log(myJSON);

    let jsonObj = JSON.parse(myJSON);
    console.log("\nThe output of converting the JSON string back into a JavaScript object yields... ", jsonObj);
    
    // Part 3:
    const {name, courses} = student;
    console.log("Extracted name after destructuring: ", name);
    console.log("Extracted courses after destructuring: ", courses);

    const scores = [70, 44, 23, 47];
    const [score1, score2] = scores;
    console.log("First score: ", score1);
    console.log("Second score: ", score2);

    //Part 4:
    const clonedStudent = {...student };
    clonedStudent.graduationYear = 2025;
    console.log("Cloned student with new property: ", clonedStudent);
    
    const newCourses =["MAT101", "BIO202"];
    const combinedCourses = [...student.courses, ...newCourses];
    console.log("Combined courses: ", combinedCourses);
    