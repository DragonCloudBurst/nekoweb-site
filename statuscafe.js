
document.writeln('<div id="statuscafe"><div id="statuscafe-username"></div><div id="statuscafe-content"></div></div>');
fetch("https://status.cafe/users/kumori_miskatonic/status.json")
  .then( r => r.json() )
  .then( r => {
    if (!r.content.length) {
      document.getElementById("statuscafe-content").innerHTML = "No status yet."
      return
    }
    document.getElementById("statuscafe-username").innerHTML = '<a href="https://status.cafe/users/kumori_miskatonic" target="_blank">' + r.author + '</a> ' + r.face + ' ' + r.timeAgo
    document.getElementById("statuscafe-content").innerHTML = r.content
  })