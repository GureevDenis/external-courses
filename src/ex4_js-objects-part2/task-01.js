function searchProperty (prop, obj) {
    for (var key in obj) {
        if (!obj.hasOwnProperty(key) && key === prop) {
            return 1;
        }
    }
    return undefined;
}
module.exports = searchProperty ;