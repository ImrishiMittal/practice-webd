// type personTA={name:string}
// type personTB=(age:number}
// type personTC=personTA & personTB
interface personTA {name:string}
interface personTB{age:number}
type personTC = personTA & personTB
var PersonDataA: personTA={name: 'Anil sidhu'}
var PersonDataB:personTB={age:30}
var PersonDataC : personTC=
{name: 'Sidhu', age:30}