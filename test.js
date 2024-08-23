document.addEventListener('DOMContentLoaded', function() {
  var link1 = document.getElementById('1');
  var targetElement = document.getElementById('start');

  link1.addEventListener('click', function(event) {
    event.preventDefault();
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var link1 = document.getElementById('2');
  var targetElement = document.getElementById('join');

  link1.addEventListener('click', function(event) {
    event.preventDefault();
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var link1 = document.getElementById('3');
  var targetElement = document.getElementById('paid');

  link1.addEventListener('click', function(event) {
    event.preventDefault();
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});