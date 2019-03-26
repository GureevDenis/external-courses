function checkData (data) { 
    var caseForString = 'string'; 
    var caseForNumber = 'number'; 
    var caseWrong = undefined; 
    if (typeof data === 'string') { 
    return caseForString; 
    } else if (typeof data === 'number') { 
    return caseForNumber; 
    } 
    return caseWrong; 
    } 
    module.exports = checkData;
