var searchField = $("#search-field").ghostHunter({
            results   : "#results",
            rss         : "/rss",
            onKeyUp         : true,
            displaySearchInfo   : false,
            result_template : "<section class=\"articles\"><header class=\"post-header\"><a href='{{link}}'><h2 class=\"post-title\">{{title}}</h2></a><br /><time>{{pubDate}}</time></header></section><hr />"
        });
        
function clearResults() {
    searchField.clear();
}