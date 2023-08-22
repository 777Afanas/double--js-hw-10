export const fetchBreedsSelect = document.querySelector('.breed-select');

const catInfo = document.querySelector('.cat-info'); 



const api_key =
  'live_JJWPSVYeymspnNURrwJNrEoFQ9xEFTfnXeyuAKVCVICBuPkGG95Ew7XOSCY83E6e';


  // Коллекция пород
// При загрузке страницы должен выполняться HTTP-запрос за коллекцией пород.
// Для этого необходимо выполнить GET - запрос на ресурс https://api.thecatapi.com/v1/breeds,
// возвращающий массив объектов. При успешном запросе, необходимо наполнить select.breed - select 
// опциями так, чтобы value опции содержал id породы, а в интерфейсе пользователю отображалось 
// название породы. 
// Напиши функцию fetchBreeds() которая делает HTTP-запрос и возвращает промис с массивом 
// пород - результатом запроса. Вынеси её в файл cat - api.js и сделай именованный экспорт. 

export function fetchBreeds() {
  const url = `https://api.thecatapi.com/v1/breeds`;
  let storedBreeds = [];

  fetch(url, {
    headers: {
      'x-api-key': api_key,
    },
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      //filter to only include those with an `image` object
      data = data.filter(img => img.image?.url != null); 
      storedBreeds = data;
    //   console.log(storedBreeds);

      for (let i = 0; i < storedBreeds.length; i++) {
          const breed = storedBreeds[i];
          
        let option = document.createElement('option');
        //skip any breeds that don't have an image
        if (!breed.image) continue;
        //use the current array index
        //   option.value = i; 
          option.value = `${breed.id}`;i; 
          
          option.innerHTML = `${breed.name}`;
        //   console.log(option);

        //    document.getElementById(".breed-select").appendChild(option);
          fetchBreedsSelect.appendChild(option);
        //   console.log(fetchBreedsSelect);
        }
        // return fetchBreedsSelect.appendChild(option);

        // return console.log(fetchBreedsSelect);
    })
    .catch(function (error) {
      console.log(error);
    });
}

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
   const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${fetchBreedsSelect.value}`;

  fetch(url, {
    headers: {
      'x-api-key': api_key,
    },
  })
    .then(response => {
      return response.json();
    })
    .then(data => { catInfo.innerHTML = fetchBreedsSelect1(data)})
    .catch(function (error) {
      console.log(error);
    });
        
  function fetchBreedsSelect1(data) { 
      return data
      .map(({ url, breeds }) => {
        return `<div class="cat-info">
            <img src="${url}">
            <h2>"${breeds[0].name}"</h2>
            <p>"${breeds[0].description}"</p>
            <p>"${breeds[0].temperament}"</p>
          </div>`;
      })
      .join(' ');     
    
  }   
}
