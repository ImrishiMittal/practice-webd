interface Info{
    name : String,
    age: number,
    college: string
}

interface TeacherType extends Info{
    subject : String
}

var studentObj : Info ={
    name : 'anil',
    age : 30,
    college: 'MUJ'
}
var taecherObj : TeacherType ={
    name : 'Shashank',
    age : 30,
    college: 'MUJ',
    subject: 'Math'
}

