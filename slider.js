const sliderContent = document.querySelector("#slider-content")
const sliderParent = document.querySelector("#slider-parent")
const sliderItems = sliderParent.children
const leftButton = document.querySelector("#left-button")
const rightButton = document.querySelector("#right-button")
const animationTimeOut = 1000  // debe ser el mismo que esté usando la transición en el archivo slider-styles.css
const autoSlideInterval = 3000 // debe ser el mismo que en animationTimeOut

let totalItems
let itemWidth
let sliderParentWidth

leftButton.onclick = () => {
    disableButtons()

    const last =  sliderItems[totalItems - 1]
    const first = sliderItems[1]
    last.innerHTML = first.innerHTML

    moveSlider(-itemWidth)

    setTimeout(() =>{
        sliderParent.appendChild(sliderItems[0].cloneNode())
        sliderItems[0].remove()
        backOnPosition()

        enableButtons()

    }, animationTimeOut)
}

rightButton.onclick = () =>{

    disableButtons()

    const last =  sliderItems[totalItems - 2]
    const first = sliderItems[0]
    first.innerHTML = last.innerHTML

    moveSlider(itemWidth)

    setTimeout(() =>{
        sliderParent.insertBefore(sliderItems[totalItems - 1].cloneNode(), sliderItems[0])
        sliderItems[totalItems - 1].remove()
        backOnPosition()

        enableButtons()

    }, animationTimeOut)
}

const disableButtons = () =>{
    leftButton.disabled = true
    rightButton.disabled = true
}

const enableButtons = () => {
    leftButton.disabled = false
    rightButton.disabled = false
}


const moveSlider = (width) =>{
    sliderParent.classList.add("slider-transition")
    sliderParent.style.transform = `translate(${width}px)`
}

const backOnPosition = () =>{
    sliderParent.classList.remove("slider-transition")
    sliderParent.style.transform = `translate(0px)`
}

const setSizes = () =>{
    totalItems = sliderParent.children.length
    itemWidth = sliderContent.clientWidth / (totalItems - 2)
    sliderParentWidth = itemWidth * totalItems

    sliderParent.style.width = sliderParentWidth + 'px'
    sliderParent.style.position = "relative"
    sliderParent.style.left = `-${itemWidth}px`


    for(let i = 0; i < sliderItems.length; i++){
        sliderItems[i].style.width = `${itemWidth}px`
    }
}

const setAutoSlide = () => {
    const autoSlide = setInterval(() =>{
        leftButton.click()
    }, autoSlideInterval)
}

const resizeObserver = new ResizeObserver(entries => {
    setSizes()
})

setSizes()
setAutoSlide()
resizeObserver.observe(sliderContent)