document.addEventListener('mousemove', e =>{
    Object.assign(document.documentElement, {
        style:`
            --move-x: ${(e.clientX - window.innerWidth/2)* 0.005}deg;
            --move-y: ${(e.clientY - window.innerHeight/2)* -0.01}deg;           
        `
    })
})

let gallery_button_right = document.getElementsByClassName('gallery__button__right')[0]
let gallery_button_left = document.getElementsByClassName('gallery__button__left')[0]
let gallery_cards = document.getElementsByClassName('gallery__cards')[0]

let card_images = [
    'Новая папка\\20e4174a6173254a910c4bbb3cfd1cc0.jpg',
    'Новая папка\\1652213059_37-kartinkin-net-p-kartinki-drobovikov-40.jpg',
    'Новая папка\\cb5b5d9b8f96314a9f474facca6836fe.jpeg',
    'Новая папка\\cmiyd5ala3a.jpg',
    'Новая папка\\d93bc930a939473fb7fbe24238e90880.jpeg',
    'Новая папка\\i.webp',
]
for (let i =0; i<3; i++){
    add_card(card_images[i])
}

function add_card(image){
    let new_card = document.createElement('img')
    new_card.src = image
    new_card.classList.add(new_card)
    gallery_cards.append(new_card)
}

gallery__button__right.addEventListener('click', event => {

})