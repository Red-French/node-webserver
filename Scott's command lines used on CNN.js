// CNN did not use JQuery, so Scott copied the jQuery code (can get this from the jQuery site, and then in devTools>sources>snippets, he right-clicked to create a new snippet, pasted in the jQuery code in the window to the right of the snippet window and named the new snippet 'JQuery.'  He then right-clicked on 'JQuery' and chose 'Run' to run jQuery in the CNN site.)

$.fn.jquery  // this command showed the current version of JQuery that was running
"3.0.0-beta1"
$('.cd__headline')  // Scott found the class using the element finder
$('.banner-text')
$('.banner-text').text()
"Border wall scaled; hurdles remain"  // this was a headline on CNN.com
$($('.cd__headline')[1]).text()
"1 dead in Manhattan crane collapse"  // this was a headline on CNN.com
var el = $($('.cd__headline')[1])  // Scott wrapped the jQuery in jQuery and then set it to a variable to use
el
[<h3 class=​"cd__headline" data-analytics=​"Top%20stories_list-xs_article_">​…​</h3>​]
el.find('a')
el.find('a').attr('href')
$('.banner-text').parent()
$('.banner-text').closest('a')
$('.banner-text').closest('a').attr.('href')
$('.banner-text').closest('a').attr('href')
