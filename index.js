document.querySelectorAll('.tooltip').forEach(span => {
    span.addEventListener('mouseover', function(event) {
      const tooltip = document.getElementById('tooltip');
      const title = span.getAttribute('data-title');
      const message = span.getAttribute('data-message');
      tooltip.innerHTML = `<span class="title">${title}</span>${message}`;
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.pageX + 10}px`; 
      tooltip.style.top = `${event.pageY + 5}px`; 
    });
  
    span.addEventListener('mouseout', function() {
      const tooltip = document.getElementById('tooltip');
      tooltip.style.display = 'none';
    });
  });
  
  document.addEventListener('mousemove', function(event) {
    const tooltip = document.getElementById('tooltip');
    if (tooltip.style.display === 'block') {
      tooltip.style.left = `${event.pageX + 5}px`; 
      tooltip.style.top = `${event.pageY + 5}px`; 
    }
  });
  
  