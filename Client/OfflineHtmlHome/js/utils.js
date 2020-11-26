_arabica.fetchParamFromUrl = function(param) {
    var url = window.location.search;
    var searchParams = new URLSearchParams(url);
    return searchParams.get(param);
}

_arabica.setTheme = function() {
    var themeMap = {
        "classic": "classic",
        "Assets": "Assets",
        "anime-blue": "anime-blue",
        "anime-pink": "anime-pink",
        "anime-lineage": "anime-lineage"
    };
    var default_theme = "Assets";
    _arabica.theme = themeMap[_arabica.fetchParamFromUrl("theme")] || default_theme;
    $(".container").addClass(_arabica.theme);
}