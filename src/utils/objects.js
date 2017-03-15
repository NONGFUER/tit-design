import assign from 'object-assign';
import {substitute} from './strings'
export function toTextValue (arr, textTpl = '{text}', valueTpl = '{id}'){
    if(!arr){
        return []
    }
    if(!Array.isArray(arr)){
        arr = Object.keys(arr).map((key) => {
            return {
                id:key,
                text: arr[key]
            }
        });         
    }
    return arr.map(function(s){
        if(typeof s !== 'object'){
            s = s.string()
            return {$text: s, $value: s,　$key: hashcode(s)}
        } else {
            let $text = typeof textTpl === 'function' ? textTpl(s) : substitute(textTpl,s);
            let $value = typeof valueTpl === 'function' ? valueTpl(s) : substitute(valueTpl,s);
            let $key = s.id ? s.id : hashcode(s)
            return assign({}, s, { $text, $value, $key})
        }
    });
}

export function hashcode (obj){
    let hash = 0;
    let chr, str, len, i;

    let type = typeof obj;
    switch(type) {
        case 'string':
            str = obj;
            break;
        case 'object':
            str = JSON.stringify(obj)
            break;
        default:
            str = obj ? obj.toString() : '';
            break;
    }
    if(str.length === 0) return hash;
    for(i = 0,len = str.length; i < len; i++){
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash.toString(36)
}