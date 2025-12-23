



//CALCULADORA
console.log("calculadora")
function menu()
{
    console.log("1. sumar");
    console.log("2. restar");
    console.log("3. multiplicar");
    console.log("4. dividir");
}
function sumar(a,b)
{
    return a+b;
}
function restar(a,b)
{
    return a-b;
}
function multiplicar(a,b)
{
    return a*b;
}
function divicion(a,b)
{
    return a/b;
}
function calcular(a,b,opc)
{
    
    switch(opc)
    {
        case 1:
            {
                console.log("la suma de " + a + " y " + b +  " es " + sumar(a,b));
                return sumar(a,b)
                break;
            }
        case 2:
            {
                console.log("la resta de " + a + " y " + b +  " es " + restar(a,b));
                return restar(a,b)
                break;
            }
        case 3:
            {
                console.log("la multiplicacion de " + a + " y " + b +  " es " + multiplicar(a,b));
                return multiplicar(a,b)
                break;
            }
        case 4:
            {
                console.log("la divicion de " + a + " y " + b +  " es " + divicion(a,b));
                return dividir(a,b)
                break;
            }
            default:
                {
                    console.log("no existe esa opcion");
                }
        
    }
}
const botonCalc = document.getElementById("boton2")

botonCalc.addEventListener("click" , function(event)
{
    event.preventDefault()
    const val1 = document.getElementById("valor1").value
    console.log(val1)
    const val2 = document.getElementById("valor2").value
    console.log(val2)
    const opcion = document.getElementById("opcion").value
    console.log(opcion)

    let msjrecibido = calcular(parseInt(val1), parseInt(val2),parseInt(opcion));
    console.log(msjrecibido)
    document.getElementById("mensajemultiplicar").innerHTML = "el resultado es:" + msjrecibido;
})
