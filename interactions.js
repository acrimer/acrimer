document.addEventListener('DOMContentLoaded', function(loadPageListeners) {
  window.addEventListener('scroll', function(miniNav) {
    header = document.getElementById('header');
    spacer = document.getElementById('spacer');
    scrollPosition = window.scrollY;
    if (scrollPosition >= 130 && !(header.classList.contains('mini') )) {
      header.classList.toggle('mini');
      spacer.classList.toggle('hidden');
    }
    else if (scrollPosition < 130 && header.classList.contains('mini')) {
      header.classList.toggle('mini');
      spacer.classList.toggle('hidden');
    };
  });
  sectionItems = document.getElementsByClassName('section-menu-item');
  for (var i = 0; i < sectionItems.length; i++) {
    sectionItems[i].addEventListener('click', function(expandProject) {
      clickedItemId = event.target.id;
      for (var e = 0; e < sectionItems.length; e++) {
        if ( sectionItems[e].classList.contains('active') && ( sectionItems[e].id != clickedItemId) ) {
          sectionItems[e].classList.toggle('active');
        };
      };
      projects = document.getElementsByClassName('project');
      for (var a = 0; a < projects.length; a++) {
        if ( projects[a].classList.contains('active') && ( projects[a].id != ('section-' + clickedItemId) ) ) {
          projects[a].classList.toggle('active');
        };
      };
      clickedItem = document.getElementById(clickedItemId);
      clickedItem.classList.toggle('active');
      document.getElementById('section-' + clickedItemId).classList.toggle('active');
    });
  }
});
