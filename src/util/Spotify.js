let userAccessToken;
const clientId = "77fc7856472146958e31498228e7f9b0";
const redirect = "http://localhost:3000/";

const Spotify = {

    getAccessToken() {
        if (userAccessToken) {
            return userAccessToken
        } 

        const userAccessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (userAccessTokenMatch && expiresInMatch) {
            userAccessToken = userAccessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1])
            window.setTimeout(() => userAccessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return userAccessToken;
        } else {
            const accessUrl = 'https://accounts.spotify.com/authorize?client_id='
            + clientId + '&response_type=token&scope=playlist-modify-public&redirect_uri='
            + redirect;
            window.location = accessUrl;
        }
    },

    search(query) {
        const accessToken = Spotify.getAccessToken();
        return fetch('https://api.spotify.com/v1/search?type=track&q=' + query, {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                song: track.name,
                artists: track.artist[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        });
        /* const getResults = async (query) => {
            try {
                const response = await fetch('https://api.spotify.com/v1/search?type=track&q=' + query,
                {headers: {Authorization: 'Bearer ' + accessToken}});
                if (response.ok) {
                    const jsonResponse = await response.json();
                    console.log(jsonResponse);
                    const tracksArray = jsonResponse.map(track => {track.id, track.name, 
                        track.artist[0].name, track.album.name, track.uri})
                    return tracksArray;
                }
            } catch (error) {
                console.log(error);
            }
            return; 
        }*/
    }
    
}

export default Spotify;