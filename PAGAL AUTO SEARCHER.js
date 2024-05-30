// ==UserScript==
// @name         Bing AuTO search
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Perform Bing searches automatically with a typing effect and random words, clearing the search box after each search.
// @author       PAGAL - JUST FOR EDUSCATIONAL PURPOSE
// @match        *://www.bing.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // List of 1000 words
    const words = [
      "Abandon", "Benevolent", "Culture", "Diverse", "Eloquent", "Fathom", "Generous", "Harmony", "Innovate", "Jubilant", "Keen", "Luminous", "Mystique", "Nurture", "Oasis", "Pinnacle", "Quaint", "Resilient", "Serendipity", "Tranquil", "Ubiquitous", "Vibrant", "Whimsical", "Xenial", "Yearn", "Zenith", "Affable", "Bliss", "Clarity", "Delight", "Empathy", "Flourish", "Gratitude", "Hope", "Integrity", "Joy", "Kindle", "Legacy", "Marvel", "Noble", "Optimism", "Prosper", "Quest", "Radiant", "Serenity", "Thrive", "Unity", "Vivid", "Wonder", "Xenodochial", "Yield", "Zest", "Amity", "Brilliance", "Cherish", "Dream", "Euphoria", "Fortitude", "Gleam", "Harvest", "Illuminate", "Jovial", "Kismet", "Liberty", "Mirth", "Nurture", "Oracle", "Plethora", "Quirk", "Revel", "Solace", "Treasure", "Unveil", "Vista", "Whirl", "Xeric", "Yonder", "Zeal", "Acclaim", "Bountiful", "Candid", "Diligent", "Ethereal", "Fervent", "Graceful", "Honest", "Inspire", "Just", "Kinetic", "Laudable", "Majestic", "Novel", "Overture", "Profound", "Quintessential", "Robust", "Stellar", "Tactile", "Unfettered", "Venerable", "Witty", "Xylophonic", "Yearning", "Zephyr", "Articulate", "Boundless", "Compassion", "Dedicated", "Enigmatic", "Faithful", "Gallant", "Heroic", "Ideal", "Jocular", "Knightly", "Learned", "Meticulous", "Noteworthy", "Opulent", "Pristine", "Quixotic", "Resourceful", "Sagacious", "Tenacious", "Undaunted", "Valiant", "Wise", "Xenophile", "Yielding", "Zealous", "Astute", "Bounteous", "Cognizant", "Decisive", "Effervescent", "Fruitful", "Gregarious", "Hearty", "Inventive", "Judicious", "Kindhearted", "Logical", "Momentous", "Nurturing", "Observant", "Plentiful", "Quirky", "Reliable", "Sincere", "Thoughtful", "Unassuming", "Vigilant", "Wholesome", "Xenodochy", "Youthful", "Zany", "Appreciative", "Brave", "Considerate", "Determined", "Endearing", "Flexible", "Genuine", "Honorable", "Imaginative", "Joyful", "Knowledgeable", "Loyal", "Mindful", "Nimble", "Original", "Persistent", "Quaint", "Receptive", "Sophisticated", "Tangible", "Understanding", "Versatile", "Warm", "Exuberant", "Yummy", "Zestful", "Adaptable", "Bright", "Courageous", "Devoted", "Earnest", "Favorable", "Glowing", "Heartfelt", "Intuitive", "Jovial", "Kind", "Lively", "Meaningful", "Nifty", "Optimal", "Pleasant", "Quiet", "Refined", "Spirited", "Talented", "Unique", "Valuable", "Welcoming", "Expressive", "Youthful", "Zippy", "Agile", "Breezy", "Creative", "Dynamic", "Engaging", "Friendly", "Grateful", "Hopeful", "Insightful", "Jaunty", "Keen", "Lighthearted", "Motivated", "Notable", "Outgoing", "Positive", "Quick", "Respectful", "Steady", "Trustworthy", "Upbeat", "Vital", "Willing", "Exciting", "Youthful", "Zesty", "Alert", "Balanced", "Clever", "Dutiful", "Energetic", "Fun", "Gracious", "Humble", "Innovative", "Jolly", "Knowledgeable", "Likeable", "Merry", "Neighborly", "Open", "Proactive", "Quality", "Relaxed", "Smart", "Tidy", "Upstanding", "Vibrant", "Warmhearted", "Enthusiastic", "Young", "Zealot", "Amicable", "Bold", "Capable", "Dazzling", "Effective", "Festive", "Gentle", "Helpful", "Impeccable", "Joyous", "Kindred", "Laudatory", "Magnificent", "Noted", "Outstanding", "Praiseworthy", "Quintessential", "Reassuring", "Stupendous", "Tremendous", "Unrivaled", "Vigorous", "Wonderful", "Exemplary", "Yielding", "Zippy", "Adventurous", "Blessed", "Confident", "Dependable", "Enlightened", "Fulfilled", "Gifted", "Honored", "Impressive", "Jubilant", "Kaleidoscopic", "Legendary", "Masterful", "Notable", "Optimistic", "Powerful", "Quirky", "Remarkable", "Successful", "Triumphant", "Unbeatable", "Victorious", "Wondrous", "Extraordinary", "Yummy", "Zappy", "Accomplished", "Brilliant", "Committed", "Diligent", "Empowered", "Fortunate", "Generous", "Heroic", "Influential", "Joyful", "Kindly", "Luminous", "Memorable", "Noble", "Outstanding", "Proactive", "Qualified", "Respected", "Skillful", "Talented", "Unmatched", "Valued", "Wise", "Exceptional", "Youthful", "Zany", "Achiever", "Bright", "Capable", "Dedicated", "Eminent", "Favorable", "Gallant", "Honorable", "Innovative", "Jovial", "Keen", "Laudable", "Mighty", "Noteworthy", "Opulent", "Pioneering", "Quick-witted", "Resourceful", "Savvy", "Tactful", "Unstoppable", "Venerable", "Witty", "Experienced", "Youthful", "Zestful", "Ambitious", "Buoyant", "Courteous", "Determined", "Enthusiastic", "Fruitful", "Genuine", "Heartwarming", "Intelligent", "Jubilant", "Knowledgeable", "Loyal", "Magnanimous", "Nimble", "Outgoing", "Philanthropic", "Quaint", "Resolute", "Sophisticated", "Thoughtful", "Unflappable", "Vibrant", "Welcoming", "Exuberant", "Youthful", "Zealous", "Assertive", "Benevolent", "Charismatic", "Dedicated", "Energetic", "Friendly", "Gracious", "Humorous", "Inspiring", "Jovial", "Kind-hearted", "Lively", "Motivating", "Nurturing", "Optimistic", "Passionate", "Quirky", "Reliable", "Supportive", "Trustworthy", "Understanding", "Vivacious", "Warm", "Exciting", "Youthful", "Zippy", "Admirable", "Bright", "Caring", "Determined", "Eager", "Faithful", "Generous", "Happy", "Inquisitive", "Joyous", "Kind", "Loving", "Mindful", "Noble", "Open-minded", "Persistent", "Quaint", "Respectful", "Strong", "Thoughtful", "Unique", "Valiant", "Wise", "Enthusiastic", "Youthful", "Zesty", "Accomplished", "Brave", "Compassionate", "Diligent", "Empathetic", "Focused", "Grateful", "Honest", "Innovative", "Jubilant", "Knowledgeable", "Loyal", "Motivated", "Nurturing", "Optimistic", "Practical", "Quirky", "Resilient", "Supportive", "Talented", "Unwavering", "Versatile", "Witty", "Exemplary", "Youthful", "Zany"
    ];

    // Function to get a random word from the list
    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    // Function to type out each character with a delay
    function typeSearchTerm(searchTerm) {
        const searchBox = document.getElementById('sb_form_q');
        if (searchBox) {
            searchBox.value = ''; // Clear the search box before typing
            let i = 0;
            const typingDelay = 500; // Delay in milliseconds between keystrokes
            const interval = setInterval(() => {
                if (i < searchTerm.length) {
                    searchBox.value += searchTerm.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                    document.getElementById('sb_form').submit(); // Submit the search form
                }
            }, typingDelay);
        }
    }

    // Function to perform the search with typing effect
    function performSearch() {
        const searchTerm = getRandomWord();
        typeSearchTerm(searchTerm);
    }

    // Start the search with a random delay
    setTimeout(performSearch, Math.floor(Math.random() * (9000 - 8000 + 1)) + 8000);
})();
