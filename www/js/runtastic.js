const nombre = "Vanessa"
const dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
]

function promedioCorrer(){
    const min = 5
    const max = 15
 
    return Math.round(Math.random () * (max - min) + min)

}
let totalkms = 0 
const length = dias.length
for(let i = 0; i<length; i++){
    const kms = promedioCorrer()
    totalkms += kms
    console.log(`El dia ${dias[i]}, ${nombre} corrio ${kms} kms`)
}
const promediokms = totalkms / length
console.log(`El promedio ${nombre} corrio ${promediokms.toFixed(2)} kms, en la semana`)