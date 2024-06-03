const API_URL = 'https://api.github.com/repos/brenik/street-fighter/contents/resources/api/fighters.json';
const SECURITY_HEADERS = {
    headers: {
        authorization: "token %you token%"
    }
};

fetch(API_URL, SECURITY_HEADERS);