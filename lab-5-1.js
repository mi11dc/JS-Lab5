//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
let meObject = {
    name: "Dhaval Shah",
    occupation: "Student",
    course: "Web Development",
    college: "Humber College",

    alertMethod() {
        alert(`My name is ${ meObject.name } and I am a ${ meObject.occupation }`);
    }
}

console.log(`My current course is ${ meObject.course } in the ${ meObject.college }`);
// alert(`My name is ${ meObject.name } and I am a ${ meObject.occupation }`);
meObject.alertMethod();