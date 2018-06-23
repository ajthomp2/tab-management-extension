const init = () => {
  console.log('in new tab');
  const activeUrlsElmt = document.getElementById('activeUrls');

  chrome.storage.sync.get(null, tabs => {
    console.log(tabs);
    _.each(tabs, tab => {
      const tabElmt = document.createElement('DIV');
      const tabTxtElmt = document.createTextNode(tab.title);
      tabElmt.appendChild(tabTxtElmt);
      activeUrlsElmt.appendChild(tabElmt);
    });
  });
};

$(document).ready(() => {
  init();
});
