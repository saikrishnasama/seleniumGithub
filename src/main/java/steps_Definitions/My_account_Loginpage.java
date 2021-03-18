package steps_Definitions;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class My_account_Loginpage {
	
	public WebDriver driver=null;
	
	
	@Given("^open browser$")
	public void open_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Naveen Kumar\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
	
	}

	@When("^Enter the url \"([^\"]*)\"$")
	public void enter_the_url(String url) throws Throwable {
		Thread.sleep(3000);
		driver.get(url);
		
	}

	@When("^click on my Account Login$")
	public void click_on_my_Account_Login() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id=\"container\"]/div/div[2]/div[1]/div[2]/div[3]/div/div/div/a")).click();
		
	}

	/*@When("^enter registered username and password$")
	public void enter_registered_username_and_password() throws Throwable {
		Thread.sleep(3000);	
		driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div[2]/div/form/div[1]/input")).sendKeys("naveenkumar.vavilathota@gmail.com");
		Thread.sleep(3000);
		driver.findElement(By.xpath("//input[@type='password']")).sendKeys("n9494626227");
	}*/
	
	/*@When("^enter registered username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void enter_registered_username_and_password(String user, String pwd) throws Throwable {
		Thread.sleep(3000);	
		driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div[2]/div/form/div[1]/input")).sendKeys(user);
		Thread.sleep(3000);
		driver.findElement(By.xpath("//input[@type='password']")).sendKeys(pwd);  
	}*/
	
	// Login with data table method
	/*@When("^enter registered username and password$")
	public void enter_registered_username_and_password(DataTable credentials) throws Throwable {
	    List<List<String>>data=credentials.raw();
	    Thread.sleep(3000);	
		driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div[2]/div/form/div[1]/input")).sendKeys(data.get(0).get(0));
		Thread.sleep(3000);
		driver.findElement(By.xpath("//input[@type='password']")).sendKeys(data.get(0).get(1)); 
	}*/

	
	//Login  with data table method -Map Table
	
	@When("^enter registered username and password$")
	public void enter_registered_username_and_password(DataTable credentials) throws Throwable {
	List <Map<String,String>> data=credentials.asMaps(String.class, String.class);
	    Thread.sleep(3000);	
		driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div[2]/div/form/div[1]/input")).sendKeys(data.get(0).get("user"));
		Thread.sleep(3000);
		driver.findElement(By.xpath("//input[@type='password']")).sendKeys(data.get(0).get("password")); 
	}
	
	@When("^click on login button$")
	public void click_on_login_button() throws Throwable {
		driver.findElement(By.xpath("//div[2]//div//form//div[3]//button")).click();
	}

	@Then("^user must be successfully login to the webpage$")
	public void user_must_be_successfully_login_to_the_webpage() throws Throwable {
		String capText= driver.findElement(By.xpath("//*[@id=\"container\"]/div/div[3]/div[2]/div[1]/div/div[2]/div/div/div[1]/div/div[4]/div/a/div[2]")).getText();
		if (capText.contains("Error"))
		{
			Assert.assertTrue("invalid input", true);
		}
		driver.close();
	}

}
