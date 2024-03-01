/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const $tweetContainer = $(".tweet-container");
  





const createTweetElement = function (tweetObject) {
    let $tweet = $(`
    <section class="tweet-container">
    <link rel="stylesheet" href="/styles/tweet.css"/>
    <header class="tweet-author">
      <img src="${tweetObject.user.avatars}">
      <p>${tweetObject.user.name}</p>
      <p class="user-name">${tweetObject.user.handle}</p>
    </header>
    <article class="tweet">
      <p>${tweetObject.content.text}</p>
    </article>
    <footer class="user-actions">
      <p>${timeago.format(tweetObject.created_at)}</p>
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
  $(".tweet-container").empty();

  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
   $tweetContainer.prepend($tweet);
  }
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
};

$("form").submit(function(event) {
  event.preventDefault()
  console.log("hello from event")
  const data = $(this).serialize();
  
  $.ajax({
    url: "/tweets",
    method: "POST",
    data: data,
    success: function(response) {
      renderTweets(response)
    }
  })

})



const loadTweets = function() {
  $.ajax({
    url: "/tweets",
    method: "GET",
    data: "Json",
    success: function(response) {
      renderTweets(response);
    }
  })
}
loadTweets()


});

