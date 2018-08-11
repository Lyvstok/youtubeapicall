function renderResults(response){
  const resultsHtml = response.items.map(function(item){
    return `<div>
    <img src="${item.snippet.thumbnails.default.url}">
      <h3><a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">${item.snippet.title}</a></h3>
      
    </div>`
  })
  $(".js-search-results").empty().html(resultsHtml);
}
$('.js-search-form').on('submit',function(event){
    event.preventDefault();
    const userInput = $(".js-query").val();
    $.ajax({
      url: "https://www.googleapis.com/youtube/v3/search",
      data: {
        part: "snippet",
        key: "AIzaSyDr-S1-snpkMK0PkYgwU5yDCpOK9rltlVc",
        type: "video",
        q: userInput,
      },
      success: renderResults,
    })
});
