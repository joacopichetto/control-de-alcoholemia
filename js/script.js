//control de alcoholemia
input_fecha = document.querySelector("#input-date")
input_vehiculo = document.querySelector ("#input-vehiculo")
input_test = document.querySelector ("#input-test")
input_excusa = document.querySelector ("#input-excusa")
input_submit = document.querySelector ("#input-submit")
label_test = document.querySelector ("#test-alcoholemia")
div_formulario = document.querySelector ("#formulario")


gramos_por_litro = Math.random()*3
function test_alcoholemia (){
    input_test.remove()//borramos el boton
    parrafo_gramos_por_litro = document.createElement ("p")//creamos un parrafo yy lo guardamos
    parrafo_gramos_por_litro.innerHTML = "el test dio" + gramos_por_litro + "gramos por litro de alcohol en sangre" //le agregamos contenido
    label_test.appendChild(parrafo_gramos_por_litro)//metemos el elemento
}


function resultado(idoneo){
    resultado = document.createElement ("h2")
 if (idoneo){
    resultado.innerHTML = "podes manejar capo"
    div_formulario.classlist.add ("aprobado")
 }
 else{
    resultado.innerHTML = "no podes manejar flaco"
    div_formulario.classlist.add ("desaprobado")
 }
 div_formulario.appendChild(resultado)
}
function chequear_idoneidad(){
    input_submit.remove ()
    año = input_fecha.value.split ("-")[0]
    vehiculo = input_vehiculo.value
}


input_test.addEventListener ("click", test_alcoholemia);
input_submit.addEventListener ("click", chequear_idoneidad);


