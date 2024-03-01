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
    <article class="tweet-box">
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
    </article>
  </section>
    `);
    return $tweet;
};

const renderTweets = function(tweets) {
  $tweetContainer.empty();

  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
   $tweetContainer.prepend($tweet);
  }
};

$("form").submit(function(event) {
  event.preventDefault()

  const $form = $(this);
  const tweet = $form.find("textarea[name=text]").val().trim();
  if (!tweet) {
    $(".error-message").text("❗❗You can't post about nothing❗❗").slideDown();
    return;
  }
  if (tweet.length > 140) {
    $(".error-message").text("❗❗Exceeded character limit of 140❗❗").slideDown();
    return;
  }


  const escape = $("<div>").text(tweet).html();
  $form.find("textarea[name=text]").val(escape);

  const data = $(this).serialize();
  
  
  $.ajax({
    url: "/tweets",
    method: "POST",
    data: data
  })
    .then(function(response) {
      $("form").trigger("reset");
      $("counter").text(140);
      loadTweets();
      
    })
    
  })

  const loadTweets = function() {
    $.ajax({
      url: "/tweets",
      method: "GET",
    })
      .then(function(response) {
        renderTweets(response);
      })
  }
  loadTweets()




})








