document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('button');
  var targetElement = document.getElementById('start');

  link.addEventListener('click', function() {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// test