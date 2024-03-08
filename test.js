document.addEventListener('DOMContentLoaded', function() {
  var link1 = document.getElementById('1');
  var targetElement = document.getElementById('start');

  link1.addEventListener('click', function(event) {
    event.preventDefault();
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

