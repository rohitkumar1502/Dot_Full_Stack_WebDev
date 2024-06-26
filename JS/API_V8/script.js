console.log("JS started");

const requistUrl = 'https://api.github.com/users/rohitkumar1502';

const XMLReq = new XMLHttpRequest();
XMLReq.open("GET", requistUrl);
XMLReq.onreadystatechange = function(){  // arrow function not works here because XMLHttpRequest are to old for use as fech a api
  console.log(XMLReq.readyState);
  if (XMLReq.readyState === 4) {
    console.log(XMLReq.readyState);
    const data = JSON.parse(this.responseText);
    document.querySelector('#container').innerHTML = `
    <img src="${data.avatar_url}" height="200px" width = "200px">
    <h3>${data.name}</h3>
    
    `

}
}
XMLReq.send();