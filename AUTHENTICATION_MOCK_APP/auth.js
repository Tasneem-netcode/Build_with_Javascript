//Cookie Helper Functions
function setCookie(name, value , days){
    let date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    let expires = "expires="+ date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

//get cookie
function getCookie(name) {
  let decodedCookie = decodeURIComponent(document.cookie); // "authToken=123abc; theme=dark"
  let ca = decodedCookie.split(';'); // ["authToken=123abc", " theme=dark"]
  name = name + "="; // "authToken="

  for(let c of ca){
    while (c.charAt(0) === ' ') c = c.substring(1); // remove spaces
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return "";
}

//delete cookie
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

