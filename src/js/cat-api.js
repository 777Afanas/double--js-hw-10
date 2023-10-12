import axios  from "axios"; 
import getRefs from "./get-refs";


axios.defaults.headers.common["x-api-key"] = `live_JJWPSVYeymspnNURrwJNrEoFQ9xEFTfnXeyuAKVCVICBuPkGG95Ew7XOSCY83E6e`;

const refs = getRefs(); 
// const api_key =
//   'live_JJWPSVYeymspnNURrwJNrEoFQ9xEFTfnXeyuAKVCVICBuPkGG95Ew7XOSCY83E6e';


  // Коллекция пород
// При загрузке страницы должен выполняться HTTP-запрос за коллекцией пород.
// Для этого необходимо выполнить GET - запрос на ресурс https://api.thecatapi.com/v1/breeds,
// возвращающий массив объектов. При успешном запросе, необходимо наполнить select.breed - select 
// опциями так, чтобы value опции содержал id породы, а в интерфейсе пользователю отображалось 
// название породы. 
// Напиши функцию fetchBreeds() которая делает HTTP-запрос и возвращает промис с массивом 
// пород - результатом запроса. Вынеси её в файл cat - api.js и сделай именованный экспорт. 

export function fetchBreeds() {   
  // const url = `https://api.thecatapi.com/v1/breeds`;
  // let storedBreeds = [];

  return axios({
    url: `https://api.thecatapi.com/v1/breeds`,
    // headers: {
    //   'x-api-key': `live_JJWPSVYeymspnNURrwJNrEoFQ9xEFTfnXeyuAKVCVICBuPkGG95Ew7XOSCY83E6e`,
    // },
  });   
}


// export function fetchBreeds() {   
//   const url = `https://api.thecatapi.com/v1/breeds`;
//   let storedBreeds = [];

//   return fetch(url, {
//     headers: {
//       'x-api-key': api_key,
//     },
//   })
//     .then(response => {
//       return response.json();       
//     });         
// }

// Информация о коте
// Когда пользователь выбирает опцию в селекте, необходимо выполнять запрос за полной информацией
// о коте на ресурс https://api.thecatapi.com/v1/images/search. Не забудь указать в этом запросе
// параметр строки запроса breed_ids с идентификатором породы.
// Напиши функцию fetchCatByBreed(breedId) которая ожидает идентификатор породы, делает HTTP-запрос
// и возвращает промис с данными о коте - результатом запроса. Вынеси её в файл cat - api.js
// и сделай именованный экспорт.
// Если запрос был успешный, под селектом, в блоке div.cat-info появляется изображение и развернутая
// информация о коте: название породы, описание и темперамент. 

export function fetchCatByBreed() {   
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${refs.breedsSelect.value}`;
  //  const url = `https://api.thecatapi.com/v1/images/sear`;

  return axios(url);
       
}


// export function fetchCatByBreed() {   
//   const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${refs.breedsSelect.value}`;

//   return fetch(url, {
//     headers: {
//       'x-api-key': api_key,
//     },
//   })
//     .then(response => {
//       return response.json();
//     });       
// }
