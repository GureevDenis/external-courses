function checkData (data) {  
    if (typeof data === 'string') { 
    return 'string'; 
    } else if (!isNaN(data)&&(typeof data === 'number')) { 
    return 'number'; 
    } 
    return undefined; 
    } 
    module.exports = checkData;
