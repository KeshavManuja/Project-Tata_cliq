

console.log("peek ka bhu")

var popdisplay= document.getElementById("popDisplay")
popdisplay.addEventListener("click", function(){
    var popCont= document.getElementById("popContainer")
    popCont.style.display="flex"
})

var popCross=document.getElementById("popPlus")

popCross.addEventListener("click", function(){
    var popCont= document.getElementById("popContainer")
    popCont.style.display="none"

})

var selectEmail=document.getElementById("selectEmail")

selectEmail.addEventListener("click", function(){
   
 var popMobileDiv=document.getElementById("popMobileDiv").style.display="none"

    var selectMobile=document.getElementById("popEmailDiv")
    selectMobile.style.display="block"
})



var selmob= document.getElementById("selectMobile")
selmob.addEventListener("click", function(){
    
    var disemai=document.getElementById("popEmailDiv").style.display="none"
    var dismob=document.getElementById("popMobileDiv").style.display="block"
})