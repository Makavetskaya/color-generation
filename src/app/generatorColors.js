const cols = document.querySelectorAll('.color')
const hexCode = document.querySelectorAll('p')

document.addEventListener('keydown', e =>{
    if(e.code.toLowerCase() === 'Enter' || e.code.toLowerCase() === 'Space'){
       upDateColors()
    }
})

const generationColors = ()=>{
    let hexCode = '0123456789ABCDEF'
    let color = ''
    for(let i =0; i< 6; i++){
        color += hexCode[Math.floor(Math.random()* hexCode.length)]
    }
    return '#'+ color 
     
}



const upDateColors = ()=>{
    cols.forEach(el =>{
        let color = generationColors()
        el.style.backgroundColor = color
        
    })
    hexCode.forEach(el =>{
        let color = generationColors()
        el.textContent = color
    })
}
upDateColors()