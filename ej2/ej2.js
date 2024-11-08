function isEmpty(obj){
    for(let datos in obj){
        return false;
    }
    return true;
}

let objeto = {};
alert(isEmpty(objeto));
objeto.name = "Juan";
alert(isEmpty(objeto));