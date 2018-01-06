var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + "." + middleName + "." + lastName;
    }
    return Student;
}());
function greet(p) {
    return "\u6211\u662F\uFF1A" + p.lastName;
}
greet(new Student('Xing', 'H', 'he'));
