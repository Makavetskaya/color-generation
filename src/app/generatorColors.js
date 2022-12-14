const colorBlock = document.querySelectorAll('.color')
const cols = document.querySelectorAll('.col')
const hexCode = document.querySelectorAll('.hex')
const wrapper = document.querySelector('.wrapper')
const colorInf = document.querySelectorAll('.color-inf')
const btnRandome = document.querySelector('.btn-randome')
const copy = document.querySelectorAll('.fa-copy')
const drip = document.querySelectorAll('.fa-fill-drip')
const tooltip =  document.querySelectorAll('.tooltip')



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
     if(e.code.toLowerCase() === 'enter' && e.code.toLowerCase() === 'space'){
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

///// changes the color of only the clicked element and copy hexCode

btnRandome.addEventListener('click',()=>{
    upDateColors()
})
document.addEventListener('click', e =>{
    let currElem = e.target
    for( let i = 0; i < colorBlock.length; i++){
        if(e.target === colorBlock[i]){
            colorBlock[i].style.backgroundColor = generationColors()
            hexCode[i].textContent =  generationColors()
        }
    }
    if (currElem.classList.contains('hex')){
        return copyhexCode(currElem.textContent)
       
    }
})


const copyhexCode = (text) =>{
 return navigator.clipboard.writeText(text)

}
copyhexCode()




const showColorInf = (e)=>{
    for( let i = 0; i <colorBlock.length; i++){
         if(e.target === colorBlock[i]
              || e.target === hexCode[i]
              || e.target === copy[i]
              || e.target === drip[i]){
            colorInf[i].classList.remove('inactive')
            }else{
                colorInf[i].classList.add('inactive')
                    }
                }
}

document.addEventListener('mouseover',showColorInf)




const showTooltip  =(e)=>{
    for( let i = 0; i <copy.length; i++){
        if(e.target === copy[i]){
           tooltip[i].classList.remove('inactive')
           }else{
            tooltip[i].classList.add('inactive')
                   }
               }
}


document.addEventListener('mouseover',showTooltip )





// copy.forEach(el=>{
//     el.addEventListener('mouseover', (e)=>{
//         console.log(e.target)
//         if(e.target == el){
//             tooltip.forEach(el=>{
//                el.style.display = 'block'
//             })
//         }else{
//             tooltip.forEach(el=>{
//                 el.style.display = 'none'
//              })
//         }
        
//     })
// })




    
