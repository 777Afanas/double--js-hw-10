const fetchBreedsSelect = document.querySelector('.breed-select');
catInfo = document.querySelector('.cat-info');

const url = `https://api.thecatapi.com/v1/breeds`;
const api_key =
  'live_JJWPSVYeymspnNURrwJNrEoFQ9xEFTfnXeyuAKVCVICBuPkGG95Ew7XOSCY83E6e';

export function fetchBreeds() {
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
