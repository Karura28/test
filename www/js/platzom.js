// si la palabra termina en "ar", se le quitan los dos ultimos caracteres

function platzon(str){
let translation = str;
var n=str;
if(str.toLowerCase().endsWith('ar')){
    translation = str.slice(0, -2);

}

/* si la palabra inici con "z", se la añade los caracteres "pe" al final
*/
if(str.toLowerCase().startsWith('z')){
    
        translation += 'pe';
    
    }
    let l = str.length;
    let minus = str.toLowerCase()
if(minus.length >- 10){
   let fHalf = str.slice((1/2));
    let partir = str.slice((l/2));
    translation =str.slice(0, -(l/ 2)) + '-' + partir;
}

const reverse = (str) => str.split('').reverse.join('');
function minMay(str){
    const l = str.length;
    let translation = "";
    let capitalize= true ;
    for(let i=0; i < l; i++){
        const char = str.charAT(i);
        translation += capitalize ? char.toUpperCase() : char.toLowerCase();

    }
}

 if (str = reverse(str)){
     return minMay(str);
 }



return translation;
}
console.log(platzon("contar"));
console.log(platzon("zorro"));
console.log(platzon("unicorniorosado"))




