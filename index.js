const API_URL = 'https://api.github.com/repos/brenik/street-fighter/contents/resources/api/fighters.json';
const SECURITY_HEADERS = {
    headers: {
        authorization: "token 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"
    }
};

fetch(API_URL, SECURITY_HEADERS);