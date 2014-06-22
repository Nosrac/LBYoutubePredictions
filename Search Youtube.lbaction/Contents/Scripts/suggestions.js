function runWithString(argument) {

    var result = HTTP.get('https://clients1.google.com/complete/search?client=youtube&q=' + encodeURIComponent(argument), 3);

    if (result === undefined) {
        LaunchBar.log('HTTP.getJSON() returned undefined');
        return [];
    }
    if (result.error !== undefined) {
        LaunchBar.log('Error in HTTP request: ' + result.error);
        return [];
    }

    var matches = result.data.match(/(\[.*\])/);

    if (! matches[1]) return [];

    matches = JSON.parse(matches[1]);

    if (! matches[1]) return [];

    var suggestions = matches[1].map(function(suggestion) {
        return {
            title: suggestion[0],
            icon: 'LoupeTemplate.pdf'
        };
    });

    return suggestions;
}
