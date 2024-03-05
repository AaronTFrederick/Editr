document.addEventListener('DOMContentLoaded', function() {
  var link1 = document.getElementById('1');
  var targetElement = document.getElementById('start');

  link1.addEventListener('click', function() {
    event.preventDefault();
    var href = this.getAttribute('href');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

