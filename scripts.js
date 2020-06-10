let siteImage = document.querySelector('img');
siteImage.onclick = function() {
  let siteSrc = siteImage.getAttribute('src');
  if(siteSrc === '../assets/drawing-1.jpg') {
    siteImage.setAttribute ('src','../assets/drawing-2.jpg')
  } else {
    siteImage.setAttribute ('src','../assets/drawing-1.jpg')
  }
}