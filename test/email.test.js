var loopback = require('../');
var MailConnector = require('../lib/connectors/mail');
var MyEmail = loopback.Email.extend('my-email');
var assert = require('assert');

describe('Email and SMTP', function () {
  var mail = loopback.createDataSource({
    connector: MailConnector,
    transports: [
      {type: 'STUB'}
    ],
    debug: true
  });

  MyEmail.attachTo(mail);

  it('should have a send method', function () {
    assert(typeof MyEmail.send === 'function');
    assert(typeof MyEmail.prototype.send === 'function');
  });

  
});
