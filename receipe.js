import navbar from "./componant/navbar.js";

let navbardiv=document.querySelector("#navbar")
navbardiv.innerHTML=navbar()



import { getData, appendData } from "./script/showingdata.js";

let url="https://www.themealdb.com/api/json/v1/1/random.php"
let res= await getData(url)
// console.log(res)

let parent=document.querySelector("#datashow")

appendData(res,parent)


// async function latestdata(){
//     let res=await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
//     let data=await res.json()
//     console.log(data.meals)
//     showdata(data.meals)
// }
// latestdata()

// function showdata(data){
//     data.map((data)=>{
//       var div=document.createElement("div")
//       div.setAttribute("id","box")

//       var imgdiv=document.createElement("div")
//       imgdiv.setAttribute("id","imgdiv")
//       var img=document.createElement("img")
//       img.src=data.strMealThumb

//       var textdiv=document.createElement("div")
//       textdiv.setAttribute("id","textdiv")
//       var p=document.createElement("p")
//       p.setAttribute("id","head")
//       p.textContent="Name- "+data.strMeal

//       var p1=document.createElement("p")
//       p1.setAttribute("id","head")
//       p1.textContent="Cuisine- "+data.strArea

//       var p2=document.createElement("p")
//       p2.setAttribute("id","head")
//       p2.textContent="Category- "+data.strCategory

//       var p3=document.createElement("p")
//       p3.setAttribute("id","booody")
//       p3.textContent=data.strInstructions

//       imgdiv.append(img)
//       textdiv.append(p,p1,p2,p3)
//       div.append(imgdiv,textdiv)
//       document.querySelector("#latestdatashow").append(div)
//     })
// }
