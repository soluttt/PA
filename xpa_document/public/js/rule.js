 // 判断浏览器距离并添加fixed 
  var fixedDom = document.getElementById('fixed');
  window.addEventListener('scroll', winScroll);

  function winScroll(e) {
    var top = getElementViewTop(fixedDom);
    // top < 20 ? fixedDom.classList.add("fixed") : fixedDom.classList.remove("fixed");
    if (top < 20 ) {
      fixedDom.classList.add("fixed");
    }else if( top >= 20){
      fixedDom.classList.remove("fixed");
    }
  }

  function getElementViewTop(element) {　　　　
    var actualTop = element.offsetTop,
      elementScrollTop = document.body.scrollTop;
    return actualTop - elementScrollTop;　　
  }