import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';
import getRefs from './js/get-refs';
import { rendersBreeds } from './js/renderMarkup';

const refs = getRefs();
refs.errorData.classList.add('is-hidden'); 
refs.loaderInfo.classList.add('is-hidden');

window.addEventListener('load', onfetchBreeds);
refs.breedsSelect.addEventListener('change', onfetchCatByBreed);

function onfetchBreeds() {
  refs.loaderInfo.classList.remove('is-hidden');
  refs.breedsSelect.classList.add('is-hidden');

  fetchBreeds()
    .then(data => {
      //filter to only include those with an `image` object
      storedBreeds = data.filter(img => img.image?.url != null);
      // storedBreeds = data;

      for (let i = 0; i < storedBreeds.length; i++) {
        const breed = storedBreeds[i];

        let option = document.createElement('option');
        //skip any breeds that don't have an image
        if (!breed.image) continue;
        //use the current array index
        //   option.value = i;
        option.value = `${breed.id}`;
        i;
        option.innerHTML = `${breed.name}`;

        refs.breedsSelect.appendChild(option);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  
  refs.loaderInfo.classList.add('is-hidden');
  refs.breedsSelect.classList.remove('is-hidden');   
}


function onfetchCatByBreed() {
  refs.loaderInfo.classList.remove('is-hidden');
  refs.catInfo.classList.add('is-hidden');
  refs.catInfo.innerHTML = ' ';

  fetchCatByBreed()
    .then(data => {
      rendersBreeds(data);
    })
    .catch(function (error) {
      console.log(error);
    });
   
}  



// const fetchBreedsSelect = document.querySelector('.breed-select');
// catInfo = document.querySelector('.cat-info');

// const url = `https://api.thecatapi.com/v1/breeds`;
// const api_key = "live_JJWPSVYeymspnNURrwJNrEoFQ9xEFTfnXeyuAKVCVICBuPkGG95Ew7XOSCY83E6e"
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

// function fetchCatByBreed() {

//   // const url = `https://api.thecatapi.com/v1/images/search?breed_ids=aege`;
//   // const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed.id}`;
//   const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${fetchBreedsSelect.value}`;

//   // console.log(url);
//   // const api_key = "DEMO_API_KEY"

//   fetch(url, {
//     headers: {
//       'x-api-key': api_key,
//     },
//   })
//     .then(response => {
//       return response.json();
//     })
//     .then(data => { catInfo.innerHTML = fetchBreedsSelect1(data)})
//     .catch(function (error) {
//       console.log(error);
//     });

//   function fetchBreedsSelect1(data) {
//     console.log(data);
//     return data
//       .map(({ url, breeds }) => {
//         return `<div class="cat-info">
//             <img src="${url}">
//             <h2>"${breeds[0].name}"</h2>
//             <p>"${breeds[0].description}"</p>
//             <p>"${breeds[0].temperament}"</p>
//           </div>`;
//       })
//       .join(' ');

//   }
// }

// .then(data => {

//   //  catInfo.innerHTML = imagesData
//   // console.log(markup);
//   markup = data
//     .map(({ url, breeds }) => `<div class="cat-info">
//       <img src="${url}">
//       <h2>"${breeds[0].name}"</h2>
//       <p>"${breeds[0].description}"</p>
//       <p>"${breeds[0].temperament}"</p>
//     </div>`
//     )
//     .join(' ');
//   console.log(markup);
//    catInfo.innerHTML = markup;
// })
// .catch(function (error) {
//   console.log(error);
// });

// function createMarkup(arr) {
//   const markup = arr.map(item => `<div class="cat-info">
//           <img src="${url}">
//           <h2>"${breeds[0].name}"</h2>
//           <p>"${imagesData.breeds[0].description}"</p>
//           <p>"${imagesData.breeds[0].temperament}"</p>
//         </div>`).join(' ');
//   catInfo.innerHTML = markup;
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
