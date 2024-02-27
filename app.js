let title = document.querySelector("#title")
let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus");
let sum = 0
plus.addEventListener("click", ()=> {
   sum ++
  title.textContent = sum
   
})

minus.addEventListener("click",() => {
    sum--
if(sum < 0)   {
    sum = 0
} else {
    title.textContent = sum
}

})