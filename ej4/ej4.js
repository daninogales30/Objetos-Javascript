let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
};

function multiplyNumeric(menu){
    for(let datos in menu){
        if(typeof menu[datos] == 'number'){
            menu[datos] *= 2;
        }
    }
}

multiplyNumeric(menu);

console.log(menu)