import navbar from "./componant/navbar.js";
let navbardiv = document.querySelector("#navbar");
navbardiv.innerHTML = navbar();

async function latestdata() {
  try {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`
    );
    let data = await res.json();
    console.log(data.meals);
    showdata(data.meals);
  } catch (err) {
    console.log(err);
  }
}
latestdata();

function showdata(data) {
  data.map((data) => {
    var div = document.createElement("div");
      div.addEventListener("click", function () {
      showmeoneonly(data.idMeal);
    });
    div.setAttribute("id", "box1");

    var imgdiv = document.createElement("div");
    imgdiv.setAttribute("id", "imgdiv1");
    var img = document.createElement("img");
    img.src = data.strMealThumb;

    var textdiv = document.createElement("div");
    textdiv.setAttribute("id", "textdiv1");
    var p = document.createElement("p");
    p.textContent = data.strMeal;

    imgdiv.append(img);
    textdiv.append(p);
    div.append(imgdiv, textdiv);
    document.querySelector("#latestdatashow").append(div);
  });
}

import { getData, appendData } from "./script/showingdata.js";
async function showmeoneonly(data) {
  document.querySelector("#latestdatashow").style.display="none";
  let id = data;
  // console.log(data)
  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  // let res= await fetch( `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  // let data1=await res.json()
  // console.log(data1)
  let res =  await getData(url);
  // console.log(res);
  let parent = document.querySelector("#datashow");
  appendData(res, parent);
}




