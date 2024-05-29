function message(message1, message2) {
    let x = 3;
    console.log(x)
    var y = 2;

    if (x >= 3) {
        document.getElementById('pdi1').innerHTML = message1
        var y = 10;
        console.log("one local variable" + message2)
    }
    let message_r = message_return('Alex', "boom");
    alert(message_r);
}
function message_return(value1, value2) {
    return value1 + " " + value2;
}
const person = {
    firstName: "hi", lastName: "bye", function1: function () {

        return this.lastName;
    }
};
person.firstName = "john";
const stud = {};
stud.grade = 23;
stud.sec = "A";
let name1 = person['firstName'];
console.log("Frist Name:" + name1)
console.log(person.function1)