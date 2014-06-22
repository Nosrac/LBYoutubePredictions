function run()
{
    // No argument passed, just open the website:
    LaunchBar.openURL('http://www.youtube.com/');
}

function runWithString(argument)
{
    LaunchBar.openURL('https://www.youtube.com/results?search_query=' + encodeURIComponent(argument));
}
