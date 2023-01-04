document.body.addEventListener("click", (e) => {
    e.preventDefault(); 
    
    const elements = document.body.querySelectorAll(".tooltip");
    if(elements) Array.from(elements).forEach((elem) => elem.remove());
    console.log(elements)

    if(e.target.matches(".has-tooltip")) {
        const box = e.target.getBoundingClientRect();

        const hint = document.createElement("div");
        hint.className = "tooltip tooltip_active";
        hint.style.display = "absolute";
        hint.style.top = `${box.y + 20}px` ;
        hint.style.left = `${box.x}px`;

        hint.innerHTML = e.target.title;
     
        document.body.append(hint);
    } 
})