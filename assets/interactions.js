document.addEventListener('DOMContentLoaded', function(loadPageListeners) {
  today = new Date();
  year = today.getFullYear();
  document.getElementById('year').innerHTML = year;

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

  document.getElementById('download-resume').addEventListener('click', function(trackDownload) {
    gtag('event', 'download', {
        'event_category': 'interaction',
        'event_label': 'resume',
    });
  });

  sectionItems = document.getElementsByClassName('section-menu-item');
  for (var i = 0; i < sectionItems.length; i++) {
    sectionItems[i].addEventListener('click', function(expandProject) {
      clickedItemId = event.target.id;
      document.getElementById(clickedItemId).classList.toggle('active');

      for (var e = 0; e < sectionItems.length; e++) {
        if ( sectionItems[e].classList.contains('active') && ( sectionItems[e].id != clickedItemId) ) {
          sectionItems[e].classList.toggle('active');
        };
      };

       if ( clickedItemId.includes('mob-') ) {
        clickedItemId = event.target.id.slice(4);
      } else {
        clickedItemId = event.target.id;
      };

      document.getElementById('section-' + clickedItemId).classList.toggle('active');
      projects = document.getElementsByClassName('project');
      for (var a = 0; a < projects.length; a++) {
        if ( projects[a].classList.contains('active') && ( projects[a].id != ('section-' + clickedItemId) ) ) {
          projects[a].classList.toggle('active');
        };
      };
    });

    sectionItems[i].addEventListener('click', function(trackOpen) {
      projectId = event.target.id;
      gtag('event', 'open', {
        'event_category': 'interaction',
        'event_label': projectId,
      });
      console.log('clicked' + projectId);
    });
  }
});
