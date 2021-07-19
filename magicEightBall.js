let userName = '';
const userQuestion = 'What will happen tomorrow?';
const randomNumber = Math.ceil(Math.random()*7);
let eightBall = '';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello');

userName ? console.log(`${userName} asked: ${userQuestion}`) : console.log(`The user asked: ${userQuestion}`);

switch (randomNumber){
  case 0:
   eightBall = 'It is certain';
   break;
  case 1:
   eightBall = 'It is decidedly so';
   break;
  case 2:
   eightBall = 'Reply hazy try again';
   break;
  case 3:
   eightBall = 'Cannot predict now';
   break;
  case 4:
   eightBall = 'Do not count on it';
   break;
  case 5:
   eightBall = 'My sources say no';
   break;
  case 6:
   eightBall = 'Outlook not so good';
   break;
  case 7:
   eightBall = 'Signs point to yes';
   break;
  default:
   break;
}

console.log(`The eight ball answered: ${eightBall}`);
