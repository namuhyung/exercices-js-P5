// votre code ici

function checkAge(int) {
    let mess = "";
    if  (int < 18) {
        mess = "Vous êtes mineur.";
    } else if (int > 65) {
        mess = "Vous êtes senior.";
    } else {
        mess = "Vous êtes majeur.";
    }
    return mess
}
export default checkAge;
