'use strict';

// Open stackoverflow search in same tab when input is entered
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    var prefix = 'https://'
    var postfix = '/search?q='
    var seURL = 'www.stackoverflow.com'
    //TODO: Add support to change seURL for different SE sites.
    
    var finalURL = prefix + seURL + postfix + encodeURIComponent(text);
    
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.update(tab.id, {url: finalURL});
    });  
});

// Suggest specific questions as text is being typed.
chrome.omnibox.onInputChanged.addListener(
  function(query, suggestFn) {
    // TODO: Use StackOverflow api to get list of questions and sort them based on relevance.
  }
)