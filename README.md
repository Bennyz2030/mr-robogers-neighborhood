# Mr.Roboger's Neighborhood 👾

## By Nicholas Benzinger
_____________________________

### Project Discription 📖
  _On this web page the user can enter any number and it will be returned as a string of all numbers contained within that numner plus some robot talk to replace the numbers 1, 2, and 3._
  _____________________________

### Technologies Used 🖥️

* _HTML_
* _JavaScript_
* _CSS_
* _JQuery_
* _Bootstrap_
_______________________________

### Installation Instructions 🖊️

* _Clone this repository to your desktop_
* _naviagte to the top level of the directory_
* _open index.html in your web browser_
* _Or, open in GitHub Pages [here](https://bennyz2030.github.io/mr-robogers-neighborhood/)_
________________________________

### Known Bugs 🐛

* _No known bugs._
* _If you should find any bugs open a pull request, or email me._
__________________________________

## License

[GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)
__________________________________

## Contact Information
nicholasbenzinger@gmail.com



## Description: roboTranslate(input)
>This function will take inputted numbers from the user and return a string with the number 1 replaced with "Beep!", the number 2 replaced with "Boop!", and the number 3 replaced with "Won't you be my neighbor?".

|                Test                |        Code      |     Expected Output     |
| ---------------------------------- | -----------------| ----------------------- |
| 1. "It should return an inputted   | roboTranslate(5); | "1", "2", "3", "4", "5" |
| number as a string containing the  |                  |                         |
| numbers full value."               |                  |                         |
| 2. "It should replace any occurence| roboTranslate(1); | "Beep!"                 |
| of the number 1 with "Beep!"."     |                  |                         |
| 3. "It should replace any occurence| roboTranslate(2); | "Boop!"                 |
| of the number 2 with "Boop!"."     |                  |                         |
| 4. "It should replace any occurence| roboTranslate(3);  | "Won't you be my        |
| of the number 3 with "Won't you    |                  | neighbor?"              |
| be my neighbor?"."                 |                  |                         |
| 5. "It should prioritize the number| roboTranslate(3);| "Won't you be my        |
| 3 overs the numbers 1 and 2."      |                  | neighbor?"              |
| 6. "It should prioritize the number| roboTranslate(2); | "Boop!"                 |
| 2 over the number 1."              |                  |                         |
| 7. "It should return the replaced  | roboTranslate(3);| "Won't you be my        |
| text as a string to the user."     |                  | neighbor?               |