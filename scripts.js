//// FUNCTION CHE RICHIEDE I DATI DA UN DATABASE ESTERNO
fetch('https://restcountries.com/v3.1/region/europe')
.then(resp => resp.json())
.then(res => displayCountries(res));


// DISPLAY DEI PAESI NEL DIV CON ID CONTAINER NELL'HTML
function displayCountries(countries) {
const container = document.getElementById('container');
console.log(countries);

// CREO UNA CARD PER OGNI PAESE
    for (let country of countries) {
        const card = document.createElement('div');
        card.classList.add('card');

        // NAME
        const name = document.createElement('p');
        name.classList.add('name');
        name.innerText = country.name.official;
        card.appendChild(name);

        // CAPITALE
        const capital = document.createElement('p');
        capital.classList.add('capital');
        capital.innerText = 'Capital : ' + country.capital;
        card.appendChild(capital);

        // BANDIERA
        const flag = document.createElement('img');
        flag.classList.add('flag');
        flag.src = country.flags.png;
        card.appendChild(flag);

        // CREO UN DIV CONTENENTE LE INFO
        const bottomCard = document.createElement('div');
        bottomCard.classList.add('bottom-card');
        card.appendChild(bottomCard);

        // CONTINENTE
        const continent = document.createElement('p');
        continent.classList.add('continent');
        continent.innerText = 'Continent : ' + country.continents;
        bottomCard.appendChild(continent);

        // REGIONE DEL CONTINENTE
        const subregion = document.createElement('p');
        subregion.classList.add('subregion');
        subregion.innerText = 'Subregion : ' + country.subregion;
        bottomCard.appendChild(subregion);

        // CONFINI
        const borders = document.createElement('p');
        borders.innerText = 'Borders : ' + country.borders;
        bottomCard.appendChild(borders);

        // LINGUE
        let language = "Language: ";
    for (const property in country.languages) {
      const length = Object.keys(country.languages).length;
      if (length === 1) {
        language = language + country.languages[property];
      } else {
        language = language + country.languages[property] + ", ";
      }
    }
    const languages = document.createElement("p");
    languages.innerHTML = language;
    bottomCard.appendChild(languages);


       // POPOLAZIONE
        const population = document.createElement('p');
        population.innerText = 'Population : ' + country.population;
        bottomCard.appendChild(population);

       container.appendChild(card);

}
}

