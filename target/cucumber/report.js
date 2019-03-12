$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('sendemail\sendemail.feature');
formatter.feature({
  "line": 1,
  "name": "sendemail",
  "description": "",
  "id": "sendemail",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "User is on his inbox homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to gmail signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User signs in to gmail as \"assignmentB260614548\" and pwd \"ecse428ab\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be on inbox homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "sendemail.goToGmail()"
});
formatter.result({
  "duration": 15181911916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignmentB260614548",
      "offset": 27
    },
    {
      "val": "ecse428ab",
      "offset": 58
    }
  ],
  "location": "sendemail.signInGmail(String,String)"
});
formatter.result({
  "duration": 5957910650,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.verifySignIn()"
});
formatter.result({
  "duration": 11226332412,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Send email without image attachement",
  "description": "",
  "id": "sendemail;send-email-without-image-attachement;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click on compose",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter recipient as \"assignmentb260614548@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter title as \"Hello\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter message as \"Hi from selenium/cucumber without image\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click send",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the email should be sent",
  "keyword": "Then "
});
formatter.match({
  "location": "sendemail.clickCompose()"
});
formatter.result({
  "duration": 645672669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignmentb260614548@gmail.com",
      "offset": 22
    }
  ],
  "location": "sendemail.enterRecipient(String)"
});
formatter.result({
  "duration": 7793932435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 18
    }
  ],
  "location": "sendemail.enterTitle(String)"
});
formatter.result({
  "duration": 593361943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hi from selenium/cucumber without image",
      "offset": 20
    }
  ],
  "location": "sendemail.enterMessage(String)"
});
formatter.result({
  "duration": 2656210937,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.clickSend()"
});
formatter.result({
  "duration": 557129324,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.checkSent()"
});
formatter.result({
  "duration": 1054525121,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on his inbox homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to gmail signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User signs in to gmail as \"assignmentB260614548\" and pwd \"ecse428ab\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be on inbox homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "sendemail.goToGmail()"
});
formatter.result({
  "duration": 6937145020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignmentB260614548",
      "offset": 27
    },
    {
      "val": "ecse428ab",
      "offset": 58
    }
  ],
  "location": "sendemail.signInGmail(String,String)"
});
formatter.result({
  "duration": 6558737735,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.verifySignIn()"
});
formatter.result({
  "duration": 20118561712,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Send email without image attachement",
  "description": "",
  "id": "sendemail;send-email-without-image-attachement;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click on compose",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter recipient as \"allockicmoi@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter title as \"Hello\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter message as \"test for assignment\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click send",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the email should be sent",
  "keyword": "Then "
});
formatter.match({
  "location": "sendemail.clickCompose()"
});
formatter.result({
  "duration": 931919080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "allockicmoi@gmail.com",
      "offset": 22
    }
  ],
  "location": "sendemail.enterRecipient(String)"
});
formatter.result({
  "duration": 1764186055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 18
    }
  ],
  "location": "sendemail.enterTitle(String)"
});
formatter.result({
  "duration": 693404923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test for assignment",
      "offset": 20
    }
  ],
  "location": "sendemail.enterMessage(String)"
});
formatter.result({
  "duration": 1491618609,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.clickSend()"
});
formatter.result({
  "duration": 728669331,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.checkSent()"
});
formatter.result({
  "duration": 1454673090,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on his inbox homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to gmail signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User signs in to gmail as \"assignmentB260614548\" and pwd \"ecse428ab\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be on inbox homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "sendemail.goToGmail()"
});
formatter.result({
  "duration": 7250727548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignmentB260614548",
      "offset": 27
    },
    {
      "val": "ecse428ab",
      "offset": 58
    }
  ],
  "location": "sendemail.signInGmail(String,String)"
});
formatter.result({
  "duration": 6013065279,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.verifySignIn()"
});
formatter.result({
  "duration": 20890022601,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Send email with image attachement",
  "description": "",
  "id": "sendemail;send-email-with-image-attachement;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I click on compose",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter recipient as \"assignmentb260614548@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter title as \"Hello\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter message as \"Hi from selenium/cucumber with an image!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select an image from \"C:\\Users\\alloc\\Documents\\image\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click send",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the email should be sent",
  "keyword": "Then "
});
formatter.match({
  "location": "sendemail.clickCompose()"
});
formatter.result({
  "duration": 891824310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignmentb260614548@gmail.com",
      "offset": 22
    }
  ],
  "location": "sendemail.enterRecipient(String)"
});
formatter.result({
  "duration": 1718445818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 18
    }
  ],
  "location": "sendemail.enterTitle(String)"
});
formatter.result({
  "duration": 588543557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hi from selenium/cucumber with an image!",
      "offset": 20
    }
  ],
  "location": "sendemail.enterMessage(String)"
});
formatter.result({
  "duration": 3039285646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\alloc\\Documents\\image",
      "offset": 24
    }
  ],
  "location": "sendemail.selectImage(String)"
});
formatter.result({
  "duration": 5988865581,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.clickSend()"
});
formatter.result({
  "duration": 529000763,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.checkSent()"
});
formatter.result({
  "duration": 1499330507,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on his inbox homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to gmail signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User signs in to gmail as \"assignmentB260614548\" and pwd \"ecse428ab\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be on inbox homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "sendemail.goToGmail()"
});
formatter.result({
  "duration": 7237877378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignmentB260614548",
      "offset": 27
    },
    {
      "val": "ecse428ab",
      "offset": 58
    }
  ],
  "location": "sendemail.signInGmail(String,String)"
});
formatter.result({
  "duration": 5777392461,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.verifySignIn()"
});
formatter.result({
  "duration": 18233765478,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Send email with image attachement",
  "description": "",
  "id": "sendemail;send-email-with-image-attachement;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I click on compose",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter recipient as \"assignmentb260614548@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter title as \"Another Email!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter message as \"I\u0027ve attached a photo,check it out!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select an image from \"C:\\Users\\alloc\\Documents\\rengar\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click send",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the email should be sent",
  "keyword": "Then "
});
formatter.match({
  "location": "sendemail.clickCompose()"
});
formatter.result({
  "duration": 3330788788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignmentb260614548@gmail.com",
      "offset": 22
    }
  ],
  "location": "sendemail.enterRecipient(String)"
});
formatter.result({
  "duration": 1588650044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Another Email!",
      "offset": 18
    }
  ],
  "location": "sendemail.enterTitle(String)"
});
formatter.result({
  "duration": 1230482801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I\u0027ve attached a photo,check it out!",
      "offset": 20
    }
  ],
  "location": "sendemail.enterMessage(String)"
});
formatter.result({
  "duration": 2507291727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\alloc\\Documents\\rengar",
      "offset": 24
    }
  ],
  "location": "sendemail.selectImage(String)"
});
formatter.result({
  "duration": 8414528714,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.clickSend()"
});
formatter.result({
  "duration": 854136811,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.checkSent()"
});
formatter.result({
  "duration": 926836831,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on his inbox homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to gmail signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User signs in to gmail as \"assignmentB260614548\" and pwd \"ecse428ab\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be on inbox homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "sendemail.goToGmail()"
});
formatter.result({
  "duration": 6880290036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignmentB260614548",
      "offset": 27
    },
    {
      "val": "ecse428ab",
      "offset": 58
    }
  ],
  "location": "sendemail.signInGmail(String,String)"
});
formatter.result({
  "duration": 6331603470,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.verifySignIn()"
});
formatter.result({
  "duration": 10790501788,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Send email with image attachement",
  "description": "",
  "id": "sendemail;send-email-with-image-attachement;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I click on compose",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter recipient as \"assignmentB@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter title as \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter message as \"test with empty subject\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select an image from \"C:\\Users\\alloc\\Documents\\rengar\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click send",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the email should be sent",
  "keyword": "Then "
});
formatter.match({
  "location": "sendemail.clickCompose()"
});
formatter.result({
  "duration": 2888545482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignmentB@gmail.com",
      "offset": 22
    }
  ],
  "location": "sendemail.enterRecipient(String)"
});
formatter.result({
  "duration": 10237363765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "sendemail.enterTitle(String)"
});
formatter.result({
  "duration": 429947804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test with empty subject",
      "offset": 20
    }
  ],
  "location": "sendemail.enterMessage(String)"
});
formatter.result({
  "duration": 1508396787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\alloc\\Documents\\rengar",
      "offset": 24
    }
  ],
  "location": "sendemail.selectImage(String)"
});
formatter.result({
  "duration": 5603482821,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.clickSend()"
});
formatter.result({
  "duration": 913834844,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.checkSent()"
});
formatter.result({
  "duration": 934351152,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on his inbox homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to gmail signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User signs in to gmail as \"assignmentB260614548\" and pwd \"ecse428ab\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be on inbox homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "sendemail.goToGmail()"
});
formatter.result({
  "duration": 7574342428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignmentB260614548",
      "offset": 27
    },
    {
      "val": "ecse428ab",
      "offset": 58
    }
  ],
  "location": "sendemail.signInGmail(String,String)"
});
formatter.result({
  "duration": 5654934814,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.verifySignIn()"
});
formatter.result({
  "duration": 19762085416,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 40,
      "value": "#Scenario error flow attempt to send email without recipient"
    }
  ],
  "line": 41,
  "name": "",
  "description": "",
  "id": "sendemail;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "I click on compose",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I enter recipient as \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter title as \"Error flow message\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I enter message as \"will this send?\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select an image from \"C:\\Users\\alloc\\Documents\\rengar\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click send",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the email should not be sent",
  "keyword": "Then "
});
formatter.match({
  "location": "sendemail.clickCompose()"
});
formatter.result({
  "duration": 1123067482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "sendemail.enterRecipient(String)"
});
formatter.result({
  "duration": 1054663682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Error flow message",
      "offset": 18
    }
  ],
  "location": "sendemail.enterTitle(String)"
});
formatter.result({
  "duration": 1104575692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "will this send?",
      "offset": 20
    }
  ],
  "location": "sendemail.enterMessage(String)"
});
formatter.result({
  "duration": 1264761037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Users\\alloc\\Documents\\rengar",
      "offset": 24
    }
  ],
  "location": "sendemail.selectImage(String)"
});
formatter.result({
  "duration": 4761353698,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.clickSend()"
});
formatter.result({
  "duration": 945001465,
  "status": "passed"
});
formatter.match({
  "location": "sendemail.checkNotSent()"
});
formatter.result({
  "duration": 254610652,
  "status": "passed"
});
});