const boxCard = document.querySelector('.box-img')
let boxTrailer = document.querySelector('.box-anteprime')
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let divImage = []

for(let i =0;i<images.length;i++){
    images[i].image
    const card = document.createElement('div')
    card.classList.add('card-img')
    const img = document.createElement('img')
    img.classList.add('image')
    img.src= images[i].image
    card.append(img)
    boxCard.append(card)
    divImage.push(card)
    

}



const btnPima = document.getElementById('prima')
const btndopo = document.getElementById('dopo')

for (let i=0;i<divImage.length;i++){
    if(i===0){
        divImage[i].classList.add('active')
    }
    
}
let indexImage = 0;

btnPima.addEventListener('click',imgprev)
function imgprev(){ 
        if(indexImage===0){
            divImage[indexImage].classList.remove('active')
            indexImage =divImage.length
            divImage[indexImage-1].classList.add('active')
            indexImage--
        }else{
            divImage[indexImage].classList.remove('active')
            divImage[indexImage-1].classList.add('active')
            indexImage--
        }
        
        
}
console.log(divImage.length)
btndopo.addEventListener('click',imgdopo)
function imgdopo(){
    if(indexImage<(divImage.length-1)){
        divImage[indexImage].classList.remove('active')
        divImage[indexImage+1].classList.add('active')
        indexImage++
        }else{
            divImage[indexImage].classList.remove('active') 
            indexImage = 0
            divImage[indexImage].classList.add('active')
            
        }
    
    // if(indexImage<divImage.length){
    //     const nextImage = document.querySelector('.card-img.active + div')
    //     document.querySelector('.card-img.active').classList.remove('active')
    //     nextImage.classList.add('active')
        
    // }else{
    //     const nextImage =document.querySelector('.card-img')
    //     document.querySelector('.card-img.active').classList.remove('active')
    //     nextImage.classList.add('active')
    //     console.log(nextImage)
    //     indexImage =0
    // }   
        
    //     indexImage++
    //     indexImagePrev++
    //     console.log(indexImage)
    
    
}

