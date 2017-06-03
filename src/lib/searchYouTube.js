var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    // contentType: 'application/json',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      videoEmbeddable: 'true',
      type: 'video'
    },
    success: function(response) {
      // console.log(response);
      callback(response.items);
    },
    error: function(e) {
      console.log('error', e);
    }
  });
};

window.searchYouTube = searchYouTube;
