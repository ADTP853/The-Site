var today = new Date();
var dayNow = today.getDay();
var day;

if (dayNow = monday) 
    {
    day = 'MOON DAY';
    }
else if (dayNow = tuesday) 
    {
    day = 'TYRES DAY';
    }
else if (dayNow = wednesday) 
    {
    day = 'WODINS DAY';
    }
else if (dayNow = thursday) 
    {
    day = 'THORS DAY';
    }
else if (dayNow = friday) 
    {
    day = 'FREYS DAY';
    }
else if (dayNow = saturday) 
    {
    day = 'WASH DAY';
    }
else if (dayNow = sunday) 
    {
    day = 'SUN DAY';
    }
document.write('<h3>' + day + '</h3>');;
