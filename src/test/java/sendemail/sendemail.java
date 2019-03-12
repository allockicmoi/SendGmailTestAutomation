package sendemail; 

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.Given; 
import cucumber.annotation.en.Then; 
import cucumber.annotation.en.When;
import junit.framework.Assert; 

public class sendemail { 
   WebDriver driver = null; 
   
   @Given("^User navigates to gmail signin page$") 
   public void goToGmail() { 
	   System.setProperty("webdriver.chrome.driver", "C:\\Users\\alloc\\Documents\\chromedriver\\chromedriver.exe");
      driver = new ChromeDriver(); 
      driver.navigate().to("https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
   }
   
   @When("^User signs in to gmail as \"(.*)\" and pwd \"(.*)\"$")
   public void signInGmail(String arg1,String arg2) {
	   
	      driver.navigate().to("https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
	      driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);  
	      driver.findElement(By.id("identifierId")).sendKeys(arg1);
	      driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS); 
	      driver.findElement(By.id("identifierNext")).click();
	      driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);  driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);  
	      driver.findElement(By.name("password")).sendKeys(arg2);
	      driver.findElement(By.id("passwordNext")).click();
	      driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);  
   }
   
   
   @Then("^User should be on inbox homepage$")
   public void verifySignIn(){
	   WebDriverWait wait = new WebDriverWait(driver, 10);
	   Boolean hasLoaded = wait.until(ExpectedConditions.urlToBe("https://mail.google.com/mail/u/0/#inbox"));
	   String URL = driver.getCurrentUrl();
	   Assert.assertEquals(URL, "https://mail.google.com/mail/u/0/#inbox" );
   }
   
   
   @When("^I click on compose$")
   public void clickCompose() {
	   driver.findElement(By.xpath("//div[contains(text(),'Compose')]")).click();
	   
   }
   
   @When("^I enter recipient as \"(.*)\"$")
   public void enterRecipient(String arg1) {
	   WebDriverWait wait = new WebDriverWait(driver, 10);
	   WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("to")));
	   element.sendKeys(arg1);
   }
   
   @When("^I enter title as \"(.*)\"$")
   public void enterTitle(String arg1) {
	   WebDriverWait wait = new WebDriverWait(driver, 10);
	   WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("subjectbox")));

	   element.sendKeys(arg1);
   }
   
   @When("^I enter message as \"(.*)\"$")
   public void enterMessage(String arg1) {
	   driver.findElement(By.xpath("//*[@role=\"textbox\"]")).sendKeys(arg1);
   }
   
   @When("^I select an image from \"(.*)\"$")
   public void selectImage(String arg1) throws IOException, InterruptedException {
	   driver.findElement(By.cssSelector("div[class='a1 aaA aMZ']")).click();
	   //Thread.sleep(2000);
	   Runtime.getRuntime().exec(new String[]{"C://Users//alloc//Documents//uploadfile3.exe",arg1});
	   //Thread.sleep(2000);
	   WebElement attachbutton = driver.findElement(By.cssSelector("div[class='a1 aaA aMZ']")); 
	   WebDriverWait wait = new WebDriverWait(driver, 30);
	   Boolean hasLoaded = wait.until(ExpectedConditions.attributeContains(attachbutton, "class", "aF2"));
   }
   
   @When("^I click send$")
   public void clickSend() {
	   
	   driver.findElement(By.xpath("//div[contains(text(),'Send')]")).click();
	   
   }
   
   @Then("^the email should be sent$")
   public void checkSent() {
	   WebDriverWait wait = new WebDriverWait(driver, 10);
	   Boolean hasLoaded = wait.until(ExpectedConditions.urlToBe("https://mail.google.com/mail/u/0/#inbox"));
	   String URL = driver.getCurrentUrl();
	   Assert.assertEquals(URL, "https://mail.google.com/mail/u/0/#inbox" );
   }
   
   @Then("^the email should not be sent$")
   public void checkNotSent() {
	   WebDriverWait wait = new WebDriverWait(driver, 10);
	   String URL = driver.getCurrentUrl();
	   Assert.assertEquals(URL.substring(0, 48), "https://mail.google.com/mail/u/0/#inbox?compose=" );
   }
   
   @After public void closeBrowser() {
	   try {
		Thread.sleep(1000);
	} catch (InterruptedException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	   driver.close();
   }
	
   
  
} 
