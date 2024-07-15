// Code your solutions in this file


// Define the writeCards function
function writeCards(names, event) {
    // Create an empty array to hold the messages
    let messages = [];
  
    // Iterate through the input array
    for (let i = 0; i < names.length; i++) {
      // Build the thank you message
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      // Add the message to the messages array
      messages.push(message);
    }
  
    // Return the array of messages
    return messages;
  }
  
  // Test the function
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  // Expected output:
  // [
  //   "Thank you, Charlie, for the wonderful birthday gift!",
  //   "Thank you, Samip, for the wonderful birthday gift!",
  //   "Thank you, Ali, for the wonderful birthday gift!",
  // ]
  
// Define the countDown function
function countDown(number) {
    // Use a while loop to count down to zero
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Test the function
  countDown(10);
  // Expected output:
  // 10
  // 9
  // 8
  // 7
  // 6
  // 5
  // 4
  // 3
  // 2
  // 1
  // 0
  
