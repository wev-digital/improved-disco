// Opções do Menu oculto da web
function menu(){
    var list_oculta = document.querySelector(".campe_list");

    if (list_oculta.style.display === 'block'){
        list_oculta.style.display= "none";
    } else{
        list_oculta.style.display= "block";
    }
}