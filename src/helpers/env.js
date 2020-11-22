let APIURL = ''

switch (window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        APIURL = 'http://localhost:3000'
        break
    default:
        APIURL = 'https://companionpathserver.herokuapp.com'
}

export default APIURL;
