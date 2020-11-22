let APIURL = ''

switch (window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        APIURL = 'http://localhost:3000'
        break
    case 'https://companionpathapp.herokuapp.com':
        APIURL = 'https://companionpath.herokuapp.com'
}

export default APIURL;
