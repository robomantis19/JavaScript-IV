// CODE here for your Lambda Classes

class Person{
    constructor(personAttributes){
        this.Name = personAttributes.name
        this.Age = personAttributes.age 
        this.Location = personAttributes.location
    }
    speak(){
        return `Hello my name is ${this.Name}, I am from ${this.Location}`
    }

}

class Instructor extends Person{
    constructor(InsAttr){
        super(InsAttr)
        this.Specialty = InsAttr.specialty
        this.thefavLangauge = InsAttr.favLanguage
        this.thecatchPhrase = InsAttr.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.Name} recieves a perfect score on ${subject}`
    }
    calculateGrade(student){
            student.theGrade = 90;
            const addOrsub = Math.floor(((Math.random()-.5)*2) *10);
            student.theGrade += addOrsub;
            return `${this.Name} gave ${student.Name} a ${student.theGrade}`
        
    }
}

class Student extends Instructor{
    constructor(stuAttr){
        super (stuAttr)
        this.theGrade = stuAttr.grade
        this.thepreviousBackground = stuAttr.previousBackground
        this.theclassName = stuAttr.className
        this.thefavSubjects = stuAttr.favSubjects
    }  
    listSubjects(){
        console.log(`${this.thefavSubjects[0]}`)
        console.log(`${this.thefavSubjects[1]}`)
        console.log(`${this.thefavSubjects[2]}`)
        
    }
    PRAssignment(subject){
        console.log(`${this.Name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.Name} has begun sprint challenge on ${subject}`)
    }
    graduate(){
        if(this.theGrade > 90){
            console.log(`${this.Name} has graduated with a score of ${this.theGrade}`)
        }
    }
   
}

class ProjectManagers extends Instructor{
    constructor(ProAttr){
        super(ProAttr)
        this.gradeClassName = ProAttr.gradeClassName
        this.favInstructor = ProAttr.favInstructor
    }
    standUp(channel){
        console.log(`${this.Name} announces to ${channel}, @channel standy`)
    }
    debugsCode(student, subject){
        console.log(`${this.Name} debugs ${student.Name}'s code on ${subject}`)
    }
}






const fred = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock'
  });
const instructor = new Instructor({
    name: 'Reid', 
    age: 52, 
    location: 'USA', 
    specialty: 'redux', 
    favLanguage: 'Javascript', 
    catchPhrase: 'Learning is essential'

})

const student = new Student({
    name: 'bobby',
    age: 22,
    location: 'Iowa',
    previousBackground: 'Burger King worker',
    className: "CS243",
    favSubjects: ['C++', 'Java', 'C'],
    grade: 0,

})

const PM = new ProjectManagers({
    name: 'Jack', 
    age: 40, 
    location: 'Califonia', 
    specialty: 'react', 
    favLangauge: 'reactnative', 
    catchPhrase: 'need for speed',
    gradeClassName: 'CS23', 
    favInstructor: 'Mr.Sean'
})

console.log('--------starting lambda-classes below--------')

console.log(fred.speak());

console.log(instructor.demo(student.thefavSubjects[0]))

console.log(student.grade(student, student.thefavSubjects[1]))

student.listSubjects();

student.PRAssignment(student.thefavSubjects[2])

student.sprintChallenge(student.thefavSubjects[2])
PM.standUp('UX44')
PM.debugsCode(student,student.thefavSubjects[2])
console.log("stretch below -------------")
console.log(instructor.calculateGrade(student));

student.graduate();