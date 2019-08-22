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
    grade(subject){
        return `${student.Name} recieves a perfect score on ${subject}`
    }
}

class Student extends Instructor{
    constructor(stuAttr){
        super (stuAttr)
        this.thepreviousBackground = stuAttr.previousBackground
        this.theclassName = stuAttr.className
        this.thefavSubjects = stuAttr.favSubjects
    }  
    listSubjects(){
        console.log(`${this.thefavSubjects}`)
        
    }
    PRAssignment(subject){
        console.log(`${this.Name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.Name} has begun sprint challenge on ${subject}`)
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
    debugsCode(student){
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
    favSubjects: ['C++, Java, C']

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
  console.log(fred.speak());
  console.log(instructor.speak());
  console.log(instructor.demo('storage'))
 console.log(student.grade('Javascript'))
 student.listSubjects();
 student.PRAssignment('CSS')
 student.sprintChallenge('react')
 console.log(PM.standUp('UX44'))
console.log(PM.debugsCode())