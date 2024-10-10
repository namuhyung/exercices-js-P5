//votre code ici

function printNumbers(n) {
    let list = "";
    for(let i = 1; i < (n + 1); i++) {
        list += i;
        list += " ";
    }
    list = list.slice(0, -1);
    return list;
}

export default printNumbers
