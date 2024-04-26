const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    clearSearch();
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getArtist (term) {
    const artistCard = document.querySelector("#artist");
    const responseArtist = await fetch(`https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}`);
    const artistSearch = await responseArtist.json();
    // console.log(artistSearch[0]);
    
    artistCard.innerHTML = `<section class="artist-card" id="${artistSearch[0].id}">
                                <div>
                                    <img src="${artistSearch[0].image_url}">
                                    <h2>${artistSearch[0].name}</h2>
                                    <div class="footer">
                                        <a href="${artistSearch[0].spotify_url}" target="_blank">
                                            view on spotify
                                        </a>
                                    </div>
                                </div>
                            </section>`
    
    // console.log(`
    //     get tracks from spotify based on the search term
    //     "${term}" and load them into the #tracks section 
    //     of the DOM...`);
}

async function getAlbums (term) {
    const albumCard = document.querySelector("#albums");
    const responseAlbum = await fetch(`https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`);
    const albumSearch = await responseAlbum.json();
    // console.log(albumSearch);

    for (let i = 0; i < 10; i++) {
        albumCard.insertAdjacentHTML("beforeend", `<section class="album-card" id="${albumSearch[i].id}">
                                    <div>
                                        <img src="${albumSearch[i].image_url}">
                                        <h2>${albumSearch[i].name}</h2>
                                        <div class="footer">
                                            <a href="${albumSearch[i].spotify_url}" target="_blank">
                                                view of spotify
                                            </a>
                                        </div>
                                    </div>
                               </section>`)
    };

    // console.log(`
    //     get albums from spotify based on the search term
    //     "${term}" and load them into the #albums section 
    //     of the DOM...`);
}

async function getTracks (term) {
    const trackCard = document.querySelector("#tracks");
    const responseTrack = await fetch(`https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}`);
    const trackSearch = await responseTrack.json();
    // console.log(trackSearch);

    for (let i = 0; i < 5; i++) {
        trackCard.insertAdjacentHTML("beforeend", `<section class="track-item preview">
                                                        <img src="${trackSearch[i].album.image_url}">
                                                        <i class="fas play-track fa-play" aria-hidden="true"></i>
                                                        <div>
                                                            <h2>${trackSearch[i].name}</h2>
                                                            <p>
                                                                ${trackSearch[i].artist.name}
                                                            </p>
                                                        </div>
                                                   </section>`)
    };

    // console.log(`
    //     get artists from spotify based on the search term
    //     "${term}" and load the first artist into the #artist section 
    //     of the DOM...`);
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}

function clearSearch() {
    const artistCard = document.querySelector("#artist");
    const albumCard = document.querySelector("#albums");
    const trackCard = document.querySelector("#tracks");
    
    artistCard.innerHTML = "";
    albumCard.innerHTML = "";
    trackCard.innerHTML = "";
}