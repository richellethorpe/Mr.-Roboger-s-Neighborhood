# Language Selector
#### By Richelle Thorpe
#### Mister Roger's Neighborhood Game

## Technologies Used
- HTML
- CSS
- BOOTSTRAP
- JAVA SCRIPT
- MARKDOWN

## Description
This is an application that allows the user to recieve a unique response result based upon what information they enter into the submit field. 

## Secifications
Describe: userNumbersArray()

Test: "It should return an array with a 0 if the number 0 is entered" <br/>
Code: userNumbersArray(0);
Expected Output: 0

Test: "It should return an array [0, 'Beep!'] if the 1 is entered"
Code: userNumbersArray(1);
Expected Output: 0, 'Beep!'

Test: "It should return an array [0, 'Beep!', 'Boop!'] if the number 2 is entered"
Code: userNumbersArray(2);
Expected Output: 0, 'Beep!', 'Boop!'

Test: "It should return an array [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?'] if the number 3 is entered"
Code: userNumbersArray(3);
Expected Output: 0, 'Beep!', 'Boop!', 'Won't you be my neighbor?'

Test: "It should replace ANY number that contains 1 with 'Beep!'"
Code: userNumbersArray(10);
Expected Output: 0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!'"

Test: "It should replace ANY number that contains 2 with 'Boop!'"
Code: userNumbersArray(12);
Expected Output: 0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!'

Test: "It should replace ANY number that contains 3 with 'Won't you be my neighbor?'"
Code: userNumbersArray(13);
Expected Output: 0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?'

Test: "It should replace the number that contains 2 AND 3 with 'Won't you be my neighbor?'"
Code: userNumbersArray(23);
Expected Output: 0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!', 'Boop!', 'Boop!', 'Won't you be my neighbor?'


## Setup/Installation Requirements
- Clone this repository to your desktop.
- Navigate to the top level of the directory.
- Open index.html in your browser.

## Known bugs


## License information
Copyright 2022 Richelle Thorpe;
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Describe: wordSubstitute()

