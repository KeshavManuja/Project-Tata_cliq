
 // wislist button-------------->>

//  var fav=JSON.parse(localStorage.getItem("favlist")) || [];
// //  fav.push(data);
//  document.getElementById("cartCounter1").textContent=fav.length;
 document.getElementById("favourite").addEventListener("click",sO);
 var flag=false;
 function sO(){
 
  var fav=JSON.parse(localStorage.getItem("favlist")) || [];
  if(fav.length==0) {
 
    document.getElementById("cartCounter1").style.display="block"
     fav.push(data);
     localStorage.setItem("favlist",JSON.stringify(fav));
     var fav=JSON.parse(localStorage.getItem("favlist")) || [];
    //  fav.push(data);
     document.getElementById("cartCounter1").textContent=fav.length;
    }

    // window.location.href="cart.html"
    // console.log("firsdt")
    // console.log(pushed)
  // }
  else{
  for(var i=0; i<fav.length; i++) {
    if(JSON.stringify(fav[i])==JSON.stringify(data)) {
      flag=true;
      // console.log("h11111");

      // alert("Product is already added to cart");
      
    }

    // else  {
   
    //   // console.log("pushed")
      
    //   // console.log(pushed)
    //     //  window.location.href="cart.html"
    // }
  }
  if(!flag) {
    document.getElementById("cartCounter1").style.display="block"
    fav.push(data);
    console.log("here");
    localStorage.setItem("favlist",JSON.stringify(fav));
    var fav=JSON.parse(localStorage.getItem("favlist")) || [];
   //  fav.push(data);
    document.getElementById("cartCounter1").textContent=fav.length;
  }
  }
}
// So khtm==================


document.getElementById("nav2ContentImg1").addEventListener("click",function(){
  window.location.href="wishlist.html"
})
// Clear=================

// cart--------------------
document.getElementById("nav2ContentImg2").addEventListener("click",function(){
  var cartitems=JSON.parse(localStorage.getItem("cartlist")) || []
  if(cartitems.length==0) {
    window.location.href="emptycart.html"
  }
  else{
    window.location.href="cart.html"
  }
  
  
})
// Clear==================



//  data as object

    
  // document.getElementById("cart").addEventListener("click",dO);
  // function dO(){
  //   var cart=JSON.parse(localStorage.getItem("cartlist")) || [];
  

  //   if(cart.length==0) {
  //     cart.push(data);
  //     localStorage.setItem("cartlist",JSON.stringify(cart));
  //     // window.location.href="cart.html"
  //     // console.log("firsdt")
  //     // console.log(pushed)
  //   }
  //   else{
  //   for(var i=0; i<cart.length; i++) {
  //     if(JSON.stringify(cart[i])==JSON.stringify(data)) {
  //       alert("Product is already added to cart")
  //       break}
  //     else {
  //       // console.log("pushed")
  //       cart.push(data);
  //       localStorage.setItem("cartlist",JSON.stringify(cart));
  //       // console.log(pushed)
  //         //  window.location.href="cart.html"
  //     }
  //   }
  //   }
  // }


  
 
// Defining buy now button to cart page
var flag1=false;
function buy() {
  var cart=JSON.parse(localStorage.getItem("cartlist")) || [];

  
  if(cart.length==0) {
 
    
     cart.push(data);
     localStorage.setItem("cartlist",JSON.stringify(cart));
     document.getElementById("cartCounter2").style.display="block"
     var cart=JSON.parse(localStorage.getItem("cartlist")) || [];
    //  cart.push(data);
     document.getElementById("cartCounter2").textContent=cart.length;
    }

    // window.location.href="cart.html"
    // console.log("firsdt")
    // console.log(pushed)
  // }
  else{

  for(var i=0; i<cart.length; i++) {
    if(JSON.stringify(cart[i])==JSON.stringify(data)) {
      flag1=true;
      // console.log("h11111");

      // alert("Product is already added to cart");
      // continue;
    }


  }
  if(!flag1) {
    cart.push(data);
    // console.log("here");
    localStorage.setItem("cartlist",JSON.stringify(cart));
    document.getElementById("cartCounter2").style.display="block"
    var cart=JSON.parse(localStorage.getItem("cartlist")) || [];
   //  fav.push(data);
   
    document.getElementById("cartCounter2").textContent=cart.length;
  }
  
window.location.href="cart.html"}
}











// add to cart============================================================================
var ca=document.querySelector("#cart")
console.log(ca)
document.querySelector("#cart").addEventListener("click",cartadd1)
var flag2=false;
function cartadd1() {
  console.log("jj")
  

  var cart=JSON.parse(localStorage.getItem("cartlist")) || [];

  
  if(cart.length==0) {
 
    
     cart.push(data);
     localStorage.setItem("cartlist",JSON.stringify(cart));
     var cart=JSON.parse(localStorage.getItem("cartlist")) || [];
    //  cart.push(data);
    document.getElementById("cartCounter2").style.display="block"
     document.getElementById("cartCounter2").textContent=cart.length
     
    }

    // window.location.href="cart.html"
    // console.log("firsdt")
    // console.log(pushed)
  // }
  else{
  for(var i=0; i<cart.length; i++) {
    if(JSON.stringify(cart[i])==JSON.stringify(data)) {
      flag2=true;
      // console.log("h11111");

      // alert("Product is already added to cart");
      // continue;
    }

    // else  {
   
    //   // console.log("pushed")
      
    //   // console.log(pushed)
    //     //  window.location.href="cart.html"
    // }
  }
  if(!flag2) {
    cart.push(data);
    // console.log("here");
    localStorage.setItem("cartlist",JSON.stringify(cart));
    var cart=JSON.parse(localStorage.getItem("cartlist")) || [];
   //  fav.push(data);
   document.getElementById("cartCounter2").style.display="block"
    document.getElementById("cartCounter2").textContent=cart.length;
  }
  }
}






document.getElementById("nav2ContentImg1").addEventListener("click",function(){
  window.location.href="wishlist.html"
})
  

//   if(cart.length==0) {
//     cart.push(data);
//     localStorage.setItem("cartlist",JSON.stringify(cart));
//     window.location.href="cart.html"
//     // console.log("firsdt")
//     // console.log(pushed)
//   }
//   else{
//   for(var i=0; i<cart.length; i++) {
//     if(JSON.stringify(cart[i])==JSON.stringify(data)) {
//       alert("Product is already added to cart")
//       window.location.href="cart.html"
//       break;
//     }
//     else
//      {
//       // console.log("pushed")
//       cart.push(data);
//       localStorage.setItem("cartlist",JSON.stringify(cart));
//       // console.log(pushed)
//          window.location.href="cart.html"
//       }
//     }
//   }

//   }

// document.getElementById("nav2Content").addEventListener("click",buy)





  //appending fav utton

  document.querySelector("body").append("fav")






  // document.getElementById("favourite").addEventListener("click",dO);
  // function dO(){
  //   var fav=JSON.parse(localStorage.getItem("favlist")) || [];
  //   if(fav.length==0) {
  //     fav.push(data);
  //     localStorage.setItem("favlist",JSON.stringify(fav));
  //     // window.location.href="cart.html"
  //     // console.log("firsdt")
  //     // console.log(pushed)
  //   }
  //   else{
  //   for(var i=0; i<fav.length; i++) {
  //     if(JSON.stringify(fav[i])==JSON.stringify(data)) {
  //       alert("Product is already added to cart")
  //       break
  //     }
  //     else {
  //       // console.log("pushed")
  //       fav.push(data);
  //       localStorage.setItem("favlist",JSON.stringify(fav));
  //       // console.log(pushed)
  //         //  window.location.href="cart.html"
  //     }
  //   }
  //   }
  // 
  window.addEventListener('load', (event) => {

    var cart=JSON.parse(localStorage.getItem("cartlist")) || [];
    //  fav.push(data);
    if(cart.length!==0) {
      document.getElementById("cartCounter2").style.display="block"
     document.getElementById("cartCounter2").textContent=cart.length;}
      else{
        document.getElementById("cartCounter2").style.display="none"
      }



     var fav=JSON.parse(localStorage.getItem("favlist")) || [];
     if(fav.length!==0) {
      document.getElementById("cartCounter1").style.display="block"
     document.getElementById("cartCounter1").textContent=fav.length;}
      else{
        document.getElementById("cartCounter1").style.display="none"
      }
     //  fav.push(data);
      document.getElementById("cartCounter1").textContent=fav.length;
});