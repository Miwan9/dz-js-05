const keyboard = {
    layouts: {
        en: {
            topRow: ["qwertyuiop[]"],
            middleRow: ["asdfghjkl;'"],
            bottomRow: ["zxcvbnm,./"]
        },
        ru: {
            topRow: ["йцукенгшщзхъ"],
            middleRow: ["фывапролджэ"],
            bottomRow: ["ячсмитьбю."]
        },
        ua: {
            topRow: ["йцукенгшщзхї"],
            middleRow: ["фівапролджє"],
            bottomRow: ["ячсмитьбю."]
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

const getRandomInt = (min, max) => { 
    return Math.floor(Math.random() * (max - min)) + min;
}

///-------------------------------------///
let keyLang;

let addKeyboardLayout = alphabet => {

    if(alphabet=== 'en') keyLang = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
    if(alphabet=== 'ru') keyLang = "йцукенгшщзхъфывапролджэячсмитьбю.";
    if(alphabet=== 'ua') keyLang = "йцукенгшщзхїфівапролджєячсмитьбю.";

    keyboard.layouts[alphabet].topRow = keyLang.split("").slice(0,12);
    keyboard.layouts[alphabet].middleRow = keyLang.split("").slice(12,23);
    keyboard.layouts[alphabet].bottomRow = keyLang.split("").slice(23,34);

    document.getElementById('string1').innerHTML=keyboard.layouts[alphabet].topRow;
    document.getElementById('string2').innerHTML=keyboard.layouts[alphabet].middleRow;
    document.getElementById('string3').innerHTML=keyboard.layouts[alphabet].bottomRow;

    let options = document.getElementById('row').options;

     document.getElementById('rand-char-string').onclick=()=>{

        Array.from(options).map(function(n,i){
            if(options[i].selected)
            return document.getElementById('string-char').innerHTML =
                `${keyboard.layouts[alphabet][options[i].value][getRandomInt(0, keyboard.layouts[alphabet][options[i].value].length)]}`;
        });
     }
};
///-----------------------------------///

let languages = () => {
    addKeyboardLayout('en');
    addKeyboardLayout('ru');
    addKeyboardLayout('ua');
};

///------------------------------------///

let getRandCharInAlph=()=> {
    document.getElementById('keyboard-char').innerHTML=`${keyLang[getRandomInt(0, keyLang.length)]}`;
}

document.getElementById('rand-char-keyb').onclick= getRandCharInAlph;

///------------------------------------///
let flag=0;

while (flag!==null) {
    let i = prompt('Выберите язык который вы хотите использовать на тренажере: en-0, ru-1, ua-2.');
    if (i==0) {
        keyboard.currentLang=keyboard.langs[i];
        languages();
        addKeyboardLayout(keyboard.currentLang);
        console.log(keyboard);
        flag = null;
    }
    else if (i==1) {
        keyboard.currentLang=keyboard.langs[i];
        languages();
        addKeyboardLayout(keyboard.currentLang);
        console.log(keyboard);
        flag = null;
    }
    else if (i==2) {
        keyboard.currentLang=keyboard.langs[i];
        languages();
        addKeyboardLayout(keyboard.currentLang);
        console.log(keyboard);
        flag = null;
    }
    else if (i!=0 && i!=1 && i!=2 && i!==null) {
        alert('Был выбран не доступный язык. Попробуйте еще раз!');
    }
    else if (i===null) flag = null;
}


