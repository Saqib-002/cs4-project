export const togglePassIcon=(e)=>{
    const element=e.target.parentElement.parentElement;
    element.classList.add("invisible");
    element.classList.remove("visible");
    if(element.classList.contains("passShow")){
        const passElem=element.nextElementSibling.nextElementSibling;
        const elemNextSibling=element.nextElementSibling;
        elemNextSibling.classList.add("visible");
        elemNextSibling.classList.remove("invisible");
        passElem.type="text"
    }else{
        const elemPreviousSibling=element.previousElementSibling;
        const passElem=element.nextElementSibling;
        elemPreviousSibling.classList.add("visible");
        elemPreviousSibling.classList.remove("invisible");
        passElem.type="password"
    }
}

export default togglePassIcon;