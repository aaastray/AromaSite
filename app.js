const anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {

  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    const blocktId = this.getAttribute('href').substr(1);
    const targetElement = document.getElementById(blocktId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });

}