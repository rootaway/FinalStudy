const ButtonElm = document.getElementById('okno');
const OnClick = function(){
    $('.none').show(2000);
    
   };
const ButtonElm1 = document.getElementById('okno1');
ButtonElm.addEventListener('click', OnClick);
ButtonElm1.addEventListener('click', OnClick);




const Across = document.getElementById('cross');
const CloseChat = function(){
    $('.none').hide(1000)
};
Across.addEventListener('click', CloseChat);



const Shlapen = document.querySelectorAll('.wui > a');
let a = Array.from(Shlapen);
let b = a.forEach(function(el) {
      el.addEventListener('click', open);
});
    


const Burger = document.querySelector('.burger');
const Arrow = document.querySelector('.arrow');
function open (){
   $('.hidden_menu').toggleClass('hidden_menu1')
};
Burger.addEventListener('click', open);
Arrow.addEventListener('click', open);

 


const hui = document.getElementById('in');
const But = document.getElementById('t');
const inputText = document.getElementById('pu');
const GetText = function(){
    hui.innerHTML = inputText.value;
    setTimeout(II, 1500);
    let gg = inputText.value;
    inputText.value = "";
    function II(){
        if (gg.match(/Привет/i)) {
            
            let rand = sayHIMF[Math.floor(Math.random() * sayHIMF.length)];
            sayByeMF.textContent = rand;
        } 
        else if(gg.match(/как сам/i)) {
            let shmand = sayHowMF[Math.floor(Math.random() * sayHowMF.length)];
            sayByeMF.textContent = shmand;
        }
        else if(gg.match(/ахаха/i)) {
            let mand = sayaha[Math.floor(Math.random() * sayaha.length)];
            sayByeMF.textContent = mand;
        }
        else if(gg.match(/[A-Za-z]/i)) {
            let eng = sayEng[Math.floor(Math.random() * sayEng.length)];
            sayByeMF.textContent = eng;
        }
        else if(gg.match(/грубиян/i)) {
            let bye = sayBy[Math.floor(Math.random() * sayBy.length)];
            sayByeMF.textContent = sayBy;
        }

    };
};

But.addEventListener('click', GetText);
inputText.addEventListener('keydown', function(e){
    if (e.keyCode ===13){
        e.preventDefault();
        hui.innerHTML = inputText.value;
        let gg = inputText.value;
        setTimeout(II, 1500);
        inputText.value = "";
        function II(){
            if (gg.match(/Привет/i)) {
                
                let rand = sayHIMF[Math.floor(Math.random() * sayHIMF.length)];
                sayByeMF.textContent = rand;
            } 
            else if(gg.match(/как сам/i)) {
                let shmand = sayHowMF[Math.floor(Math.random() * sayHowMF.length)];
                sayByeMF.textContent = shmand;
            }
            else if(gg.match(/ахаха/i)) {
                let mand = sayaha[Math.floor(Math.random() * sayaha.length)];
                sayByeMF.textContent = mand;
            }
            else if(gg.match(/[A-Za-z]/i)) {
                let eng = sayEng[Math.floor(Math.random() * sayEng.length)];
                sayByeMF.textContent = eng;
            }
            else if(gg.match(/грубиян/i)) {
                let bye = sayBy[Math.floor(Math.random() * sayBy.length)];
                sayByeMF.textContent = bye;
            }

        };
        
    }
});



let sayByeMF = document.querySelector('.hi');
let sayHIMF = ['Здорова=)','Салям-пополям!', 'Вечер в хату', 'Шалом, епт=)', 'Аригато)'];
let sayHowMF =['как джип ниссан', 'как сало килограмм', 'как Жан-Клод_вандам'];
let sayaha =['че хохочешь, леща заказывать будешь?', 'есть курить?', 'давай быстрее заказывай, 5 минут до закрытия'];
let sayEng =['Ухты! Че по-английски умеешь?', 'London is a capital of Great Britian)', 'Scheisse! Ich möchte einen anderen Container!'];
let sayBy =['давай, теряйся', 'До свидания', 'все, давай аля-улю=)', 'хочешь леща-заказывый, не хочешь- давай аутфидерзейн)))'];





