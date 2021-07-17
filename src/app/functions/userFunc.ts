
export function grabUser() {
    return JSON.parse(document.cookie);
}

export function clearCookies() {
    var cookies = document.cookie.split(";");
    
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

export function addCookie(user) {
    let jUser = JSON.stringify(user);
    document.cookie = jUser;
}
