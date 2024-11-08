let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function isEmpty(obj){
    for(let datos in obj){
        return false;
    }
    return true;
}


function sumSalario(salarios){
    let sumaSalarios = 0;
    if(isEmpty(salarios)){
        return 0;
    }

    for(let salario in salarios){
        sumaSalarios += salaries[salario];
    }

    return sumaSalarios;
}

console.log(sumSalario(salaries));
