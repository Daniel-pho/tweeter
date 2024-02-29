/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]



const createTweetElement = function (tweetObject) {
    let $tweet = $(`
    <section class="tweet-container">

    <header class="tweet-author">
      <img src="${tweetObject.user.avatars}">
      <p>${tweetObject.user.name}</p>
      <p class="user-name">${tweetObject.user.handle}</p>
    </header>
    <article class="tweet">
      <p>${tweetObject.content.text}</p>
    </article>
    <footer class="user-actions">
      <p>${new Date(tweetObject.created_at).toLocaleString()}</p>
      <p class="user-icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
        </p>
    </footer>
  </section>
    `);
    return $tweet;
};

const renderTweets = function(tweets) {
  // loops through tweets
  tweets.forEach(tweet => {
    const $tweet = createTweetElement(tweet);
    return $(".tweet-container").append($tweet);
  })
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
};


renderTweets(data);

});