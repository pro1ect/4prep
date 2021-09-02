for ( let i of document.querySelectorAll(".numbers_os") ) {

    let numberTop = i.getBoundingClientRect().top,
        start = +i.innerHTML,
        end = +i.dataset.max;
  
    window.addEventListener('scroll', function onScroll() {
      if(window.pageYOffset > numberTop - window.innerHeight / 1) {
        this.removeEventListener('scroll', onScroll);
        let interval = this.setInterval(function() {
          i.innerHTML = ++start;
          if(start == end) {
            clearInterval(interval);
          }
      }, 12);
      }
    });
  }
        
