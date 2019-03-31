function chekObjString(str, obj) {
    var gg = obj;
    if (str in gg) return gg ;
    gg[str] = "new";
    return gg;
}
module.exports = chekObjString;