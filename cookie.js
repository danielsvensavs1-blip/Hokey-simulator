function setcookie (name, value, days)  {
  const expires = new Date(Date.now() + days * 864e5).toUTCString(); // 864e5 = 86400000 ms = 1 day
  // Pasakam cik ilgi šis cepums darbosies, un uztaisam viņu.//
document.cookie = name + '=' + value + '; expires=' + expires + '; path=/'; 
} 
