var pr=0;
    
// Cart data
var data1=[{discount: "30",
    img_url: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009068833_437Wx649H_202103132244211.jpeg",
    link: "P1.html",
    name: "ID Men's Brown Casual Boots",
    price: "₹1886",
    rating: "3",
    type: "ID"},
    {discount: "30",
    img_url: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009068833_437Wx649H_202103132244211.jpeg",
    link: "P1.html",
    name: "ID Men's Brown Casual Boots",
    price: "₹1886",
    rating: "3",
    type: "ID"},{discount: "30",
    img_url: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009068833_437Wx649H_202103132244211.jpeg",
    link: "P1.html",
    name: "ID Men's Brown Casual Boots",
    price: "₹1886",
    rating: "3",
    type: "ID"}]

// Parsing data to localstorage
var data1=localStorage.setItem("try1",JSON.stringify(data1));

// Accesing data from localstorage
var data2=JSON.parse(localStorage.getItem("cartlist"));



//Total Payment amount box
var totalbox=document.createElement("div");
totalbox.setAttribute("id","totalbox");
var outerdiv=document.getElementById("hh");



// Mapping each cart item

data2.map(function(item){

    // Creating maindiv for each entry
    var maindiv=document.createElement("div");
    maindiv.setAttribute("id","maindiv");

        // Product image
        var image=document.createElement("div")
            var pic=document.createElement("img")
            pic.setAttribute("src",item.img_url)
    
        //Appending in div 
        image.append(pic)
        image.style.width="33%"
        pic.setAttribute("width","100%")
        image.style.overflow="hidden"
        
        
        // Creating div for product details
        var text=document.createElement("div")

        // Title of product
        var title=document.createElement("p")
        title.textContent=item.name
        // Price of product
        var price=document.createElement("p")
        price.textContent=item.price

        // Quantity button
        var qty=document.createElement("select")
        qty.setAttribute("id","qunty")

        var opt0=document.createElement("option")
        opt0.textContent="----"

        var opt1=document.createElement("option")
        opt1.textContent="1"


        var opt2=document.createElement("option")
        opt2.textContent="2"

        var opt3=document.createElement("option")
        opt3.textContent="3"

        var opt4=document.createElement("option")
        opt4.textContent="4"

        // try
        var kk=0
        qty.addEventListener("click",function() {
        if(Number(qty.value)) {
            var netprice=0;
            if(qty.value!==c)  {
                q=qty.value
                
                
                var a=price.textContent
                b=a.split("")
                var c=b.shift()
                var d=b.join("")
                
                pr+=Number(q)*Number(d)
                
                } 
                document.getElementById("totalprice").textContent=pr;
                document.getElementById("subtotal").textContent=pr;}
                })
                
            
            
        // Color option
        var color=document.createElement("p")
        color.textContent="color:brown"
        
        // Size option
        var size=document.createElement("p")
        size.textContent="Size: UK/IND-7"
        size.style.display="inline-block"
        qty.append(opt0,opt1,opt2,opt3,opt4)

        // Creating a hr tag
        var hr=document.createElement("hr")
        hr.style.backgroundColor="grey"

        // Creating break
        var br=document.createElement("br")
        

        // Creating Save to wishlist and remove tag
        var book=document.createElement("img");
        book.setAttribute("src","https://cdn-icons-png.flaticon.com/512/3440/3440293.png");
        book.setAttribute("width","10%");
        book.style.display="inline-block";
        // Creating Save to wishlist text
        var wishlist=document.createElement("p");
        wishlist.textContent="Save to Wishlist";
        wishlist.style.display="inline-block";
        
        // Creating Remove button
        var remove=document.createElement("p")
        remove.innerHTML="Remove"
        remove.setAttribute("id","remove")



        

        
         

    //appending to text div 
    text.append(title,price,qty,color,size,hr,br,book,wishlist,remove)
    text.style.width="34%"
    text.style.paddingLeft="5%"

    // Creating delivery icons and text
    var delivery=document.createElement("div");

        // Master div with display-inline block
        var div1=document.createElement("div");
        div1.style.display="flex"

        // delvery iconn div
        var icon=document.createElement("img")
        icon.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJ7J8fstcAZkc0bJeOUeShS929ESxb1ORhcfd6pCL8uCZw5k1F6-1pglfEX2G4hwIFrg&usqp=CAU")
        icon.setAttribute("width","80px")
        
        
        // Date to be delivered
        var date=document.createElement("p")
        date.innerHTML="Delivery by 11th Nov | "

        // Appending to the master div
        div1.append(icon,date)
        
        // Appending to delivery div
        delivery.append(div1)
       

    // appending 3 main flex divs to maindiv
    maindiv.append(image,text,delivery);


    // Appending maindiv to outer most div
    var outerdiv=document.getElementById("contain");
    outerdiv.append(maindiv); 


    // Continue shooping
    // document.getElementById("continueshop").addEventListener("click",gotohome);

    // Remmove cart function
    remove.addEventListener("click",cartremove);
    function cartremove(item){
            data2.splice(item,1);
            maindiv.style.display="none";
            console.log(data2);
        
        }
    
    function gotohome() {
        window.location.href="HomePage.html";
    }
})

var btn=document.createElement("button")
btn.textContent="Continue Shopping"
btn.setAttribute("id","continueshop")
document.getElementById("hh").append(btn)
btn.addEventListener("click",gotohome)
function gotohome() {
    window.location.href="HomePage.html"
}

// console.log(netprice)
document.getElementById("totalprice").textContent

console.log(pr)

// Continue button
document.getElementById("Checkout").addEventListener("click",movetopayment)

function movetopayment() {
    window.location.href="checkout.html"
}

// ADDRESS
var add=JSON.parse(localStorage.getItem("address"))
console.log(add)
var showadd=add[1]+","+add[4]
document.getElementById("addr").textContent=showadd





