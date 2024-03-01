const lcdBackgroud = document.getElementById('lcd-background');
let screen = document.getElementById('screen');
let result = document.getElementById('result');
let btn = document.querySelectorAll('button');
const onCal = document.getElementById('on');
const Operation =['+','-','*','/'];
let run = "off";
let off1 = "";
let off2 = "";
let arrPresionado;
onCal.addEventListener('click', ()=>{ on(); });



btn.forEach(btns =>{
 
        btns.addEventListener('click', (e)=>{
            if(run ==="on"){
                let btnText = e.target.textContent;
                let btnId = e.target.id;

                if(screen.value === 'Syntax Error'){
                    screen.value = "";
                }


                if(btnId==="ab/c"){
                    btnText = "";
                    return;
                }
                if(btnId==="^"){btnText = "^";}
                if(btnId==="nCr"){btnText = "";}
                if(btnId==="Pol"){btnText = "";}
                if(btnId===".,,,"){btnText = "";}
                if(btnId==="hyp"){btnText = "";}
                if(btnId==="RCL"){btnText = "";}
                if(btnId==="ENG"){btnText = "";}
              
                if(btnId==="M+"){btnText = "";}
                if(btnId==="EXP"){btnText = "";}
                
                if(btnId==="(-)"){
                    btnText = "";
                    return;
                }
                
                if(btnId==="shift"){
                    off1 = "shift";
                }

                if(btnId==="cls"){
                    if(off1!== 'shift'){
                        screen.innerHTML = "";
                        result.innerHTML = "0";
                    }else{ 
                        off2 = "cls";
                        if(off1==="shift" && off2==="cls"){
                            off1="";
                            off2 ="";
                            screen.textContent ="";
                            result.textContent = "";
                            off();
                        }
                    }
                    screen.value = "";
                    result.value = "0";
                    return;
                }
        
                if(btnId === "equal"){
                    if(screen.value === ""){
                        screen.value = "";
                        result.textContent = "0";
                    }else{ 
                    resolver();
                    }
                    return;
                }
                if(btnId === "sqrt"){
                    btnText = "√";
                }
                
                if(btnText === "X"){
                    btnText = "*";
                }
                if(btnText === "%"){
                    btnText = "/";
                }
                if(btnText === "x-²"){
                    btnText = "²";
                }
                if(btnId === "x-³"){btnText = "³";}
                if(btnId === "x-1"){btnText = "-¹";}

                if(btnId==="del"){
                    let Del = screen.value.slice(0,-1);
                    if(Del === ""){
                        screen.value = "";
                        result.value = "0";
                    }else{
                        screen.value = Del;
                    }
                    return;
                }
                
               
                screen.value += btnText;

              

            }else{
                screen.value = "";
            }
        });





});



function on(){
        run = "on";
        lcdBackgroud.style.background = '#D5EBD1';
        result.innerHTML = "0";
}
function off(){
    run = "off";
    lcdBackgroud.style.background = '#456F6D';
}






function resolver(){
    let inputText = screen.value;
    let suma,
        resta,
        multiplicacion,
        division,
        raiz,
        logaritmo,
        cos,
        sin,
        exp,
        tangente,
        logaritmN,parentesis = 0, pop, p,p2 = '',p3,p4,
        primero,primero1,primero2,primero3;




        pop = inputText.split("");

        for (let i = 0; i < pop.length; i++) {
            pop = inputText.split("(");
            p = pop[0];
            for (let j = 1; j < pop.length; j++) {
                parentesis = pop[j].split(")");
                p2 += parentesis[0];
                p3 = p+p2;

            }

        }
        console.log(p3);                

            

        



    suma=inputText.split('+');/*crea un array separado por +, ['3']['2']*/
    resta=suma[0].split('-');/*si no es una suma, array separado por - */
    multiplicacion=resta[0].split('*');/*si no es una suma, array separado por - */
    division=multiplicacion[0].split('/');/**/
    raiz=division[0].split('√');/**/
    logaritmo=raiz[0].split('log');/**/
    cos=logaritmo[0].split('cos');/**/
    sin=cos[0].split('sin');/**/
    exp=sin[0].split('²');/**/
    tangente=exp[0].split('tan');/**/
    logaritmN=tangente[0].split('ln');/**/
    primero=logaritmN[0];


    for(i=1; i<exp.length; i++){ 
        primero = elevarCuadrado(primero,2);
        primero1 = primero;
    }
    for(i=1; i<logaritmN.length; i++){ 
        primero2 = logaritmN[i];
        primero = lneperiano(primero2);
        primero1 = primero;
    }
    for(i=1; i<tangente.length; i++){ 
        primero2 = tangente[i];
        primero = tan(primero2);
        primero1 = primero;
    }

    for(i=1; i<sin.length; i++){ 
        primero2 = sin[i];
        primero = seno(primero2);
        primero1 = primero;
    }
    
    for(i=1; i<cos.length; i++){ 
        primero2 = cos[i];
        primero = coseno(primero2);
        primero1 = primero;
    }

    for(i=1; i<logaritmo.length; i++){ 
        primero2 = logaritmo[i];
        primero = logaritmo10(primero2);
        primero1 = primero;
    }

    for(i=1; i<raiz.length; i++){ 
        primero2 = raiz[i];
        primero = raizCuadrada(primero2);
        primero1 = primero;
    }
    
    for(i=1; i<division.length; i++){ 
        raiz = division[i].split('√');
        primero2 = raiz[0];

        for (let j = 1; j < raiz.length; j++) {
            primero3 = raiz[j];
            primero2 = raizCuadrada(primero3);
        }
        primero = dividir(primero, primero2);

        for (let j = 1; j < multiplicacion.length; j++) {
            primero2 = multiplicacion[j];
            primero = multiplicar(primero, primero2);

        }
        primero1 = primero;

    }


    for(i=1; i<multiplicacion.length; i++){ 
        division = multiplicacion[i].split('/');
        raiz = division[0].split('√');
        primero1 = raiz[0];


        for (let j = 1; j < raiz.length; j++) {
            primero2 = raiz[j];
            primero1 = raizCuadrada(primero2);
        }
        for (let j = 1; j < division.length; j++) {
            primero2 = division[j];
            primero1 = dividir(primero1, primero2);
        }
        primero = multiplicar(primero, primero1);

        primero1 = primero;
    }



    for(i=1; i<resta.length; i++){ 
        multiplicacion = resta[i].split('*');
        division = multiplicacion[0].split('/');
        raiz = division[0].split('√');
        primero1 = raiz[0];


        for (let j = 1; j < raiz.length; j++) {
            primero2 = raiz[j];
            primero1 = raizCuadrada(primero2);
        }



        
        for (let j = 1; j < division.length; j++) {
            primero2 = division[j];
            primero1 = dividir(primero1, primero2);
        }
        for (let j = 1; j < multiplicacion.length; j++) {
            primero2 = multiplicacion[j];
            primero1 = multiplicar(primero1, primero2);
        }
        primero = restar(primero, primero1);
        primero1 = primero;

    }
  

    for(i=1; i<suma.length; i++){ 
        multiplicacion = suma[i].split('*');
        division = multiplicacion[0].split('/');
        resta = division[0].split('-');
        raiz = resta[0].split('√');
        primero1 = raiz[0];


        for (let j = 1; j < raiz.length; j++) {
            primero2 = raiz[j];
            primero1 = raizCuadrada(primero2);
        }

      

        for (let j = 1; j < resta.length; j++) {
            primero2 = resta[j];
            primero1 = restar(primero1, primero2);
        }


        for (let j = 1; j < division.length; j++) {
            resta = division[j].split('-');
            primero2 = resta[0];
            primero1 = dividir(primero1, primero2);
            for (let j = 1; j < resta.length; j++) {
                primero3 = resta[j];
                primero1 = restar(primero1, primero3);
            }    
        }


        for (let j = 1; j < multiplicacion.length; j++) {
            resta = multiplicacion[j].split('-');
            primero2 = resta[0];
            primero1 = multiplicar(primero1, primero2);
            for (let j = 1; j < resta.length; j++) {
                primero3 = resta[j];
                primero1 = restar(primero1, primero3);
            }    
        }




        primero = Number(primero)+Number(primero1);
        primero1 = primero

    }  

    if(isNaN(primero1)){
        result.textContent = '0';
        screen.value = 'Syntax Error';
    }else{
        result.textContent = primero1;
        screen.value = screen.value;
    }
     
    

}


/**SUMAR */
function sumar(primero,primero1){
    primero = Number(primero)+Number(primero1);
    return primero
}
/** */


/**RESTAR */
function restar(primero,primero1){
    primero = Number(primero)-Number(primero1);
    return primero;
}
/** */

/**MULTIPLICAR */
function multiplicar(primero,primero1){
    primero = Number(primero)*Number(primero1);
    return primero;
}
/** */

/**DIVISION */
function dividir(primero,primero1){
    primero = Number(primero)/Number(primero1);
    return primero;
}
/** */

/**RAIZ CUADRADA */
function raizCuadrada(primero1){
    primero = Math.sqrt(primero1);
    return primero;
}
/** */

/**LOGARITMO BASE 10 */
function logaritmo10(primero1){
    primero1 = Math.log10(primero1);
    return primero1;
}
/** */

/**COSENO */
function coseno(primero1){
    rad = (Math.PI/180)*primero1; //pasar grados a radianes.
    primero1 = Math.cos(rad);
    return primero1;
}
/** */

/**SENO */
function seno(primero1){
    rad = (Math.PI/180)*primero1; //pasar grados a radianes.
    primero1 = Math.sin(rad);
    return primero1;
}
/** */

/**TANGENTE */
function tan(primero1){
    rad = (Math.PI/180)*primero1; //pasar grados a radianes.
    primero1 = Math.tan(rad);
    return primero1;
}
/** */

/**ELEVADO */
function elevarCuadrado(primero1,exponente){
    primero1 = Math.pow(Number(primero1),exponente);
    return primero1;
}
/** */


/**LOGARITMO NEPERIANO */
function lneperiano(primero1){
    let valor = Number(primero1)/Math.pow(-10,7);
    primero1 = Math.pow(-10,7)*Math.log(valor);
    console.log(valor)

    return primero1;
}
/** */