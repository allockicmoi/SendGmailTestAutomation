Feature: sendemail

Background: User is on his inbox homepage
	Given User navigates to gmail signin page
	When User signs in to gmail as "assignmentB260614548" and pwd "ecse428ab"
	Then User should be on inbox homepage

#Scenario send self email without image (alternate)
Scenario Outline: Send email without image attachement
   When I click on compose
   And I enter recipient as "<to>" 
   And I enter title as "<title>"
   And I enter message as "<message>"
   And I click send
   Then the email should be sent

Examples:
	|to|title|message|
	|assignmentb260614548@gmail.com|Hello|Hi from selenium/cucumber without image|
	|allockicmoi@gmail.com|Hello| test for assignment|
	


#Scenario send email with image
Scenario Outline: Send email with image attachement
   When I click on compose
   And I enter recipient as "<to>" 
   And I enter title as "<title>"
   And I enter message as "<message>"
   And I select an image from "<imagesource>"
   And I click send
   Then the email should be sent	

 Examples:
	|to|title|message|imagesource|
	|assignmentb260614548@gmail.com|Hello|Hi from selenium/cucumber with an image!|C:\\Users\\alloc\\Documents\\image|
	|assignmentb260614548@gmail.com|Another Email!|I've attached a photo,check it out!|C:\\Users\\alloc\\Documents\\rengar|
	|assignmentB@gmail.com| | test with empty subject|C:\\Users\\alloc\\Documents\\rengar|
	
#Scenario error flow attempt to send email without recipient
Scenario: 
	When I click on compose
	And I enter recipient as ""
	And I enter title as "Error flow message"
	And I enter message as "will this send?"
	And I select an image from "C:\Users\alloc\Documents\rengar"
	And I click send
	Then the email should not be sent

	