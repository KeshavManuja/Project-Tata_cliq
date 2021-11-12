
   
  //  fav button-------------->>
 
  function fav(){
       var fav =JSON.parse(localStorage.getItem("favItems")) || [];

       
       document.addEventListener("click",addtoFav)
         function addtoFav(item){
      fav.push(item);
      localStorage.setItem("favItems",JSON.stringify(fav))
  }
 } 
 document.getElementById("fav").addEventListener("click",function(){
   window.location.href="fav1.html"
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
function buy() {
  var cart=JSON.parse(localStorage.getItem("cartlist")) || [];
  

  if(cart.length==0) {
    cart.push(data);
    localStorage.setItem("cartlist",JSON.stringify(cart));
    window.location.href="cart.html"
    // console.log("firsdt")
    // console.log(pushed)
  }
  else{
  for(var i=0; i<cart.length; i++) {
    if(JSON.stringify(cart[i])==JSON.stringify(data)) {
      alert("Product is already added to cart")
      window.location.href="cart.html"
      break}
    else {
      // console.log("pushed")
      cart.push(data);
      localStorage.setItem("cartlist",JSON.stringify(cart));
      // console.log(pushed)
         window.location.href="cart.html"
      }
    }
  }

  }

document.getElementById("nav2Content").addEventListener("click",buy)





  //appending fav utton

  document.querySelector("body").append("fav")