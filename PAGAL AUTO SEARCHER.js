// ==UserScript==
// @name         PAGAL AUTO SEARCHER
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Auto Search
// @author       PAGAL AUTO SEARCHER
// @match        *://www.bing.com/*
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function() {
    'use strict';

    // Function to fetch a dynamic word list from the API
    function fetchWordList() {
        return fetch('https://random-word-api.herokuapp.com/word?number=70')
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                console.error('Error fetching word list:', error);
                alert('An error occurred while fetching the word list. Using default words.');
                return [];
            });
    }

    // Function to set a timer to fetch a new word list every 2-5 days
    function setWordListRefreshTimer() {
        var refreshInterval = getRandomDelay(2, 5) * 24 * 60 * 60 * 1000; // Convert days to milliseconds
        setInterval(function() {
            fetchAndStoreWordList();
        }, refreshInterval);
    }

    // Function to fetch a new word list and store it
    function fetchAndStoreWordList() {
        fetchWordList().then(words => {
            GM_setValue('wordList', words);
        });
    }

    // Initialize the word list on script load
    var terms = GM_getValue('wordList', []);

    // If the word list is not available or empty, use the default array
    if (!terms.length) {
        terms = [
            "motorcycle","circulate","reservoir","spit","lamp","desk","bell","leaf","blue","pink","fire","cool","hand",
            "python", "jumble", "easy", "difficult", "answer",  "xylophoneface","food","game","love","hike","kite","dark","soft","wind","sand","surf","wine","ruby","mint",
            "oak","palm","fish","bird","lily","deep","bold","true","rich","kind","fast","slow","moon","wind",
            "star","cold","warm","mild","wild","loud","deep","dark","blue","pink","gray","sing","read","draw",
            "walk","talk","cook","moon","star","time","hope","wish","love","cool","warm","deep","fast","soft",
            "rain","fire","snow","surf","sand","rose","lily","palm","gold","book","moon","star","fish","bird",
            "frog","tree","cool","warm","deep","bold","true","rich","gold","moon","star","time","love","cool"

        ];
    }

    // Set the word list refresh timer
    setWordListRefreshTimer();

    var index = GM_getValue('bookmarkletIndex', 0);
    var searchInput = document.getElementById('sb_form_q');
    var form = searchInput && searchInput.closest('form');

    function getRandomDelay(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Generate a random position within the document body
    var randomX = Math.floor(Math.random() * document.body.scrollWidth);
    var randomY = Math.floor(Math.random() * Math.max(document.body.scrollHeight, window.innerHeight));

    function typeSearchTerm(term, callback) {
        searchInput.focus();
        searchInput.value = ''; // Clear the previous search term
        var i = 0;
        var interval = setInterval(function() {
            searchInput.value += term[i];
            i++;
            if (i === term.length) {
                clearInterval(interval);
                callback();
            }
        }, getRandomDelay(10, 15)); // Adjust the delay between keystrokes as needed
    }

    function triggerSearch() {
        // Scroll the browser to the random position
        if (searchInput && form) {
            window.scrollTo(randomX, randomY);

            typeSearchTerm(terms[index], function() {
                form.submit();
                GM_setValue('bookmarkletIndex', (index + 1) % terms.length);
            });
        }
    }

    setTimeout(triggerSearch, getRandomDelay(100, 150)); // Timings minimum and maximum
})();
