/*
const remainingTime = () => {
  const timesNow = new Date();
  const remainingTime = futureTime.getTime() - timesNow.getTime();
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let remainingHours = Math.floor(remainingTime / oneHour);
  let remainingMinutes = Math.floor((remainingTime % oneHour) / oneMinute);
  let remainingSeconds = Math.floor((remainingTime % oneMinute) / 1000);

  remainingHours = remainingHours < 10 ? `0${remainingHours}` : remainingHours;
  remainingMinutes =
    remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;
  remainingSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

  console.log(`${remainingHours}:${remainingMinutes}:${remainingSeconds}`);

  if (remainingTime < 1000) {
    clearInterval(countDown);
    console.log(`Time Up`);
  }

  return `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
};

let countDown = setInterval(remainingTime, 1000);

remainingTime();
*/

/*
// process.env.TZ = "Africa/Lagos";
// const timeNow = new Date().toLocaleString("en-US", {
//   timeZone: "Africa/Lagos",
// });

// console.log(new Date().getFullYear());

// const currentTime = new Date().getTime();
// console.log(currentTime);

// const timeNow = new Date();
// console.log(timeNow);
// const year = timeNow.getFullYear();
// const month = timeNow.getMonth() + 1;
// const day = timeNow.getDate();
// const hours = timeNow.getHours();
// const minutes = timeNow.getMinutes();
// const seconds = timeNow.getSeconds();
// console.log(month);

// const futureTime = new Date();
// let hr = 16;
// let mins = 50;
// hr = hr < 10 ? `0${hr}` : hr;
// mins = mins < 10 ? `0${mins}` : mins;
// const futureTime = new Date(
//   `${year}/${month}/${day}-${hr}:${mins}:${seconds}:10`
// );
// NOT USED
// futureTime.setFullYear(year);
// futureTime.setMonth(month);
// futureTime.setDate(day);
// futureTime.setHours(7);
// futureTime.setMinutes(45);
// futureTime.setSeconds(seconds);
// futureTime.setHours(7);
// NOT USED END

// console.log("time now " + timeNow);
// console.log("future time " + futureTime);
// console.log("time now " + timeNow.getTime());
// console.log("future time " + futureTime.getTime());

// timeNow.getTime() > futureTime.getTime()
//   ? console.log("time up")
//   : console.log("count down active");

// const remainingTime = futureTime.getTime() - timeNow.getTime();
// console.log(remainingTime);

// const oneHour = 60 * 60 * 1000;
// const oneMinute = 60 * 1000;

// const addedHour = oneHour * 3;
// const addedMinute = oneMinute * 30;

// const futureTime = new Date().getTime() + addedHour + addedMinute;
// console.log(futureTime);

// const remainingTime = futureTime - currentTime;
// console.log(remainingTime);

// const remainingHours = Math.floor(remainingTime / oneHour);
// console.log(remainingHours);

// const remainingMinutes = Math.floor((remainingTime % oneHour) / oneMinute);
// console.log(remainingMinutes);
*/
