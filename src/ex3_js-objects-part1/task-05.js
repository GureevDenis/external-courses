var car = {
    name : 'audi',
    model: "A4",
    color : "green", 
};
function copiedObj(obj) {
    var clone = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)){
            clone[key] = obj[key];
        }
    }
    return clone;
}
module.exports = copiedObj;