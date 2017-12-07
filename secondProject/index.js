var sample = '[{"name":"Facebook","confidence":"100","version":"","icon":"Facebook.svg","website":"http://facebook.com","categories":[{"5":"Widgets"}]},{"name":"Google Analytics","confidence":"100","version":"UA","icon":"Google Analytics.svg","website":"http://google.com/analytics","categories":[{"10":"Analytics"}]},{"name":"Google Tag Manager","confidence":"100","version":"","icon":"Google Tag Manager.png","website":"http://www.google.com/tagmanager","categories":[{"42":"Tag Managers"}]},{"name":"Google Web Toolkit","confidence":"100","version":"","icon":"Google Web Toolkit.png","website":"http://developers.google.com/web-toolkit","categories":[{"18":"Web Frameworks"}]},{"name":"Nginx","confidence":"100","version":"1.12.2","icon":"Nginx.svg","website":"http://nginx.org/en","categories":[{"22":"Web Servers"}]},{"name":"PHP","confidence":"100","version":"","icon":"PHP.svg","website":"http://php.net","categories":[{"27":"Programming Languages"}]},{"name":"Twitter Emoji (Twemoji)","confidence":"100","version":"","icon":"default.svg","website":"http://twitter.github.io/twemoji/","categories":[{"25":"JavaScript Graphics"}]},{"name":"WordPress","confidence":"100","version":" 4.6.8","icon":"WordPress.svg","website":"http://wordpress.org","categories":[{"1":"CMS"},{"11":"Blogs"}]},{"name":"Yoast SEO","confidence":"100","version":"","icon":"Yoast SEO.png","website":"http://yoast.com","categories":[{"32":"Marketing Automation"}]},{"name":"Zendesk Chat","confidence":"100","version":"","icon":"Zendesk Chat.png","website":"http://zopim.com","categories":[{"52":"Live Chat"}]},{"name":"jQuery","confidence":"100","version":"","icon":"jQuery.svg","website":"http://jquery.com","categories":[{"12":"JavaScript Frameworks"}]},{"name":"Java","confidence":"0","version":"","icon":"Java.png","website":"http://java.com","categories":[{"27":"Programming Languages"}]}]';
var example = JSON.parse(sample);

//loop through each object in the JSON
for (i = 0; i < example.length; i++) {

function loggin(){
    var widgets = example[i]['categories'][0][5];
    var cms = example[i]['categories'][0][1];
    var analytics = example[i]['categories'][0][10];
    var tagManager = example[i]['categories'][0][42];
    var webFrameworks = example[i]['categories'][0][18];
    var webServers = example[i]['categories'][0][22];
    var programmingLang = example[i]['categories'][0][27];
    var JSGraphics = example[i]['categories'][0][25];
    var blogs = example[i]['categories'][0][11];
    var marketingAutomation = example[i]['categories'][0][32];
    var liveChat = example[i]['categories'][0][52];
    var JSFrameworks = example[i]['categories'][0][12];

    if (widgets || cms || analytics || tagManager || webFrameworks || webServers || programmingLang || JSGraphics || blogs || marketingAutomation || liveChat || JSFrameworks)
    {
      console.log(example[i]["name"]);
    }

    else {
      console.log("false");
    }
  }
  //Not display objects with too low of confidence, not reliable data
  if (example[i]['confidence'] > 50) {
  loggin();
  }

}
