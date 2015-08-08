#Project Miles

I named this project as Project Miles which states miles to go for full implementation of agile methodology task manager. 
This is developed using johnpapa angular style guide generator. 
Technology stack implies angularjs,nodejs,mockserver,bootstrap etc. 
This is a very simple project for beginners to verify with both agile scrum tool task runner along with latest trendy geek technology angularjs. 

You can download and modify it based on your requirement. Current scope is to add/edit/view/delete task to your mock json server which even calculates time that you spend on the task. Bootstrap rich UI makes you feel comfortable with good user experience.

#installation
Expecting nodejs, java pre installed in machine.
1.	Run npm install and bower install
2.	Npm install –g json-server ( change host(H) as 127.0.0.1 and port(p) 3001 in users/username/appdata/roaming/npm/node_modules/json-server/bin/index.js)
3.	Npm install –g protractor
4.	Npm install –g gulp
5.	Webdriver-manager update
6.	Webdriver-manager start
Gulp serve-dev to run the application. Prior to that open cmd and goto mockserver folder and run json-server db.json

#e2e Test cases
To run protractor, go to e2etests folder and open in command prompt. Hoping webdriver-manager start is already running in one cmd prompt instance. Now type “protractor conf.js”