var myStepDefinitionsWrapper = function(){

  this.Given(/^that a directory named index does not exist$/, function(callback) {
    var fs = require('fs')
    if (fs.existsSync('index') && fs.lstatSync('index').isDirectory()) {
      callback.fail();
    }
  });

  this.When(/^directory\('index'\) is invoked$/, function(callback) {

  });

  this.Then(/^a folder named index should be created$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should see 'created index\/'$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Given(/^that a file named myfile does not exist$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^file\('index'\) is invoked$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^a file named index should be created$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should see 'created file'$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Given(/^the following erb template named classy$/, function(string, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I create a file named classy from the template$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should see the following generate file$/, function(string, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Given(/^that the following directories do not exist$/, function(table, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I create them using the specified dsl$/, function(table, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });
  this.Then(/^I should see the root and root\/app directories$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });
}

module.exports = myStepDefinitionsWrapper
