//On page load animation
  window.onload = (event) => {
    var nav = document.querySelector('nav');
    nav.classList.add('hidden');
    setTimeout(function() {
        var body = document.querySelector('body');
        body.classList.add('loaded');
    }, 1000);
    setTimeout(function() {
        nav.classList.remove('hidden');
    }, 1800);
    console.log('page is fully loaded');
  };