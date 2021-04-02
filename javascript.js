
let li4 = document.querySelectorAll(".li4");
let red = document.querySelectorAll(".red");
let rose = document.querySelectorAll(".rose");
let al = document.querySelectorAll(".nav4-div");
let white = document.querySelectorAll(".white");
let img5 = document.querySelectorAll(".nav11_img");
let img1 = document.getElementById("img-id");
let img6 = [
    "https://livedemo00.template-help.com/wt_prod-10492//theme/images/winery/grid-gallery-1-1200x800-original.jpg",
    "https://livedemo00.template-help.com/wt_prod-10492//theme/images/winery/grid-gallery-2-1200x800-original.jpg",
    "https://livedemo00.template-help.com/wt_prod-10492//theme/images/winery/grid-gallery-3-1200x800-original.jpg",
    "https://livedemo00.template-help.com/wt_prod-10492//theme/images/winery/grid-gallery-4-800x800-original.jpg",
    "https://livedemo00.template-help.com/wt_prod-10492//theme/images/winery/grid-gallery-5-1200x800-original.jpg",
    "https://livedemo00.template-help.com/wt_prod-10492//theme/images/winery/grid-gallery-6-1200x800-original.jpg"
]
let nul
let bd2 = document.querySelectorAll(".media_bd-1");

for (let i = 0; i < img6.length; i++) {
    nul=i;
}

function o1(){
    for (let i = 0; i < al.length; i++) {
        al[i].style="animation: anim1 1s;";
    }

    for (let i = 0; i < al.length; i++) {
        al[i].style.display="flex";
    }

    document.getElementById("nav4").style="flex-wrap:wrap";
    document.getElementById("row2").style.display="flex";
    document.getElementById("row1").style="justify-content: center;";
}

function o2(){
    for (let i = 0; i < al.length; i++) {
        al[i].style="animation: anim1 1s;";
    }

    for (let i = 0; i < al.length; i++) {
        al[i].style.display="none";
    }

    for (let i = 0; i < red.length; i++) {
        red[i].style.display="flex";
    }

    document.getElementById("nav4").style.display="flex";
    document.getElementById("row2").style.display="flex";
}

function o3(){
    for (let i = 0; i < al.length; i++) {
        al[i].style="animation: anim1 1s;";
    }

    for (let i = 0; i < al.length; i++) {
        al[i].style.display="none";
    }

    for (let i = 0; i < rose.length; i++) {
        rose[i].style.display="flex";
    }

    document.getElementById("nav4").style.display="flex";
    document.getElementById("row2").style.display="flex";
}

function o4(){
    for (let i = 0; i < al.length; i++) {
        al[i].style="animation: anim1 1s;";
    }

    for (let i = 0; i < al.length; i++) {
        al[i].style.display="none";
    }

    for (let i = 0; i < white.length; i++) {
        white[i].style.display="flex";
    }

    document.getElementById("row2").style.display="none";
    document.getElementById("row1").style="justify-content: end;";
}

function o5(li5){
    for (let i = 0; i < li4.length; i++) {
        li4[i].style="color: #9b9b9b; border-bottom: 4px solid #ccc";
    }

    li5.style="color: #c4a273; border-bottom: 4px solid #c4a273";
}

function o6(img){
    document.getElementById("div-id").style="display:block; z-index:1";
    document.getElementById("img-id").src=img.src;

    for (let i = 0; i < img6.length; i++) {
        img5[i].src=img6[i];
    }

    for (let i = 0; i < img6.length; i++) {
        img5[i].style = "border:2px solid #fff";

        if (img1.src == img6[i]) {
            img5[i].style = "border:2px solid #c4a273"
        }
    }
}

function o7(){
    document.getElementById("div-id").style.display="none";
}

function iconLeft(){
    if (nul > 0) {
        nul--;
    }

    else {
        nul = img6.length-1;
    }

    document.getElementById("img-id").src=img6[nul];

    for (let i = 0; i < img6.length; i++) {
        img5[i].style = "border:2px solid #fff";

        if (img1.src == img6[i]) {
            img5[i].style = "border:2px solid #c4a273"
        }
    }
}

function iconRight(){
    if (nul < img6.length-1) {
        nul++;
    }

    else {
        nul = 0;
    }

    document.getElementById("img-id").src=img6[nul];

    for (let i = 0; i < img6.length; i++) {
        img5[i].style = "border:2px solid #fff";

        if (img1.src == img6[i]) {
            img5[i].style = "border:2px solid #c4a273"
        }
    }
}

function img(img2){
    img1.src=img2.src;

    for (let i = 0; i < img6.length; i++) {
        img5[i].style = "border:2px solid #fff";

        if (img1.src == img6[i]) {
            img5[i].style = "border:2px solid #c4a273"
        }
    }
}

let one=1
function o8(){
    if (one==1) {
        document.getElementById("bg-id").style="position:fixed; width:100%; height:100vh; top:0; left:0; z-index:1";
        one=2;
    }
    else if (one==2) {
        document.getElementById("bg-id").style="width: 45%; height: 60vh; position: absolute; left: 40px;";
        one=1;
    }
}

let two = 1;

function bd3(){
    let divs = document.querySelectorAll(".media_bd-div2"); 

    if (two == 1) {
        document.getElementById("div-id2").style.display="block";
        
        for (let i = 0; i < divs.length; i++) {
            divs[i].style="margin: 5px; border: 2px solid #151515";
        }

        two=2;
    }

    else if (two==2) {
        document.getElementById("div-id2").style.display="none";

        for (let i = 0; i < divs.length; i++) {
            divs[i].style="margin: 3px; border: 3px solid #151515";
        }

        two=1;
    }
}

let three = 1;

function en() {
    if (three == 1) {
        document.getElementById("media-id").style.display="block";
        three = 2;
    }

    else if (three == 2) {
        document.getElementById("media-id").style.display="none";
        three = 1;
    }
    
}

function leng(lang2) {
    let div3 = document.querySelectorAll(".lang-1");
    let p = document.getElementById("p-id");

    for (let i = 0; i < div3.length; i++) {
        div3[i].style="background-color: #fff; color: #000";
    }

    lang2.style="background-color: #c4a273; color: #fff";
}

let four =  1;

function search(){
    if (four === 1) {
        document.getElementById("div2-id").style.display="flex";
        four = 2;
    }

    else if (four === 2) {
        document.getElementById("div2-id").style.display="none";
        four = 1;
    }
}

let five = 1;

function bd(){
    console.log("aaaaa")

    if (five == 1) {
        document.getElementById("id1").style="animation: bd1 1s; transform:rotate(50deg)";
        document.getElementById("id2").style.display="none";
        document.getElementById("id3").style="animation: bd3 1s; transform:rotate(-50deg); margin-top:-6px";
        document.getElementById("dId").style.display="block"
        five = 2;
    }

    else if (five == 2) {
        for (let i = 0; i < bd2.length; i++) {
            bd2[i].style="display:block; transform:rotate(0deg)";
        }
        document.getElementById("dId").style.display="none"
        five = 1;
    }
}

function o9(bDiv1){
    let bDiv = document.querySelectorAll(".b_div");

    for (let i = 0; i < bDiv.length; i++) {
        bDiv[i].style = "background-color: #fff; color: #151515"
    }

    bDiv1.style = "background-color: #c4a273; color: #fff"
}

let six = 1;

function o10(icon1){
    let icon = document.querySelectorAll(".icon_div");
    
    if (six === 1) {
        for (let i = 0; i < icon.length; i++) {
            icon[i].style = "transform: rotate(0deg)";
        }

        icon1.style = "transform: rotate(180deg)";
        six = 2
    }

    else {
        icon1.style = "transform: rotate(0deg)";
        six = 1;
    }
}
