// import axios from "axios"; 
// axios.defaults.headers.common["x-api-key"] = "live_JJWPSVYeymspnNURrwJNrEoFQ9xEFTfnXeyuAKVCVICBuPkGG95Ew7XOSCY83E6e";
import { fetchBreeds } from "./js/cat-api";

    // axios.get('https://api.thecatapi.com/v1/images/search')
    // .then(response => { console.log(response) });

// Коллекция пород
// При загрузке страницы должен выполняться HTTP-запрос за коллекцией пород.
// Для этого необходимо выполнить GET - запрос на ресурс https://api.thecatapi.com/v1/breeds,
// возвращающий массив объектов. При успешном запросе, необходимо наполнить select.breed - select 
// опциями так, чтобы value опции содержал id породы, а в интерфейсе пользователю отображалось 
// название породы. 
// Напиши функцию fetchBreeds() которая делает HTTP-запрос и возвращает промис с массивом 
// пород - результатом запроса.Вынеси её в файл cat - api.js и сделай именованный экспорт.

window.addEventListener('load', fetchBreeds); 

// Информация о коте
// Когда пользователь выбирает опцию в селекте, необходимо выполнять запрос за полной информацией
// о коте на ресурс https://api.thecatapi.com/v1/images/search. Не забудь указать в этом запросе
// параметр строки запроса breed_ids с идентификатором породы.
// Напиши функцию fetchCatByBreed(breedId) которая ожидает идентификатор породы, делает HTTP-запрос
// и возвращает промис с данными о коте - результатом запроса.Вынеси её в файл cat - api.js
// и сделай именованный экспорт.
// Если запрос был успешный, под селектом, в блоке div.cat-info появляется изображение и развернутая
// информация о коте: название породы, описание и темперамент.

const fetchBreedsSelect = document.querySelector('.breed-select');
catInfo = document.querySelector('.cat-info');

// const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_JJWPSVYeymspnNURrwJNrEoFQ9xEFTfnXeyuAKVCVICBuPkGG95Ew7XOSCY83E6e"
// let storedBreeds = []

//  fetch(url,{headers: {
//       'x-api-key': api_key
//     }})
//  .then((response) => {
//    return response.json();
//  })
// .then((data) => {
//    //filter to only include those with an `image` object
//    data = data.filter(img=> img.image?.url!=null)
   
//     storedBreeds = data;
//     // console.log(storedBreeds);
   
//    for (let i = 0; i < storedBreeds.length; i++) {
//      const breed = storedBreeds[i];
//     let option = document.createElement('option');
//     //    console.log(breed);
//     //    console.log(option);
//      //skip any breeds that don't have an image
//      if(!breed.image)continue
     
//     //use the current array index
//     option.value = i;
//        option.innerHTML = `${breed.name}`;
//     //    document.getElementById(".breed-select").appendChild(option);
//       fetchBreedsSelect.appendChild(option);
//   }
//     // console.log(fetchBreedsSelect);
//    //show the first breed by default
//   //  showBreedImage(0)
// })
// .catch(function(error) {
//    console.log(error);
// });

// ==============================================
// ============================================================================
// ====================================================================================

// https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}
// image: {id: '0XYvRd7oD', width: 1204, height: 1445, url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg'}
// name: "Abyssinian"
// description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals."
// temperament: "Active, Energetic, Independent, Intelligent, Gentle"


fetchBreedsSelect.addEventListener("change", fetchCatByBreed);

// function fetchCatByBreed(breedId) {
// if (!isEpmty(catInfo)) {
//     catInfo.remove();
//   }
// }
 console.log(catInfo);
function fetchCatByBreed() {
  console.log(fetchBreedsSelect.value);

  console.log(catInfo);
  // if (!isEpmty(catInfo)) {
  //   catInfo.remove();
  // }

  // const url = `https://api.thecatapi.com/v1/images/search?breed_ids=aege`;
  // const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed.id}`;
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${fetchBreedsSelect.value}`;

  // console.log(url);
  // const api_key = "DEMO_API_KEY"

  fetch(url, {
    headers: {
      'x-api-key': api_key,
    },
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      let imagesData = data;
      // console.log(createMarkup(imagesData));
      // createMarkup(imagesData);

      catInfo.innerHTML = imagesData
        .map(
          ({ url, breeds }) => `<div class="cat-info">
          <img src="${url}">
          <h2>"${breeds[0].name}"</h2>
          <p>"${breeds[0].description}"</p>
          <p>"${breeds[0].temperament}"</p>
        </div>`
        )
        .join(' ');
    })
    .catch(function (error) {
      console.log(error);
    });

  // function createMarkup(arr) {
    
  //   return arr
  //       .map(
  //         ({ url, breeds }) => `<div class="cat-info">
  //           <img src="${url}">
  //           <h2>"${breeds[0].name}"</h2>
  //           <p>"${imagesData.breeds[0].description}"</p>
  //           <p>"${imagesData.breeds[0].temperament}"</p>
  //         </div>`
  //       )
  //       .join(' ')
  //   );
  // }

  // .then((data) => {
  //   let imagesData = data;
  //   // console.log(imagesData);

  //   imagesData.map(function (imageData) {
  //     const { url, breeds } = imageData;

  //     // console.log(imageData);
  //     let image = document.createElement('img');
  //     //use the url from the image object
  //     image.src = `${url}`;
  //     // image.width = 20px;
  //     console.log(image.src);

  //     // `<div class="cat-info">
  //     //   <img src="${url}">
  //     //   <h2>"${breeds[0].name}"</h2>
  //     //   <p>"${imageData.breeds[0].description}"</p>
  //     //   <p>"${imageData.breeds[0].temperament}"</p>
  //     // </div>`;
  //     let nameCat = document.createElement('h2');
  //     nameCat.textContent = `${breeds[0].name}`;
  //     let descriptionCat = document.createElement('p');
  //     descriptionCat.textContent = `${imageData.breeds[0].description}`;
  //     let temperamentCat = document.createElement('p');
  //     temperamentCat.textContent = `${imageData.breeds[0].temperament}`;
  //     // console.log(nameCat);
  //     // console.log(descriptionCat);
  //     // console.log(temperamentCat);
  //     catInfo.append(image, nameCat, descriptionCat, temperamentCat);
  //     console.log(catInfo);
  //   });
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  // .finally(() => {
  //   // if (fetchBreedsSelect.value) {

  //   // }
  //   catInfo.remove();
  // } );
}

// function createMarkup(arr) {
//   console.log(arr);

//   return console.log(
//     arr
//       .map(
//         ({ url, breeds }) => `<div class="cat-info">
//           <img src="${url}">
//           <h2>"${breeds[0].name}"</h2>
//           <p>"${imagesData.breeds[0].description}"</p>
//           <p>"${imagesData.breeds[0].temperament}"</p>
//         </div>`
//       )
//       .join(' ')
//   );
// }

// console.log(catInfo);
// const url = `https://api.thecatapi.com/v1/images/search?breed_ids=aege`;
// const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed.id}`;
// const api_key = "DEMO_API_KEY"

//  fetch(url,{headers: {
//       'x-api-key': api_key
//     }})
//  .then((response) => {
//    return response.json();
//  })
// .then((data) => {
//     let imagesData = data;
//     console.log(imagesData);

//     imagesData.map(function (imageData) {     
//       const { url, breeds } = imageData;      
      
//      console.log(imageData);
//     let image = document.createElement('img');
//     //use the url from the image object
//         image.src = `${url}`;      
//         // image.width = 20px;
//     console.log(image.src);
            
      
//       let nameCat = document.createElement('h2');   
//       nameCat.textContent = `${breeds[0].name}`;
//       let descriptionCat = document.createElement('p');  
//       descriptionCat.textContent = `${imageData.breeds[0].description}`;
//       let temperamentCat = document.createElement('p');  
//       temperamentCat.textContent = `${imageData.breeds[0].temperament}`;

//       console.log(nameCat);
//       console.log(descriptionCat);
//        console.log(temperamentCat);
//       temperamentCat.classList.add("temp");
                  
//       catInfo.append(image, nameCat, descriptionCat, temperamentCat);       
//     });
// })
// .catch(function(error) {
//    console.log(error);
// });




// const fetchBreedsSelect = document.querySelector(".breed-select");

// console.dir(document);

// let selectedFile = fetchBreedsSelect.options;
//     console.dir(selectedFile);
// fetchBreedsSelect.addEventListener('change', onSerch);

// function onSerch(e) {
//     let selectedFile = fetchBreedsSelect.options;
//     console.dir(selectedFile);
    
//     console.dir(e.type);
// }

// axios.get('https://api.thecatapi.com/v1/breeds')
//     .then(resp => {
//         if (!resp.ok) {
//             throw new Error(resp.statusText);
//         }
//         return console.log(resp)
//     });
        

// fetch('https://api.thecatapi.com/v1/breeds')
//         // fetch('https://api.thecatapi.com/v1/images/search?api_key=live_JJWPSVYeymspnNURrwJNrEoFQ9xEFTfnXeyuAKVCVICBuPkGG95Ew7XOSCY83E6e')
//     .then(resp => {
//         if (!resp.ok) {
//             throw new Error(resp.statusText);
//         }
//         console.log(resp);
//         return resp.json()
//     }).then(data => {
//         // return data;
//         console.log(data)
//     })
//         .catch(err => console.error(err))

// let selectedFile = fetchBreedsSelect.options;
// console.dir(selectedFile);
// selectedFile = data;
// console.dir(selectedFile);