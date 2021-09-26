var events = [ //idk why the dates are scuffed but the months are glitched and I can't find the bug so months are 1 month behind
//this should pull from events database
  {'Date': new Date(2021, 8, 30), 'Title': 'Get Out the Button to Vote!', 'Link': 'event1.html'},
  {'Date': new Date(2021, 5, 17), 'Title': 'Skill Building Community Workshop', 'Link': 'event2.html'},
  {'Date': new Date(2021, 9, 2), 'Title': 'Underrepresented Communities in Art Gala', 'Link': 'event3.html'},
  {'Date': new Date(2021, 10, 15), 'Title': 'Climate Change Protest', 'Link': 'event4.html'},
];
var settings = {};
var element = document.getElementById('calendar');
calendar(element, events, settings);
