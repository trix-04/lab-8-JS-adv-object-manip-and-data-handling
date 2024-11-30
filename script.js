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
    },

    addCourse: function(newCourse) {
        this.courses.push(newCourse);
    },

    getTotalCourses: function () {
        return this.courses.length;
    }
}
    
    console.log(`The student's name is ${student.name} and they are ${student.age} years old`);
    student.display();

    //Part 2:
    console.log("\nCaching 'display' method: ")
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

    //Part 5:
    student.addCourse("WRIT120");
    console.log("Updated courses after adding a new course: ", student.courses);

    const totalCourses = student.getTotalCourses();
    console.log("Total number of courses: ", totalCourses);
    
    //Part 6: Bonus
    const totalScore = scores.reduce((sum, currentScore) => sum + currentScore, 0);
    const averageScore = totalScore / scores.length;

    console.log("Average score using the reduce method: ", averageScore);
