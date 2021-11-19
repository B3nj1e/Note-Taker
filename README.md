## Note Taker
![license badge](https://img.shields.io/static/v1?label=License&message=MIT-Licencse&color=success)

## Table of Contents
* [GitHub](#GitHub)
* [Description](#description)
* [Installation Instructions](#installation-instructions)
* [Usage Instructions](#usage-instructions)
* [Contribution Guidelines](#contribution-guidelines)
* [Test](#test)
* [Questions](#questions)
* [License](#license)

## GitHub
My GitHub username is B3nj1e. 
Please click [here](https://github.com/B3nj1e) to access my GitHub profile and the associated repository [here](https://github.com/B3nj1e/Note-Taker).

## Description
An application that manages tasks. The applications allows you to add tasks to your list, and delete the task once it has been completed.  

User story:
```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```
Acceptance Criteria:
```md
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```


## Installation Instructions
To use the application, please download all associated files off the [GitHub repository](https://github.com/B3nj1e/Note-Taker). Ensure node.js is installed. In the terminal run `` npm i`` to install the dependencies, including inquirer and jest. Once the inquirer package has been installed, in the terminal type ``node server.js``. You can then add and delete tasks using the user interface in the web browser.  

## Usage Instructions
Please download the download the repository and follow the installation instructions above. Alternative, click [here](https://git.heroku.com/lit-sea-48526.git) to access application deployed on Heroku. 

## Contribution Guidelines
If you think you can improve this application, please feel free to make contributions. I will review these changes on GitHub prior to merging them to the main branch.

## Test
To quickly test the application, follow the installation instructions, then insert user data in the note title and note text fields, then click the save icon in the top right corner. Once clicked a new note should appear in the left side column, with a trash can on the right, to delete the note click the trash can.

## Questions
If you have any questions or would like to report an issue with the application, please contact me vie my email at blankemail@email.com(left blank for privacy concerns). Alternative contact me via my [GitHub account](https://github.com/B3nj1e). 

## License
If you require more information concerning the license, please click [here](https://choosealicense.com/licenses/).

---------------------

MIT License

Copyright (c) 2021 B3nj1e

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.