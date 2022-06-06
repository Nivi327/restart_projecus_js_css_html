let search = document.getElementById('search');
let matchList = document.getElementById('match-list');


const searchStates = async searchText =>{
    const res = await fetch('../data/capitals.json');
    const cities = await res.json();

    let matches = cities.filter(city => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return city.name.match(regex) || city.state.match(regex)
    });

    if(searchText.length === 0){
        matches = [];
        matchList.innerHTML = '';
    }

    outputHTML(matches);
};

const outputHTML = matches => {
    if(matches.length > 0){
        const html = matches.map(match => {
            return `
            <div class="card card-body mb-1 mt-1 bg-secondary text-white">
                <h4>${match.name} <span class="text-info">${match.state}</span></h4>
                <small>Lat: ${match.lat} / Long: ${match.lon}</small>
            </div>
            `
        }).join('');
        

        matchList.innerHTML = html;
    }
}


search.addEventListener('input', ()=> searchStates(search.value));

