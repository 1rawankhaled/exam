var btn=document.getElementById('close')
btn.addEventListener('click',function(){
leftdiv.setAttribute('style','width:0px')
})
var openbtn=document.getElementById('open')
openbtn.addEventListener('click',function(){
   leftdiv.setAttribute('style','width: 0px')

   })

var leftdiv=document.getElementById('a')
// leftdiv.addEventListener('click',function(){
//    console.log('hi3')
//    })


// var cdiv=document.getElementById('hcontact')
// // cdiv.addEventListener('click',function(){
// //    console.log('hi4')
// //    })



















// category

  var datalist=[];
var http = new XMLHttpRequest();
http.open('GET', `https://www.themealdb.com/api/json/v1/1/categories.php`);
http.send();

http.addEventListener('readystatechange', function () {
  if (http.readyState == 4 && http.status == 200) {
    datalist=JSON.parse(http.response);
    display();
  }
});


function display(){
  var box=``
  for(var i=0;i< datalist.categories.length;i++){
    box+=`<div class="col-md-3">
         <div onclick="getMealDetails('${datalist.categories[i].idCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
             <img class="w-100" src="${datalist.categories[i].strCategoryThumb}" alt="" srcset="">
             <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 " id="mama">
                <h3 class="ctm">${datalist.categories[i].strCategory}</h3>  
                
             </div>
           </div>
          </div>`
  }
  document.getElementById("body").innerHTML = box;
}


// search
var list=[];
function handleStateChange() {
  if (http2.readyState == 4 && http2.status == 200) {
    list = JSON.parse(http2.response);
    console.log(list);
  }
}

var http2 = new XMLHttpRequest();
http2.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`);
http2.send();

http2.addEventListener('readystatechange', function(){
  if (http2.readyState == 4 && http2.status == 200) {
        list=JSON.parse(http2.response);
       console.log(list)
       display2()
}});

function display2(){
  var box=``
  for(var i=0;i< list.meals.length;i++){
    box+=`<div class="col-md-3">
    <div onclick="getMealDetails('${list.meals[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
        <img class="w-100" src="${list.meals[i].strMealThumb}" alt="" srcset="">
        <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 " id="mama">
           <h3 class="ctm">${list.meals[i].strMeal}</h3>  
           
        </div>
      </div>
     </div>`
  }
  document.getElementById("ll").innerHTML = box;
}

var i=0;


// search
var sbn=document.getElementById("searchbyn");
function search(){
  console.log(sbn.value)
  if(list[i].strMeal.include(sbn.value)){
    box+=`<div class="col-md-3">
    <div onclick="getMealDetails('${list.meals[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
        <img class="w-100" src="${list.meals[i].strMealThumb}" alt="" srcset="">
        <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 " id="mama">
           <h3 class="ctm">${list.meals[i].strMeal}</h3>  
           
        </div>
      </div>
     </div>`
    
  }
  document.getElementById("ll").innerHTML = box;
}
// area
var llist = [];
var http3 = new XMLHttpRequest();
http3.open('GET', `https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
http3.send();

http3.addEventListener('readystatechange', function () {
  if (http3.readyState == 4 && http3.status == 200) {
    llist = JSON.parse(http3.response);
    display3();
  }
});

function display3() {
  var box3 = ``;
  for (var i = 0; i < llist.meals.length; i++) {
    box3 += `
      <div class="col-md-3">
        <div onclick="getMealDetails('${llist.meals[i].strArea}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
          <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 " id="mama">
            <h3 class="ctm">${llist.meals[i].strArea}</h3>  
          </div>
        </div>
      </div>`;
  }
  document.getElementById("body3").innerHTML = box3;
}


















































// var datalist = [];


  
//   var http = new XMLHttpRequest();
//   http.open('get',  ` www.themealdb.com/api/json/v1/1/categories.php  `);
// http.send();
  
//   http.addEventListener('readystatechange', function () {
//     if (http.readyState == 4 && http.status == 200) {
//       datalist = JSON.parse(http.response).categories;
//       display();
//     }
//   });



  

  

// function display() {
//   var b = ``;

//   for (var i = 0; i < datalist.categories.length; i++) {
//     b += `
//       <div class="col-md-3">
//         <div onclick="getMealDetails('${datalist.categories[i].idCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
//           <img class="w-100" src="${datalist.categories[i].strCategoryThumb}" alt="" srcset="">
//           <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 " id="mama">
//             <h3 class="ctm">${datalist.categories[i].strCategory}</h3>  
            
//           </div>
//         </div>
//       </div>
//     `;
//   }

//   document.getElementById("body").innerHTML = b;

//   //  var meals = document.querySelectorAll('.meal-layer');
//   //  console.log(meals);

// // //  for (var i = 0; i < meals.length; i++) {
// // //   meals[i].addEventListener('click', function (e) {
// // //     var clicked = e.target;
// // //     recipies=clicked.innerText;
// // //     getracipy(recipies)
// // //     // var racipy = clicked.innerText;
// // // //     console.log(racipy);
// //  });
//   }


// var datalist = [];

// function getCategories() {
//   var http = new XMLHttpRequest();
//   http.open('GET', 'https://www.themealdb.com/api/json/v1/1/categories.php');
//   http.send();

//   http.addEventListener('readystatechange', function () {
//     if (http.readyState == 4 && http.status == 200) {
//       datalist = JSON.parse(http.response).categories;
//       displayCategories();
//       displayrecipy();
//     }
//   });
// }

// function displayCategories() {
//   var b = '';

//   for (var i = 0; i < datalist.length; i++) {
//     b += `
//       <div class="col-md-3">
//         <div onclick="getMealDetails('${datalist[i].idCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
//           <img class="w-100" src="${datalist[i].strCategoryThumb}" alt="" srcset="">
//           <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
//             <h3 class="ctm">${datalist[i].strCategory}</h3>
//           </div>
//         </div>
//       </div>
//     `;
//   }

//   document.getElementById('body').innerHTML = b;

//   var meals = document.querySelectorAll('.meal-layer');

//   for (var i = 0; i < meals.length; i++) {
//     meals[i].addEventListener('click', function (e) {
//       var clicked = e.target;
//       var recipeCategory = clicked.innerText;
//       getRecipesByCategory(recipeCategory);
//     });
//   }
// }

// function getRecipesByCategory(category) {

//   console.log( category);
  
// }

// // Initial call to fetch and display categories
// getCategories();


// // var datalist3 = [];

// // function getracipy(recap) {
// //   var http3 = new XMLHttpRequest();
// //   http3.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?i=${recap}`);
// //   http3.send();

// //   http3.addEventListener('readystatechange', function () {
// //     if (http3.readyState == 4 && http3.status == 200) {
// //       datalist = JSON.parse(http3.response).categories;
// //       displayrecipy();
// //     }
// //   });
// // }


// // function displayrecipy() {
// //   var b = '';

// //   for (var i = 0; i < datalist3.length; i++) {
// //     b += `
// //       <div class="col-md-3">
// //         <div onclick="getMealDetails('${datalist[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
// //           <img class="w-100" src="${datalist[i].strMealThumb}" alt="" srcset="">
// //           <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
// //             <h3 class="ctm">${datalist[i].strMeal}</h3>
// //           </div>
// //         </div>
// //       </div>
// //     `;
// //   }

// //   document.getElementById('body').innerHTML = b;

// //   var meals = document.querySelectorAll('.meal-layer');

// //   for (var i = 0; i < meals.length; i++) {
// //     meals[i].addEventListener('click', function (e) {
// //       var clicked = e.target;
// //       var recipeCategory = clicked.innerText;
// //       getRecipesByCategory(recipeCategory);
// //     });
// //   }
// // }

// // function getRecipesByCategory(category) {

// //   console.log( category);
  
// // }
// var datalist3 = [];

// function getracipy(recap) {
//   var http3 = new XMLHttpRequest();
//   http3.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?i=${recap}`);
// //   http3.send();

// //   http3.addEventListener('readystatechange', function () {
// //     if (http3.readyState == 4 && http3.status == 200) {
// //       datalist3 = JSON.parse(http3.response).meals; // Use 'meals' instead of 'categories'
// //       displayrecipy();
// //     }
// //   });
// // }

// // function displayrecipy() {
// //   var b = '';

// //   for (var i = 0; i < datalist3.length; i++) {
// //     b += `
// //       <div class="col-md-3">
// //         <div onclick="getMealDetails('${datalist3[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
// //           <img class="w-100" src="${datalist3[i].strMealThumb}" alt="" srcset="">
// //           <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
// //             <h3 class="ctm">${datalist3[i].strMeal}</h3>
// //           </div>
// //         </div>
// //       </div>
// //     `;
// //   }

// //   document.getElementById('body').innerHTML = b;

// //   var meals = document.querySelectorAll('.meal-layer');

// //   for (var i = 0; i < meals.length; i++) {
// //     meals[i].addEventListener('click', function (e) {
// //       var clicked = e.target;
// //       var recipeId = clicked.innerText;
// //       getRecipesByCategory(recipeId);
// //     });
// //   }
// // }

// // function getRecipesByCategory(recipeId) {
// //   console.log('Fetching recipe details for ID:', recipeId);
// //   // Implement the logic to fetch and display detailed information for the selected recipe.
// // }



// //   var datalist2 = [];
// // var http2 = new XMLHttpRequest();
// // http2.open('get', `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`);
// // http2.send();

// // http2.addEventListener('readystatechange', function () {
// //   if (http2.readyState == 4 && http2.status == 200) {
// //     datalist2 = JSON.parse(http2.response);
// //     display2();
// //   }
// // });

// // function display2() {
// //   var c = ``;

// //   for (var i = 0; i < datalist2.meals.length; i++) {
// //     c += `
// //       <div class="col-md-3">
// //         <div onclick="getMealDetails('${datalist2.meals[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
// //           <img class="w-100" src="${datalist2.meals[i].strMealThumb}" alt="" srcset="">
// //           <div class="meal-layer position-absolute d-flex align-items-center text-black p-2 " id="mama">
// //             <h3>${datalist2.meals[i].strMeal}</h3>  
// //           </div>
// //         </div>
// //       </div>
// //     `;
// //   }

// //   document.getElementById("body2").innerHTML = c;
// // }
