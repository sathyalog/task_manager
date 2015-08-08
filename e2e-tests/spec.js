// spec.js
describe('10Miles App', function() {
  it('finish successfully', function() {
    browser.get('http://localhost:3000/');
    browser.sleep(500);  
    element(by.xpath("//*[contains(text(),'Your Tasks')]")).click();
    element(by.id('createTask')).click();
    element(by.model("vm.taskTitle")).sendKeys('10Miles task');
    element(by.model("vm.projectName")).sendKeys('10Miles project');
    element(by.model("vm.taskDesc")).sendKeys('Assignment kind of..');

    element(by.cssContainingText('option', '2 hrs')).click();
    element(by.id('button')).click();
    browser.sleep(500);  
	element(by.xpath("//*[contains(text(),'View')]")).click();
	browser.sleep(1000);  
	// element(by.xpath("//*[contains(text(),'Edit')]")).click();
 //    element(by.model("vm.taskTitle")).sendKeys('Modified task');
 //    element(by.model("vm.projectName")).sendKeys('Modified project');
 //    element(by.model("vm.taskDesc")).sendKeys('Assignment kind of..');

 //    element(by.cssContainingText('option', '3 hrs')).click();
 //    element(by.model("vm.taskStatus")).click();
    element(by.id('button')).click();
    browser.close();
  });
});