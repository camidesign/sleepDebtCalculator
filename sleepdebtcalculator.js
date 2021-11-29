const getSleepHours = day => {
    switch (day){
      case 'Monday':
        return 6
        break;
      case 'Tuesday':
        return 8
        break;
      case 'Wednesday':
        return 6
        break;
      case 'Thursday':
        return 5
        break;
      case 'Friday':
        return 8
        break;
      case 'Saturday':
        return 6
        break;
      case 'Sunday':
        return 7
        break;
      default:
        return 'Error!';
    }
  };
  
  const getActualSleepHours = () => 
  getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
      if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!');
      } else if (actualSleepHours > idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more hours of sleep than needed this week!');
      } else if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' less hours of sleep than should have this week. You should get some rest!');
      } else {
        console.log('Error! Something went wrong, check your code.')
     }
  };
  
  calculateSleepDebt();
  