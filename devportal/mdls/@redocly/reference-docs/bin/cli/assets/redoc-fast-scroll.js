(function() {
  try {
    var menu = document.querySelector('[role=menuitem].active:not([type="group"])');
    if (menu) {
      if (menu.scrollIntoViewIfNeeded) {
        menu.scrollIntoViewIfNeeded();
      } else {
        menu.parentElement.scrollIntoView();
      }
    }

    var hash = (window.location.hash || '').substring(1);
    var path = window.location.pathname.substring(1);
    if (path[path.length - 1] === '/')
      path = path.substring(0, path.length - 1);

    var el =
      document.querySelector('[data-section-id="' + hash + '"]') ||
      document.querySelector('[data-section-id="' + path + '/' + hash + '"]');

    if (el) el.scrollIntoView();
  } catch (e) {}
})();
