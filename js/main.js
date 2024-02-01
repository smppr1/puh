let mymenu=document.querySelector(".menu-lay")
mymenu.addEventListener('click',()=>{
    let tampung=this.event.target.id
    
    switch(tampung){
        case "btn-A":
            document.querySelector(".paket-B").classList.add("hide")
            document.querySelector("#btn-kembali").classList.remove("hide")
            document.querySelector(".paket-A").classList.remove("hide")
            document.querySelector(".menu").classList.add("hide")
            document.querySelector(".akhir").classList.remove("hide")
            
            break;
        case "btn-B":
            document.querySelector(".paket-A").classList.add("hide")
            document.querySelector("#btn-kembali").classList.remove("hide")
            document.querySelector(".paket-B").classList.remove("hide")
            document.querySelector(".menu").classList.add("hide")
            document.querySelector(".akhir").classList.remove("hide")
            break;
        case "btn-kembali":
            document.querySelector("#btn-kembali").classList.add("hide")
            document.querySelector(".paket-A").classList.add("hide")
            document.querySelector(".paket-B").classList.add("hide")
            document.querySelector(".menu").classList.remove("hide")
            document.querySelector(".akhir").classList.add("hide")
            break;
    }
})
