import getRefs from "./get-refs";

const refs = getRefs();

export function rendersBreeds(arr) { 
      const markup = arr
      .map(({ url, breeds }) => {
        return `<div class="cat-info">
            <img src="${url}">
            <div class="content">
            <h2>${breeds[0].name}</h2>
            <p>${breeds[0].description}</p>
            <p><b>Temperament:</b> ${breeds[0].temperament}</p>
            </div>
          </div>`;
      })
      .join(' '); 
    
    console.log(markup);

    refs.catInfo.innerHTML = markup;      
    refs.loaderInfo.classList.add('is-hidden');      
  }   