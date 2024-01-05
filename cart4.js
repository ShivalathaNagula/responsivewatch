let btn1=document.getElementById("btn1")
console.log(btn1);
btn1.addEventListener("click", ()=>{
   let add=document.getElementById("add").value++
   console.log(add);
})


let sub=document.getElementById("sub")
console.log(sub);

sub.addEventListener("click", ()=>{
   let add=document.getElementById("add").value--
   console.log(add);
})

let add1=document.getElementById("add1")
console.log(add1);

add1.addEventListener("click", ()=>{
   let add=document.getElementById("add").value
   console.log(add);
   let a=document.getElementById("b")
   console.log(a);
   a.style.border="1px solid"
   a.style.borderRadius="100%"
   a.style.height="15px"
   a.style.width="15px"
   a.style.textAlign="center"
   a.style.backgroundColor="red"
   a.style.color="white"
   a.innerHTML=add
   
})