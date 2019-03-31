function chekObjString(string, obj) {
    for (var key in obj) {
        if (key === string) return true;
    }
    return false;
}
module.exports = chekObjString;