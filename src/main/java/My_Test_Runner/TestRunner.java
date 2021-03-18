package My_Test_Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"Feature/myAccount_login.Feature"},
		glue= {"steps_Definitions"},
		format= {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml_output/cucumber.xml"},
	    monochrome=true,
	    dryRun=false
		)
public class TestRunner {

}
