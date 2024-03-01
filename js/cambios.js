const on = document.getElementById('on');
const lcdBackgroud = document.getElementById('lcd-background');
const basicKeypad = document.querySelectorAll('.basic-keypad button');
let screen = document.getElementById('screen');
let shift = document.getElementById('shift');
let cls = document.getElementById('cls');
let result = document.getElementById('result');
let run = "off";
const left = document.querySelector(".left");
const lcdContent = document.querySelector(".lcd-content");
const rigth = document.querySelector(".right");
const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");
let strOff = "";
let strOff1 = "";


shift.addEventListener("click", ()=> { 
    strOff = "shift" ;
    cls.addEventListener("click", ()=> { 
        strOff1 = "cls" ;
        if( strOff==="shift" && strOff1==="cls" ){
            run = "off";
            lcdBackgroud.style.background = '#456F6D';
            result.textContent = "";       
            screen.textContent = "";       
            arrowRight.style.display = "none";
            arrowLeft.style.display = "none";     
            strOff = "";
            strOff1 = "";
        }
     });
});





on.addEventListener('click',()=>{ 
    if(run === "off"){
        run = "on";
        lcdBackgroud.style.background = '#D5EBD1';
        result.innerHTML = "0";
    } 
});



basicKeypad.forEach(btn => {
    btn.addEventListener('click', ()=>{
        if(run ==="on"){
            if(btn.id === "cls"){
                screen.innerHTML = "";
                result.innerHTML = "0";
                return;
            }
            if(btn.id === "exp"){
                screen.innerHTML = "";
                result.innerHTML = "0";
                return;
            }
            if(btn.id === "ans"){
                screen.innerHTML = "";
                result.innerHTML = "0";
                return;
            }

            if(btn.id === "del"){
                let strScreen = screen.textContent.slice(0,-1);
                if(strScreen === ""){
                    screen.innerHTML = "";
                    result.innerHTML = "0";
                }else{
                    screen.textContent = strScreen;
                }
                return;
            }
            if(btn.id === "igual"){
                try{
                    result.textContent = eval(screen.textContent);

                }
                catch{
                    screen.textContent = "Syntax ERROR";
                    result.innerHTML = "";

                }
                return;
            }

            if(screen.textContent === "0" || screen.textContent === "Syntax ERROR"){
                screen.textContent = btn.textContent;
            }else{
                screen.textContent += btn.textContent;
            }






            rigth.addEventListener("click", ()=>{
                lcdContent.scrollLeft += 20;
                arrowRight.style.display = "block";
            });

            left.addEventListener("click", ()=>{
                lcdContent.scrollLeft -= 20;
                arrowLeft.style.display = "block";

            });

            
        }else{
            screen.textContent = "";
            arrowRight.style.display = "none";
            arrowLeft.style.display = "none";

        }   
    });
});







const simbols = ['+','-'];
let encontroSimbolo="";
let arr=  [];
let posicion = 0;
let totalRaiz ="";
let simbolsPresionado;

/*Ver posicion de la raiz*/
let raiz = arrPresionado.indexOf("raiz");
/*Ver longitud de la raiz*/
let longitudRaiz = arrPresionado.length;



/*sacar los que esta antes a la raiz*/
let AntesRaiz = arrPresionado.slice(0,raiz);
let longitudRaizAntes = AntesRaiz.length-1;


/*convertir array en cadena para resolver la raiz*/
let strRaizAntes = AntesRaiz.join('');
let val = eval(strRaizAntes);

/*total raiz*/
if(longitudRaizAntes!==0){
let totalRaiz = val+Math.sqrt(strRaizDespues);
console.log(totalRaiz);


}else if(longitudRaizAntes===0){

/*sacar los numeros siguiente sin contar la raiz*/
let despuesRaiz = arrPresionado.slice(raiz+1,longitudRaiz);

/*Buscar si despues de la raiz viene otra operacion matematica */
/* guardamos en una variable la posicion donde esta el simbolo*/
for(let i=0; i<=simbols.length; i++){ 
    if(despuesRaiz.includes(simbols[i])){
       encontroSimbolo = arrPresionado.indexOf(simbols[i])
       arr.push(encontroSimbolo)

    }
    
}

    for(item of arr){}
        /*Obtenemos los numeros despues de la raiz hasta llegar a un simbolo si existe*/
        let despuesRaizSin = arrPresionado.slice(raiz+1,item);

        /*Obtenemos la operacion del nuevo simbolo*/
        let despuesRaizCon = arrPresionado.slice(item,longitudRaiz);
        console.log(item);

        let strRaizDespuesSin = despuesRaizSin.join('');
        let strRaizDespuesCon = despuesRaizCon.join('');
        
        if(encontroSimbolo !== ""){
   
        let val = eval(strRaizDespuesCon);
        totalRaiz = Math.sqrt(strRaizDespuesSin)+val;
        console.log(totalRaiz);
        result.textContent = totalRaiz;

        }else{
            totalRaiz = Math.sqrt(strRaizDespuesSin);
        console.log(totalRaiz);
        }








}


NumeroRaiz = arrPresionado.slice(posicionRaiz+1,signo+1);
strNumeroRaiz = NumeroRaiz.join('');
raizCuadrada = Math.sqrt(strNumeroRaiz);


NumeroRaizDespues = arrPresionado.slice(signo,longitud);
strNumeroRaizDespues = NumeroRaizDespues.join('');

val = eval(strNumeroRaizDespues);
totalRaiz = raizCuadrada;






function resolver(){
    let inputText = screen.value;
    let res1,division;


    division=inputText.split('%');/*Crea array separado por %*/
    acumDiv=division[0];/*sino muestra array[3+2], su elemento 0*/

    multiplication=acumDiv.split("x");/*Crear array, Si no es x, puede ser + o -*/
    acumMul = 1;

    for(i=0; i<multiplication.length; i++){ 
        add=multiplication[i].split('+');/*crea un array separado por +, ['3']['2']*/
        subtract=add[0].split('-');/*si no es una suma, array separado por - */
        sub1=subtract[0];

        for(j=1; j<subtract.length; j++){ 
            sub1=sub1-subtract[j];
        }
        add1 = sub1;

        for(j=1; j<add.length; j++){ 
            subtract=add[j].split('-');

            sub1 = subtract[0];

            for(k=1; k<subtract.length; k++){ 
                sub1 = sub1-subtract[k];
            }
            add1 = add1*1 + sub1*1;
        }
        acumMul = acumMul * add1;
    }
    acumDiv = acumMul;


    for(i=1; i<division.length; i++){ 
        acumDivi = division[i]; 
        multi = acumDivi.split('*');
        add = multi[0].split('+');
        subtract = add[0].split('-');
        res1 = subtract[0];
        for(j=1; j<subtract.length; j++){ 
            sub1=sub1-subtract[j];
        }
        adds = sub1;

        for(j=1; j<add.length; j++){ 
            subtract=add[j].split('-');
            sub1 = subtract[0];
            for(k=1; k<subtract.length; k++){ 
                sub1 = sub1-subtract[k];
            }
            adds = adds+sub1*1;
        }
        acumDiv = acumDiv/adds;
    }
    console.log(acumDiv);

 

    






  
}
    







function resolver(){
    let inputText = screen.value;
    let suma,primerSuma,sub1,multiplicacion,multip1,divide,divide1,adds,mul;
    const arrV =[];

    divide = inputText.split('%');
    divide1 = divide[0];
    multiplicacion=divide1.split("*");
    acumMul = 1;
    
    for(let i = 0; i<multiplicacion.length; i++){
        suma = multiplicacion[i].split('+');
        console.log(suma);

            subtract=suma[0].split('-');
            sub1=subtract[0];
            /***/
            for(j=1; j<subtract.length; j++){ 
                sub1=sub1-subtract[j];
            }
            primerSuma = sub1;
            /** */
        
            /***/
            for(l=1; l<suma.length; l++){
                subtract = suma[l].split('-');
                sub1 = subtract[0];
                
                for(m=1; m<subtract.length; m++){ 
                    sub1 = sub1*1-subtract[m]*1;
                }
                primerSuma = primerSuma*1+sub1*1;
            }
        acumMul = primerSuma  ;
    }
    /***/

 


    /***/
     for(let i=0; i<multiplicacion.length; i++){ 
        suma=multiplicacion[i].split('+');

        primerSuma=suma[0];
        mul=multiplicacion[i].split('*');
        subtract = suma[0].split('-');
        sub1=subtract[0];

        /** */
        for(j=1; j<multiplicacion.length; j++){ 
            sub1=sumas*multiplicacion[j];

        }
        sumas = sub1;




        /***/
        for(j=1; j<subtract.length; j++){ 
            sub1=sub1-subtract[j];

        }
        adds = sub1;
        /** */

        /***/
        for(l=1; l<add.length; l++){
            subtract = add[l].split('-');
            sub1 = subtract[0];

            for(m=1; m<subtract.length; m++){ 
                sub1 = sub1-subtract[m];
            }
            adds = adds*1+sub1*1*Number(acumMul)*1;
        

        }

        
        /**[3+1*3]*/



    }







    function resolver(){
        let inputText = screen.value;
        let suma,resta,multiplicacion,primero,rTotal;
    
        for (let i = 0; i < inputText.length; i++) {
            suma = inputText.split('+');
            
            primero = suma[0];
    
    
            if(suma.length > 1){
               rTotal = sumar(suma);
            }
           
            result.textContent = rTotal;
    
        }
     
    }
    
    
    
    /** */
    function sumar(suma){  
         /*Suma */
        let resta;
        primero = suma[0];
        for (let j = 1; j < suma.length; j++) {
            resta = suma[j].split('-');
            multiplicacion = resta[0].split('*');
            primero1 = multiplicacion[0];
    
            /*resta */
            for(k=1; k<resta.length; k++){ 
                console.log(resta);
                multiplicacion = resta[0].split('*');
                primero2 = multiplicacion[0];
                console.log(multiplicacion);
    
                for(l=1; l<multiplicacion.length; l++){ 
                    primero2 = primero2*multiplicacion[l];
                }
                primero1 = Number(primero1)-Number(primero2);
            }
    
            /*multiplicacion */
            for(k=1; k<multiplicacion.length; k++){ 
                console.log(multiplicacion);
                primero1 = Number(primero1)*Number(multiplicacion[k]);
            }
            primero = Number(primero)+Number(primero1);
        }
        return primero
    }
    /** */
    
    
    
    
    
    /** */
    function restar(resta){
        /*Resta */
        primero = resta[0];
         for (let j = 1; j < resta.length; j++) {
            primero = Number(primero)-Number(resta[j]);
        }
        return primero
    }
    /** */
    
    
    
    /** */
    function multiplicar(multiplicacion){
        primero = multiplicacion[0];
        /*Multiplicacion */
        for (let j = 1; j < multiplicacion.length; j++) {
            primero = Number(primero)*Number(multiplicacion[j]);
        }
        return primero;
    }
    /** */
    
    


        





  
}
    


