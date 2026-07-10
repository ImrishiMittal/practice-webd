class EnpInfoooo{
    _name:string = "Rishi";
    _email:string = "rishi@gmail.com"
    get name():string{
        return "MR.  "+this._name;
    }
    set email(val:string){
        this._email="emp" + val
    }
}

var enp = new EnpInfoooo();
emp.email = 'peter@test.com';
console.log(enp.name)