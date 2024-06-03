let jackets = ["j1" , "j2" , "j3" , "j4"];
let tops = ["t1" , "t2" , "t3" , "t4"];
let accessories = ["a1" , "a2" , "a3" , "a4"];
let bottoms = ["b1" , "b2" , "b3" , "b4"];
let shoes = ["s1" , "s2" , "s3" , "s4"];


let filePath = "asset/images/"
let jacketsImages = ["j1", "j2", "j3", "j4"];  
let topsImages = ["t1", "t2", "t3", "t4"];
let accessoriesImages = ["a1" , "a2" , "a3" , "a4"];
let bottomsImages = ["b1", "b2", "b3", "b4"];
let shoesImages = ["s1", "s2", "s3", "s4"];


function shuffleOutfit() {

    shuffleJackets() 
    shuffleTops()
    shuffleAccessories()
    shuffleBottoms()
    shuffleShoes()  
}

function shuffleJackets() {
    let randNum;
    randNum = Math.floor(Math.random() * jackets.length);
    document.getElementById("jackets").innerHTML = `<img src=${filePath}${jacketsImages[randNum]}.jpeg alt="jackets" >`;
}

function shuffleTops() {
    let randNum;
    randNum = Math.floor(Math.random() * tops.length);
    document.getElementById("tops").innerHTML = `<img src=${filePath}${topsImages[randNum]}.jpeg alt="tops" >`;
}

function shuffleAccessories() {
    let randNum;
    randNum = Math.floor(Math.random() * accessories.length);
    document.getElementById("accessories").innerHTML = `<img src=${filePath}${accessoriesImages[randNum]}.jpeg alt="accessories" >`;
}

function shuffleBottoms() {
    let randNum;
    randNum = Math.floor(Math.random() * bottoms.length);
    document.getElementById("bottoms").innerHTML = `<img src=${filePath}${bottomsImages[randNum]}.jpeg alt="bottoms" >`;
}

function shuffleShoes() {
    let randNum;
    randNum = Math.floor(Math.random() * shoes.length);
    document.getElementById("shoes").innerHTML = `<img src=${filePath}${shoesImages[randNum]}.jpeg alt="shoes" >`;
}
