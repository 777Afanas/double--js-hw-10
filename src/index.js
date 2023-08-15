import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_JJWPSVYeymspnNURrwJNrEoFQ9xEFTfnXeyuAKVCVICBuPkGG95Ew7XOSCY83E6e";




    // axios.get('https://api.thecatapi.com/v1/images/search')
    // .then(response => { console.log(response) });

// //     При загрузке страницы должен выполняться HTTP-запрос за коллекцией пород.
// Для этого необходимо выполнить GET - запрос на ресурс https://api.thecatapi.com/v1/breeds,
// возвращающий массив объектов.При успешном запросе, необходимо наполнить select.breed - select опциями так,
//     чтобы value опции содержал id породы, а в интерфейсе пользователю отображалось название породы.

// // Напиши функцию fetchBreeds() которая делает HTTP-запрос и возвращает промис с массивом пород -
//  результатом запроса.Вынеси её в файл cat - api.js и сделай именованный экспорт.

// const fetchBreedsSelect = document.querySelector(".breed-select");

// fetchBreedsSelect.addEventListener('focus', onSerch);

// function onSerch(e) {

//     e.preventDefault();
//     console.dir(e.type);
// }

// axios.get('https://api.thecatapi.com/v1/breeds')
//     .then(resp => {
//         if (!resp.ok) {
//             throw new Error(resp.statusText);
//         }
//         return console.log(resp)
//     });
        

    fetch('https://api.thecatapi.com/v1/breeds')
    .then(resp => {
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        console.log(resp);
        return resp.json()
    }).then( data => console.log(data))
        .catch(err => console.error(err))

