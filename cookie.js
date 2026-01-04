//  Function to get the value of a cookie by its name
function getCookie(name) {
  
  /*  Try to find a match using RegExp in the cookie string
  Look inside the cookie string and try to find a part 
   that looks like name=value, and grab just the value part.
   */

  const match = document.cookie.match(new RegExp(name + '=([^;]+)'));
  // If there's a match, return the value; otherwise return null
  return match ? match[1] : null;
}

/*  Function to set a cookie with a name, value, and number of days until it expires
- are called parameters because they are the named variables the function expects to receive.
*/

function setCookie(name, value, days) {
  // Calculate the expiration date by adding days to the current time
  const expires = new Date(Date.now() + days * 864e5).toUTCString(); // 864e5 = 86400000 ms = 1 day
  // Create the cookie string with name=value; expires; path
  document.cookie = name + '=' + value + '; expires=' + expires + '; path=/';
}
function acceptCookies () {
    setCookie('cookiesAccepted', 'true', 30);

  // Hide the cookie banner from the page

  document.getElementById('cookie-banner').style.display = 'none';}
    Window.onload = function () {
      if (!getCookie('cookiesAccepted')) {
    // If it hasn't been accepted yet, show the cookie banner
    document.getElementById('cookie-banner').style.display = 'block';
  }
};
