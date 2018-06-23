'use strict';

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.query({ currentWindow: true }, tabs => {
    const tabObj = _.reduce(
      tabs,
      (acc, tab) => {
        acc[tab.index] = {
          url: tab.url,
          title: tab.title,
          icon: tab.favIconUrl
        };
        return acc;
      },
      {}
    );
    chrome.storage.sync.set(tabObj, () => {});
  });
});
