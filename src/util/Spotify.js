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
    }
    
}

export default Spotify;