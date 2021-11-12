
 // wislist button-------------->>

 var fav=JSON.parse(localStorage.getItem("favlist")) || [];
//  fav.push(data);
 document.getElementById("cartCounter1").textContent=fav.length;
 document.getElementById("favourite").addEventListener("click",sO);
 function sO(){
 
  var fav=JSON.parse(localStorage.getItem("favlist")) || [];
  if(fav.length==0) {
 
    
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
      console.log("h11111");

      alert("Product is already added to cart");
      break;
    }
    else {
      fav.push(data);
      console.log("here");
      localStorage.setItem("favlist",JSON.stringify(fav));
      var fav=JSON.parse(localStorage.getItem("favlist")) || [];
     //  fav.push(data);
      document.getElementById("cartCounter1").textContent=fav.length;
      // console.log("pushed")
      
      // console.log(pushed)
        //  window.location.href="cart.html"
    }
  }
  }
}

document.getElementById("nav2ContentImg1").addEventListener("click",function(){
  window.location.href="wishlist.html"
})


// cart--------------------
document.getElementById("nav2ContentImg2").addEventListener("click",function(){
  window.location.href="cart.html"
})



//  data as object

    
  document.getElementById("cart").addEventListener("click",dO);
  function dO(){
    var cart=JSON.parse(localStorage.getItem("cartlist")) || [];
  

    if(cart.length==0) {
      cart.push(data);
      localStorage.setItem("cartlist",JSON.stringify(cart));
      // window.location.href="cart.html"
      // console.log("firsdt")
      // console.log(pushed)
    }
    else{
    for(var i=0; i<cart.length; i++) {
      if(JSON.stringify(cart[i])==JSON.stringify(data)) {
        alert("Product is already added to cart")
        break}
      else {
        // console.log("pushed")
        cart.push(data);
        localStorage.setItem("cartlist",JSON.stringify(cart));
        // console.log(pushed)
          //  window.location.href="cart.html"
      }
    }
    }
  }
 
// Defining buy now button to cart page
// function buy() {
//   var cart=JSON.parse(localStorage.getItem("cartlist")) || [];
  

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