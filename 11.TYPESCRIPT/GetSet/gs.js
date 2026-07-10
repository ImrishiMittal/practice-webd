"use strict";
class EnpInfoooo {
    _name = "Rishi";
    _email = "rishi@gmail.com";
    get name() {
        return "MR.  " + this._name;
    }
    set email(val) {
        this._email = "emp" + val;
    }
}
var enp = new EnpInfoooo();
emp.email = 'peter@test.com';
console.log(enp.name);
