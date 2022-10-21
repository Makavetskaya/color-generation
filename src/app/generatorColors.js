const colorBlock = document.querySelectorAll('.color')
const cols = document.querySelectorAll('.col')
const hexCode = document.querySelectorAll('p')
const wrapper = document.querySelector('.wrapper')

console.log(cols)


const generationColors = ()=>{
    let hexCode = '0123456789ABCDEF'
    let color = ''
    for(let i =0; i< 6; i++){
        color += hexCode[Math.floor(Math.random()* hexCode.length)]
    }
    return '#'+ color 
     
}

//// pressing spacebar or enter changes color
document.addEventListener('keydown', e =>{
     if(e.code.toLowerCase() === 'enter' || e.code.toLowerCase() === 'space'){
        upDateColors()
     }
})

///// changes the color all elements
const upDateColors = ()=>{
    colorBlock.forEach(el =>{
        let color = generationColors()
        el.style.backgroundColor = color
        
    })
    hexCode.forEach(el =>{
        let color = generationColors()
        el.textContent = color
    })
}
upDateColors()

///// changes the color of only the clicked element

document.addEventListener('click', e=>{
    for( let i = 0; i<colorBlock.length; i++){
        if(e.target === colorBlock[i]){
            colorBlock[i].style.backgroundColor = generationColors()
            hexCode[i].textContent =  generationColors()
        }
    }
})

