var maleArr = [
    {

        img:"https://i.pinimg.com/736x/83/7e/6b/837e6bc8615a254a681988bccac87010.jpg", text:"shinchan"
    },
    {
        img:"https://w0.peakpx.com/wallpaper/635/569/HD-wallpaper-chhota-bheem-character-chota-laddoo-cartoon-india-toon-animation-kids.jpg", text:"Chhota Bheem"
    },
    {
        img:"https://wallpaperaccess.com/full/5425489.jpg", text:"Mighty Raju"
    },
    {
        img:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b8a69fc88d7125c4ba30ef9dacdd228688608d4918447b68480dc0d9e7be7fac._RI_V_TTW_.jpg", text:"Motu"
    },
    {
        img:"https://qph.cf2.quoracdn.net/main-qimg-fdb2bf6891e1f6febbfb68ef4469e6d4-lq", text:"Doraemom"
    },
    {
        img:"https://i.pinimg.com/originals/e9/36/ab/e936ab240156c33be7974c2c36188bdf.jpg", text:"Nobita"
    },
    {
        img:"https://th.bing.com/th/id/OIP.dpoekhowwesc5nuQE-TaugHaEH?w=291&h=180&c=7&r=0&o=5&pid=1.7", text:"Dekisugi"
    },
    {
        img:"https://cdna.artstation.com/p/assets/images/images/034/807/864/large/gil-lagziel-oggy-artstation1.jpg?1613299994", text:"Oggy"
    },
    {
        img:"https://files.thehandbook.com/uploads/2021/03/aauvwnigcyc-6bisokmkooj-q-fnj-a8qqrwkgvnf-mds800-c-k-c0x00ffffff-no-rj.jpg", text:"Jack"
    },
    {
        img:"https://wallpapercave.com/wp/wp8931802.jpg", text:"Keymon"
    },
    {
        img:"https://wallpaperaccess.com/full/2036714.jpg", text:"Patlu"
    },
]

var femaleArr = [
    {
        img:"https://images8.alphacoders.com/123/1232631.jpg",text:"Shizuka"
    },
    {
        img:"https://wallpapercave.com/wp/wp8698041.jpg",text:"Chutki"
    },
    {
        img:"https://www.greengold.tv/assets/Character/CB/Indu.jpg",text:"Indumati"
    },
    {
        img:"https://images-ng.pixai.art/images/orig/391123a4-b3f4-4c2b-8585-83791e74baa6",text:"Cindrella"
    },
    {
        img:"https://i.pinimg.com/originals/37/2d/59/372d5955a333ca46f131457eb0f571a0.jpg",text:"Barbie"
    },
    {
        img:"https://c4.wallpaperflare.com/wallpaper/22/736/860/dress-rapunzel-pascal-rapunzel-a-tangled-tale-wallpaper-preview.jpg",text:"Rapunzel"
    },
    {
        img:"https://w0.peakpx.com/wallpaper/212/720/HD-wallpaper-elsa-disney-snow-queen-neuroset-blonde-frozen-art-girl-fantasy-movie-red-princess.jpg",text:"Elsa"
    },
    {
        img:"https://m.media-amazon.com/images/I/81V3DFSVQQL.jpg",text:"Jasmine"
    },
    {
        img:"https://image.tensorartassets.com/cdn-cgi/image/anim=true,w=500,q=85/model_showcase/701069642300633993/359afff9-34fd-ca12-935a-4fefc001e652.png",text:"jane"
    },
    {
        img:"https://www.jammable.com/_next/image?url=https%3A%2F%2Fimagecdn.voicify.ai%2Fmodels%2Fc63a86a8-db50-47b7-be9c-2a5dc93ebe22.png&w=3840&q=100",text:"Dora"
    },
    {
        img:"https://www.cartonionline.com/wordpress/wp-content/uploads/2023/04/biancaneve_06.png",text:"Snow white"
    },
    {
        img:"https://go_service.aieasypic.com/?url=https%3A%2F%2Fimage.civitai.com%2FxG1nkqKTMzGDvpLrqFT7WA%2F39a3793a-4de2-40ab-af9a-333529c81a0a%2Fwidth%3D600%2F2898660.jpeg&type=jpeg&width=512&quality=80",text:"Gwen Stacy"
    },
    {
        img:"https://image.tensorartassets.com/cdn-cgi/image/anim=true,w=500,q=85/model_showcase/707459333866326656/1f0e47d4-b132-a3b9-0548-251fff967527.jpeg",text:"Gwen"
    },
]

var input = document.querySelector("input")
var male = document.querySelector("#male")
var female = document.querySelector("#female")
var textPart = document.querySelector(".text-part")
var image = document.querySelector(".image img")
var genrate = document.querySelector(".genrate button")
var span = document.querySelector("span")
var insert = document.querySelector(".lower")
var share = document.querySelector("#share")

image.addEventListener("load", function(){
    var inputValue = input.value; 
    textPart.innerHTML = `<h1>${text}</h1>`
    span.innerHTML = `<h1>${inputValue} is ${text}</h1>`
    span.style.display = "block";
})

var flag = 0;
console.log(flag);

male.addEventListener("click", function(){
    flag = 1;
    console.log(flag);
})


female.addEventListener("click", function(){
    flag = 0;
    console.log(flag);
})



genrate.addEventListener("click", function(){
   
    var M = male.value;
    var f = female.value;

        if(flag === 1){
            console.log("ladka hai");
        var random = Math.floor(Math.random() * maleArr.length)
    console.log(random);
    randomIMG = maleArr[random].img;
    text = maleArr[random].text;
    console.log(text);
    console.log(randomIMG);

    image.src = randomIMG
      
            insert.style.display = "none";
            share.style.display = "block";
        }

       else{

        var inputValue = input.value; 

        var random = Math.floor(Math.random() * femaleArr.length)
    console.log(random);
    randomIMG = femaleArr[random].img;
    text = femaleArr[random].text;
    console.log(text);
    console.log(randomIMG);

    image.src = randomIMG
    // textPart.innerHTML = `<h1>${text}</h1>`
    // span.innerHTML = `<h1>${inputValue} is ${text}</h1>`
   
    insert.style.display = "none";
    share.style.display = "block";
       } 
})

