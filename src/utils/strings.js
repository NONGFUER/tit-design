import objectAssign from 'object-assign';
export function toArray (value, sep) {
    if(value === null || value === undefined){
        value = []
    }
    if(typeof value === 'string' && sep){
        value = value.split(sep);
    } else if(!(value instanceof Array)){
        value = [seq ? value.toString() : value]
    }else if(sep){
        value = value.map((v) => v.toString());
    }
    return value;
}

export function substitute (str,obj){
    if(typeof str === 'string') {
        if(str.indexOf('{') < 0){
            return obj[str];
        }else{
            return str.replace((/\\?\{([^{}]+)\}/g),function (match, name) {
                if(match.charAt(0) === '\\') {
                    return match.slice(1);
                }
                return (obj[name] === null || obj[name] ===undefined) ? '' : obj[name]
            })
        }
    }else if(typeof str === 'function'){
        let val = str(obj);
        if(val === obj && typeof val === 'object'){
            val = objectAssign({},obj);
        }
        return val;
    }
}