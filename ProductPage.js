var span =document.getElementById("category").addEventListener("click",myFnct)
var plus = document.getElementById("plus")
var sub = document.getElementById("sub")
var category = document.getElementById("box")

var category2 = document.getElementById("box2")
var category3 = document.getElementById("box3")
var category1 = document.getElementById("box1")
var count = 0;

function myFnct(){
count++
if(count%2==1){
    plus.style.display="none"
    sub.style.display = "inline-block"
    category.style.display="block";
   
    category2.style.display="block";
    category3.style.display="block";
    category1.style.display="block";
}else {
    sub.style.display="none"
    plus.style.display = "inline-block"
    category.style.display="none";
  
    category2.style.display="none";
    category3.style.display="none";
    category1.style.display="none";

}
}


var brand=document.getElementById("brand").addEventListener("click",showData)
var BrandPlus = document.getElementById("BrandPlus")
var BrandSum = document.getElementById("BrandSum")
var brand= document.getElementById("dox")
var brand1 = document.getElementById("dox1")
var brand2 = document.getElementById("dox2")
var brand3 = document.getElementById("dox3")
var count = 0;

function showData(){
count++
if(count%2==1){
    BrandPlus.style.display="none"
    BrandSub.style.display = "inline-block"
    brand.style.display="block";
   brand1.style.display="block";
    brand2.style.display="block";
    brand3.style.display="block";
}else {
    BrandSub.style.display="none"
    BrandPlus.style.display = "inline-block"
    brand.style.display="none";
   brand1.style.display="none";
    brand2.style.display="none";
    brand3.style.display="none";

}
}

var price =document.getElementById("price").addEventListener("click",Price)
var PricePlus = document.getElementById("PricePlus")
var PriceSub = document.getElementById("PriceSub")

var price= document.getElementById("Fox")
var price1 = document.getElementById("Fox1")
var price2 = document.getElementById("Fox2")
var price3 = document.getElementById("Fox3")
var count = 0;

function Price(){
count++
if(count%2==1){
    PricePlus.style.display="none"
    PriceSub.style.display = "inline-block"
    price.style.display="block";
    price1.style.display="block";
    price2.style.display="block";
    price3.style.display="block";
}else {
    PriceSub.style.display="none"
    PricePlus.style.display = "inline-block"
    price.style.display="none";
    price1.style.display="none";
    price2.style.display="none";
    price3.style.display="none";

}
}
var discount =document.getElementById("discount").addEventListener("click",Discount)
var DiscountPlus = document.getElementById("DiscountPlus")
var DicountSub = document.getElementById("DicountSub")
var discount= document.getElementById("jox")
var dicount1 = document.getElementById("jox1")
var dicount2 = document.getElementById("jox2")
var dicount3 = document.getElementById("jox3")
var count = 0;

function Discount(){
count++
if(count%2==1){
    DiscountPlus.style.display="none"
    DicountSub.style.display = "inline-block"
    discount.style.display="block";
    dicount1.style.display="block";
    dicount2.style.display="block";
    dicount3.style.display="block";
}else {
    DicountSub.style.display="none"
    DiscountPlus.style.display = "inline-block"
    discount.style.display="none";
    dicount1.style.display="none";
    dicount2.style.display="none";
    dicount3.style.display="none";

}
}





var data = [
{
    img_url:"https://img.tatacliq.com/images/i7/437Wx649H/MP000000009068833_437Wx649H_202103132244211.jpeg",
    type:"ID",
    name:"ID Men's Brown Casual Boots",
    price:"₹1886",
    link:"P1.html",
    discount:"30%",
    rating:"3",
},
{
    img_url:"https://img.tatacliq.com/images/i7/437Wx649H/MP000000010846577_437Wx649H_202110090030011.jpeg",
    type:"ID",
    name:"ID Men's Brown Casual Boots",
    price:"₹1492",
    link:"P2.html",
    discount:"0%",
    rating:"3",
},
{
    img_url:"https://img.tatacliq.com/images/i7/437Wx649H/MP000000010882600_437Wx649H_202110100733141.jpeg",
    type:"Bugatti",
    name:"Bugatti Men's Brown Derby",
    price:"₹10999",
    link:"P3.html",
    discount:"30%",
    rating:"3",
},
{
    img_url:"https://img.tatacliq.com/images/i7/437Wx649H/MP000000009068825_437Wx649H_202103132244161.jpeg",
    type:"ID",
    name:"ID Men's Tan Casual Boots",
    price:"₹1886",
    link:"P4.html",
    discount:"50%",
    rating:"3",
},
{
    img_url:"https://img.tatacliq.com/images/i7/437Wx649H/MP000000010846553_437Wx649H_202110090029481.jpeg",
    type:"ID",
    name:"ID Men's Black Casual Boots",
    price:"₹1492",
    link:"P5.html",
    discount:"60%",
    rating:"3",
},
{
    img_url:"https://img.tatacliq.com/images/i7/437Wx649H/MP000000009068848_437Wx649H_202103132245311.jpeg",
    type:"ID",
    name:"ID Men's Olive Casual Boots",
    price:"₹1886",
    link:"P6.html",
    discount:"0%",
    rating:"3",
},
{
    img_url:"https://img.tatacliq.com/images/i7/437Wx649H/MP000000009068824_437Wx649H_202103132244081.jpeg",
    type:"ID",
    name:"ID Men's Charcoal Black Casual Boots",
    price:"₹1874",
    link:"P7.html",
    discount:"10%",
    rating:"3",
},
{
    img_url:"https://img.tatacliq.com/images/i7/437Wx649H/MP000000009068813_437Wx649H_202103132243151.jpeg",
    type:"ID",
    name:"ID Men's Brown Chukka Boots",
    price:"₹1875",
    link:"P8.html",
    discount:"20%",
    rating:"3",
},
{
    img_url:"https://img.tatacliq.com/images/i6/437Wx649H/MP000000006435183_437Wx649H_20200202034813.jpeg",
    type:"Weinbrenner",
    name:"Weinbrenner by Bata Men's Tan Casual Boots",
    price:"₹2250",
    link:"P9.html",
    discount:"30%",
    rating:"3",
},
{
    img_url:"https://img.tatacliq.com/images/i2/437Wx649H/MP000000001834547_437Wx649H_20170916210435.jpeg",
    type:"Red Chief",
    name:"Red Chief Men's Tan Derby Boots",
    price:"₹1996",
    link:"P10.html",
    discount:"30%",
    rating:"5",
},
{
    img_url:"https://img.tatacliq.com/images/i4/437Wx649H/MP000000000789572_437Wx649H_20181103161424.jpeg",
    type:"Red Chief",
    name:"Red Chief Men's Tan Casual Boots",
    price:"₹3995",
    link:"P11.html",
    discount:"30%",
    rating:"3",
},
{
    img_url:"https://img.tatacliq.com/images/i3/437Wx649H/MP000000003393067_437Wx649H_20180713205611.jpeg",
    type:"Woodland",
    name:"Woodland Men's Blue Casual Boots",
    price:"₹1947",
    link:"P12.html",
    discount:"30%",
    rating:"5",
},
{
    img_url:"https://img.tatacliq.com/images/437Wx649H/MP000000001443872_437Wx649H_20170516192814.jpeg",
    type:"Woodland",
    name:"Woodland Men's Khaki & Olive Casual Boots",
    price:"₹1997",
    link:"P13.html",
    discount:"30%",
    rating:"4",
},
{
    img_url:"https://img.tatacliq.com/images/i4/437Wx649H/MP000000002055972_437Wx649H_20181103160942.jpeg",
    type:"Red Chief",
    name:"Red Chief Men's Tan Derby Boots",
    price:"₹2448",
    link:"P14.html",
    rating:"3",
},
{
    img_url:"https://img.tatacliq.com/images/i3/437Wx649H/MP000000003352398_437Wx649H_20180703204807.jpeg",
    type:"Red Chief",
    name:"Red Chief Men's Rust Derby Boots",
    price:"₹2296",
    link:"P15.html",
    rating:"3",
},
{
    img_url:"https://img.tatacliq.com/images/i2/437Wx649H/MP000000002056076_437Wx649H_20171125205215.jpeg",
    type:"Red Chief",
    name:"Red Chief Men's Olive Chukka Boots",
    price:"₹1796",
    link:"P16.html",
    rating:"3",
},
]

localStorage.setItem("data",JSON.stringify(data))

var Scnd = document.getElementById("Scnd")
var maindiv=document.createElement("div")

maindiv.setAttribute("id","container")
// var count=0
// var links=["P1.html","P2.html","P3.html","P4.html","P5.html","P6.html","P7.html","P8.html","P9.html","P10.html","P11.html","P12.html"
// ,"P13.html","P14.html","P15.html","P16.html"]
data.map(function(item) {

var a=document.createElement("div")
a.setAttribute("id","dic")

var img=document.createElement("img")
img.setAttribute("src",item.img_url);
img.setAttribute("id","imgDiv")

var h2=document.createElement("h2")
h2.textContent=item.type

var h3=document.createElement("p")
h3.textContent=item.name

var price=document.createElement("p")
price.textContent=item.price

// var discount=document.createElement("div")
// discount.setAttribute("class","discount")

var ratings=item.rating
var btn=document.createElement("button")
var ii=document.createElement("i")
ii.setAttribute("class","material-icons")
ii.innerHTML="&#xe83a"
btn.append(ratings,ii)



var links=item.link

document.querySelector("body").append(maindiv);
maindiv.append(a);
Scnd.append(maindiv);
a.append(img,h2,h3,price,btn);



img.addEventListener("click",specificproduct)
console.log(links)
function specificproduct() {
    
    window.location.href=links
    }
    // count++
})