document.getElementById("btn1").addEventListener("click",enterMouse1);
function enterMouse1(){
  document.getElementById("btn1").style.backgroundColor="black";
    document.getElementById("btn1").style.color="white";
   }3
   document.getElementById("btn2").addEventListener("click",enterMouse2);
   function enterMouse2(){
    document.getElementById("btn2").style.backgroundColor = "black";
    document.getElementById("btn2").style.color= "white";
   }
   document.getElementById("btn3").addEventListener("click",enterMouse3);
   function enterMouse3(){
    document.getElementById("btn3").style.backgroundColor = "black";
    document.getElementById("btn3").style.color= "white";
   }
   document.getElementById("btn4").addEventListener("click",enterMouse4);
   function enterMouse4(){
    document.getElementById("btn4").style.backgroundColor = "black";
    document.getElementById("btn4").style.color= "white";
   }
   document.getElementById("btn5").addEventListener("click",enterMouse5);
   function enterMouse5(){
    document.getElementById("btn5").style.backgroundColor = "black";
    document.getElementById("btn5").style.color= "white";
 
   }
   
 

// color buttons
// btn1
document.getElementById("tickbtn1").addEventListener("click",hy1)

  function hy1() {
      document.getElementById("tickbtn1").setAttribute("class","change1")
  }
  // btn2
  document.getElementById("tickbtn2").addEventListener("click",hy2)

  function hy2() {
      document.getElementById("tickbtn2").setAttribute("class","change2")
  }
  // btn3
  document.getElementById("tickbtn3").addEventListener("click",hy3)

  function hy3() {
      document.getElementById("tickbtn3").setAttribute("class","change3")
  }

 // wislist button-------------->>
 
 document.getElementById("favourite").addEventListener("click",sO);
 function sO(){
  var fav=JSON.parse(localStorage.getItem("favlist")) || [];
  fav.push(data);
 localStorage.setItem("favlist",JSON.stringify(fav));
  
 }
 document.getElementById("nav2Content2").addEventListener("click",function(){
  window.location.href="wishlist.html"
})
//  document.getElementById("fav").addEventListener("click",function(){
//    window.location.href="fav1.html"
// })

//  data as object
//add to cart
document.getElementById("cart").addEventListener("click",dO);
  function dO(){
//  localStorage.setItem("myObject",data);
    var cart=JSON.parse(localStorage.getItem("cartlist")) || [];
    cart.push(data);
   localStorage.setItem("cartlist",JSON.stringify(cart));
//    var originalObject = JSON.parse(localStorage.getItem("new"))
//    console.log(originalObject)
  }
 
// Defining buy now button to cart page
function buy() {
    window.location.href="cart.html"
}




  //appending fav utton

  // document.querySelector("body").append("fav)