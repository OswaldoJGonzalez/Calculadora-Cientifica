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
        if( strOff==="shift" &&strOff1==="cls" ){
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







