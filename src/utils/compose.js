export function compose({...funcs}){
    if(funcs.length === 0){
        return (arg) =>arg
    }else{
        const last = funcs[funcs.length-1];//最后一个函数
        const rest = funcs.slice(0,-1)//剩下的，从第0个开始到最后一个（不含最后一个）
        return (...args) => rest.reduceRight((composed,f)=>f(composed),last(...args))

    }
}