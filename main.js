AOS.init();

let btn = document.querySelector('#btn')
let body = document.body;
let main = document.querySelector('main')
let btn2 = document.querySelector('#btn2')
let img = document.querySelector('#img')

let menu = document.querySelector('#icon')
let ul = document.querySelector('nav ul')
let nav = document.querySelector('nav')


menu.addEventListener('click' , menuF)

function menuF(){
   ul.classList.toggle('show')
   nav.classList.toggle('navclass')
}




function btnclick() {
    let block = document.createElement('div')
    let imgblock = document.createElement('div')
    let infoblock = document.createElement('div')
    let infoblockInfo = document.createElement('p')
    let infoblok13 = document.createElement('p')
    let infoblockPro = document.createElement('p')
    let img = document.createElement('img')
    let btnPro = document.createElement('button')
    let btnMax = document.createElement('button')
    let btnclose = document.createElement('button')
    let a = '<a href="https://wa.me/996221120013">Купить</a>'

    block.classList.add('block')
    imgblock.classList.add('imgblock')
    img.src = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=470&hei=556&fmt=png-alpha&.v=1631220221000"
    infoblock.classList.add('infoblock')
    infoblok13.classList.add('infoblock13')
    infoblockPro.classList.add('infopro')
    infoblockInfo.classList.add('infoblockinfo')
    btnMax.classList.add('btnMax')
    btnPro.classList.add('btnPro')
    btnclose.classList.add('btnclose')
    

    body.appendChild(block)
    block.appendChild(imgblock)
    block.appendChild(infoblock)
    imgblock.appendChild(img)
    infoblock.appendChild(btnPro)
    infoblock.appendChild(btnMax)
    infoblock.appendChild(btnclose)
    infoblock.appendChild(infoblockInfo)
    infoblock.appendChild(infoblok13)
    infoblock.appendChild(infoblockPro)
    
   

    infoblockInfo.innerHTML = "У iPhone 13 Pro и iPhone 13 Pro Max много общего. Новая система камер Pro с режимом «Киноэффект», макросъёмкой и повышенным качеством фото и видео в условиях низкой освещённости. Дисплей Super Retina XDR с технологией ProMotion для более быстрого и плавного взаимодействия. A15 Bionic — самый быстрый чип iPhone. Панель Ceramic Shield для повышенной прочности. И весь день без подзарядки."
    infoblok13.innerHTML = "iPhone 13 Pro от 99 990сом"
    infoblockPro.innerHTML = "iPhone 13 Pro Max  от 109 990сом"
    btnMax.innerHTML = a;
    btnPro.innerHTML = a;
    btnclose.innerHTML = "закрыть"

}
btnclick()
let block = document.querySelector('.block')
let closebtn = document.querySelector('.btnclose')

function open(){
   block.style.display = 'flex'
}
function close(){
    block.style.display = 'none'
 }


btn.addEventListener('click' , open);
closebtn.addEventListener('click' , close)
btn2.addEventListener('click' , open);

for(let i =0 ;i<5; i++){
   var imgfunc = setTimeout(() => {
    img.src = 'https://www.pngall.com/wp-content/uploads/11/iPhone-13-PNG-Cutout.png'
}, 10000); 
clearTimeout()
}


let black = document.getElementById('black')
let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let box = document.querySelectorAll('.col-lg .box')
let section = document.querySelector('section')
let col5 = document.querySelectorAll('.col-lg-4')
let pink = document.querySelector('#pink')
black.addEventListener('click' , blacClick)
function blacClick(){
//    section.style.backgroundColor = 'white'
//   box.forEach((item)=>{
//     item.style.border = '1px solid black'
//   })
    img1.src = "https://cdn.shopify.com/s/files/1/1286/1203/products/13Pro-Back45-SSAModNX-Phone-Graphite_4455a559-9666-4364-86c7-8e88b3676dc1_800x.png?v=1632899914"
    img2.src = "https://www.mytrendyphone.eu/images/Genuine-iPhone-13-Pro-Apple-Silicone-Case-MagSafe-Midnight-0194252781166-23092021-01-p.jpg"
col5.forEach(item=>{
   item.style.border = '2px solid black'
   item.style.backgroundColor= 'rgba(255, 255, 255, 70)'
})

}


pink.addEventListener('click', pinkClick)
function pinkClick(){
   col5.forEach(item=>{
      item.style.border = '2px solid white'
      item.style.backgroundColor= 'rgba(0, 0, 0, 0)'
   })
   img1.src = "http://cdn.shopify.com/s/files/1/0409/7245/products/pink_2478dc16-b62a-48a0-9318-c5e6c93b9db4_1200x1200.png?v=1603977238"
   img2.src = "https://cdn.shopify.com/s/files/1/0409/7245/products/pink_5a33fa9f-a5e0-4dfd-8ce4-2e38f09cc81f_1800x1800.png?v=1603808661"
}


let blue = document.getElementById('blue')
blue.addEventListener('click' , blueClick)
function blueClick(){
   col5.forEach(item=>{
      item.style.border = '2px solid white'
      item.style.backgroundColor= 'rgba(0, 0, 0, 0)'
   })
   img1.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000"
 
   img2.src = "https://cdn.shopify.com/s/files/1/0409/7245/products/skyblue_1_77898869-1534-4d0a-b4eb-c86610ddbe7f_grande.png?v=1603816910"
}

let white = document.getElementById('white')
white.addEventListener('click', whiteClick)
function whiteClick(){
   col5.forEach(item=>{
      item.style.border = '2px solid white'
      item.style.backgroundColor= 'rgba(0, 0, 0, 0)'
   })
   img1.src = "https://cdn.shopify.com/s/files/1/0282/8510/8356/products/IPHONE11green-whitemate_2000x2000.png?v=1595165243"
 
   img2.src = "https://pngimg.com/uploads/iphone_12/iphone_12_PNG36.png"
}




let iconArrow = document.getElementById('iconArrow')
let section3 = document.getElementById('sectionHidden')
let closeArrow = document.querySelector('#closeArrow')
iconArrow.addEventListener('click', iconArrowF)
function iconArrowF(){
   
  section3.style.display = 'block'
}
closeArrow.addEventListener('click' , closeArrF)
function closeArrF(){
   section3.style.display = 'none'
}