var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18)
    {
    greeting = 'Evening!';
    }
else if(hourNow >= 12)
    {
    greeting = 'Afternoon!';
    }
else if(hourNow >= 0)
    {
    greeting = 'Morning!';
    }
else
    {
    greeting = 'Welcome!';
    }

document.write('<h3>' + greeting + '</h3>');

var today = new Date();
var dayNow = today.getDay();
var day;

if (dayNow = 0) 
    {
    day = 'How is your working week?';
    }
else if (dayNow = 1) 
    {
    day = 'How is your working week?';
    }
else if (dayNow = 2) 
    {
    day = 'How is your working week?';
    }
else if (dayNow = 3) 
    {
    day = 'How is your working week?';
    }
else if (dayNow = 4) 
    {
    day = 'How is your weekend?';
    }
else if (dayNow = 5) 
    {
    day = 'How is your weekend?';
    }
else if (dayNow = 6) 
    {
    day = 'How is your weekend?';
    }
document.write(day);