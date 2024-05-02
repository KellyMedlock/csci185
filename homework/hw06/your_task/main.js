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
    const url = `${baseURL}?type=artist&q=${term}&limit=1`;
    const artistCard = document.querySelector("#artist");
    const responseArtist = await fetch(url);
    const artistSearch = await responseArtist.json();
    console.log(artistSearch[0]);
    
    if (artistSearch.length <= 0) {
        artistCard.insertAdjacentHTML('beforeend', '<section class="artist-card"><div><h2>No artist found that matches your search criteria</h2></div></section>');
    } else {
        artistCard.innerHTML = `<section class="artist-card" id="${artistSearch[0].id}">
                                    <div>
                                        <img src="${artistSearch[0].image_url}" alt="Image of ${artistSearch[0].name}">
                                        <h2>${artistSearch[0].name}</h2>
                                        <div class="footer">
                                            <a href="${artistSearch[0].spotify_url}" target="_blank">
                                                view on spotify
                                            </a>
                                        </div>
                                    </div>
                                </section>`
    }
    
    // console.log(`
    //     get tracks from spotify based on the search term
    //     "${term}" and load them into the #tracks section 
    //     of the DOM...`);
}

async function getAlbums (term) {
    const url = `${baseURL}?type=album&q=${term}&limit=10`;
    const albumCard = document.querySelector("#albums");
    const responseAlbum = await fetch(url);
    const albumSearch = await responseAlbum.json();
    console.log(albumSearch);

    if (albumSearch.length <= 0) {
        albumCard.insertAdjacentHTML('beforeend', '<section class="album-card"><p>No albums found that match your search criteria</p></section>');
    } else {
        for (let i = 0; i < 10; i++) {
            albumCard.insertAdjacentHTML("beforeend", `<section class="album-card" id="${albumSearch[i].id}">
                                        <div>
                                            <img src="${albumSearch[i].image_url}" alt="album cover for ${albumSearch[i].name}">
                                            <h2>${albumSearch[i].name}</h2>
                                            <div class="footer">
                                                <a href="${albumSearch[i].spotify_url}" target="_blank">
                                                    view of spotify
                                                </a>
                                            </div>
                                        </div>
                                </section>`)
        };
    }

    // console.log(`
    //     get albums from spotify based on the search term
    //     "${term}" and load them into the #albums section 
    //     of the DOM...`);
}

async function getTracks (term) {
    const url = `${baseURL}?type=track&q=${term}&limit=5`;
    const trackCard = document.querySelector("#tracks");
    const responseTrack = await fetch(url);
    const trackSearch = await responseTrack.json();
    console.log(trackSearch);

    if (trackSearch.length <= 0) {
        trackCard.insertAdjacentHTML('beforeend', '<section class="track-item preview"><p>No tracks found that match your search criteria</p></section');
    } else {
        for (let i = 0; i < 5; i++) {
            trackCard.insertAdjacentHTML("beforeend", `<section class="track-item preview" onclick="listenTrack('${trackSearch[i].id}')" aria-label="play track button">
                                                            <img src="${trackSearch[i].album.image_url}" alt="album cover for ${trackSearch[i].name}">
                                                            <i class="fas play-track fa-play" aria-hidden="true"></i>
                                                            <div>
                                                                <h2>${trackSearch[i].name}</h2>
                                                                <p>
                                                                    ${trackSearch[i].artist.name}
                                                                </p>
                                                            </div>
                                                    </section>`)
        };
    }

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

async function listenTrack(trackId) {
    const nowPlaying = document.querySelector("#artist-section h1");
    const iFrame = document.querySelector("#artist");

    nowPlaying.innerHTML = "Now Playing";
    iFrame.innerHTML = `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0" 
    width="100%" 
    height="352" 
    frameBorder="0" 
    allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"></iframe>`;
}