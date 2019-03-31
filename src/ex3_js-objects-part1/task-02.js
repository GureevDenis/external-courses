var car = {
    name : 'audi',
    model: "A4",
    color : "green", 
};
function checkObj(obj) {
    var result = '';
    for (var i in obj) {
        if (obj.car[i]) {
            result += objcar + "." + i + " = " + obj[i] + "\n";
        }
    }
}
checkObj(car, "car");
module.exports = checkObj;



