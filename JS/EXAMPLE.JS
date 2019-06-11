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

document.write(greeting + " ");


var days = ["Moon Day", "Tyres Day", "Wodins Day", "Thors Day", "How's your weekend?", "Wash Day", "Sun Day"];
var day = new Date().getUTCDay() - 1;
    
function getMessageOfTheDay() {
  switch (day) {
    case 0:
      return  days[day] + '';
      break;
    case 1:
      return days[day] + '';
      break;
    case 2:
      return days[day] + '';
      break;
    case 3:
      return days[day] + '';
      break;
    case 4:
      return days[day] + '';
      break;
    case 5:
      return days[day] + '';
      break;
    case 6:
      return days[day] + '';
      break;
    default:
      return days[day] + '';
  }
}
document.write(getMessageOfTheDay() + " ");
