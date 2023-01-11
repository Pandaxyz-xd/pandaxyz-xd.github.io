(function(document) {
  var button = document.querySelector('.menu');
  var sidebar = document.querySelector('.sidebar');
  
  button.addEventListener('click', function(e) {
    sidebar.classList.toggle('show') 
  });
})(document);