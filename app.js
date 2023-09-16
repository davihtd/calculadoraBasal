const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})
function calcFlujo(peso){
    let resultado=0
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20; //flujo = flujo + aux*1
        flujo += aux*1; //resto = 20
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    if (resto>29 ){
        let aux = reslo -29;
        flujo += aux*4;
        resto -= aux;
    }
    else{
        let corporal = ((peso *4) + 7)/(peso +90);
        let sup1 = corporal * 1500;
        let sup2 = corporal *2000;
    }
    console.log(resultado);
    flujo += resto*4;
    return flujo;
}