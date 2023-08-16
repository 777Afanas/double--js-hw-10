// import axios from "axios";

// axios.defaults.headers.common["x-api-key"] = "live_JJWPSVYeymspnNURrwJNrEoFQ9xEFTfnXeyuAKVCVICBuPkGG95Ew7XOSCY83E6e";




    // axios.get('https://api.thecatapi.com/v1/images/search')
    // .then(response => { console.log(response) });

// //     При загрузке страницы должен выполняться HTTP-запрос за коллекцией пород.
// Для этого необходимо выполнить GET - запрос на ресурс https://api.thecatapi.com/v1/breeds,
// возвращающий массив объектов.При успешном запросе, необходимо наполнить select.breed - select опциями так,
//     чтобы value опции содержал id породы, а в интерфейсе пользователю отображалось название породы.

// // Напиши функцию fetchBreeds() которая делает HTTP-запрос и возвращает промис с массивом пород -
//  результатом запроса.Вынеси её в файл cat - api.js и сделай именованный экспорт.

const fetchBreedsSelect = document.querySelector(".breed-select");
catInfo = document.querySelector(".cat-info");

// const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_JJWPSVYeymspnNURrwJNrEoFQ9xEFTfnXeyuAKVCVICBuPkGG95Ew7XOSCY83E6e"
let storedBreeds = []

//  fetch(url,{headers: {
//       'x-api-key': api_key
//     }})
//  .then((response) => {
//    return response.json();
//  })
// .then((data) => {
//    console.log(data);
//    //filter to only include those with an `image` object
//    data = data.filter(img=> img.image?.url!=null)
   
//     storedBreeds = data;
    
//     console.log(storedBreeds);
   
//    for (let i = 0; i < storedBreeds.length; i++) {
//     const breed = storedBreeds[i];
//     let option = document.createElement('option');
     
       
//     //    console.log(breed);
//     //    console.log(option);
//      //skip any breeds that don't have an image
//      if(!breed.image)continue
     
//     //use the current array index
//     option.value = i;
//        option.innerHTML = `${breed.name}`; 
//        console.log(option.innerHTML);
//     //    document.getElementById(".breed-select").appendChild(option);
//       fetchBreedsSelect.appendChild(option);
    
//     }
//     console.log(fetchBreedsSelect);
//    //show the first breed by default
//    showBreedImage(0)
// })
// .catch(function(error) {
//    console.log(error);
// });


// https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}
// image: {id: '0XYvRd7oD', width: 1204, height: 1445, url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg'}
// name: "Abyssinian"
// description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals."
// temperament: "Active, Energetic, Independent, Intelligent, Gentle"


const url = `https://api.thecatapi.com/v1/images/search?breed_ids=aege`;
// const api_key = "DEMO_API_KEY"

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
    let imagesData = data;
    console.log(imagesData);

    imagesData.map(function (imageData) {     
      const { url, breeds } = imageData;      
      
     console.log(imageData);
    let image = document.createElement('img');
    //use the url from the image object
        image.src = `${url}`;      
        // image.width = 20px;
    console.log(image.src);
            
      
      let nameCat = document.createElement('h2');   
      nameCat.textContent = `${breeds[0].name}`;
      let descriptionCat = document.createElement('p');  
      descriptionCat.textContent = `${imageData.breeds[0].description}`;
      let temperamentCat = document.createElement('p');  
      temperamentCat.textContent = `${imageData.breeds[0].temperament}`;

    //   console.log(nameCat);
    //   console.log(descriptionCat);
    //    console.log(temperamentCat);
    //   temperamentCat.classList.add("temp");
                  
      catInfo.append(image, nameCat, descriptionCat, temperamentCat);
       console.log(catInfo); 
    });
})
.catch(function(error) {
   console.log(error);
});


// function showBreedImage(index)
// { 
//   document.getElementById("breed_image").src= storedBreeds[index].image.url;
  
//   document.getElementById("breed_json").textContent= storedBreeds[index].temperament
  
  
//   document.getElementById("wiki_link").href= storedBreeds[index].wikipedia_url
//   document.getElementById("wiki_link").innerHTML= storedBreeds[index].wikipedia_url
// }

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