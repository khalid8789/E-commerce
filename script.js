const hamburger = document.querySelector(".hamburger")
const sideBar = document.querySelector(".side-bar") 
const body = document.querySelector("body")


hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    sideBar.classList.toggle("active")
})
   
const search = document.querySelector("#logo2")
const searchBar =  document.querySelector(".search-bar")

search.addEventListener("click", () => {
    searchBar.classList.add("acting")
    searchBar.classList.remove("cancel")

})

const cancel = document.querySelector("#logo5")
const cancelBar =  document.querySelector(".search-bar")

  cancel.addEventListener("click", ()=> {
    cancelBar.classList.add("cancel")
    cancelBar.classList.remove("acting")

  })

  const cart = document.querySelector("#logo3")
  const cartBar = document.querySelector(".cart-bar")


  cart.addEventListener("click", () => {
    cartBar.classList.add("acted")
    cartBar.classList.remove("exist")
   })

   const exist =  document.querySelector("#logo6")
   const existBar = document.querySelector(".cart-bar")

   exist.addEventListener("click", ()=>{
    existBar.classList.add("exist")
    existBar.classList.remove("acted")
    
   } )

