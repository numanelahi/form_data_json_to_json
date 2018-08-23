const should = require('should');
const norm = require('./parser');

// Dummy data
let form_data = {
    "status": ["active"],
    "configuration[icon]": ["icon"],
    "configuration[position]": ["Bottom Left"],
    "configuration[message]": ["Nice message"],
    "configuration[allow_text]": ["Anytext"],
    "configuration[page_rules][0][rule]": ["Never show"],
    "configuration[page_rules][0][url]": ["/aboutus"],
    "configuration[page_rules][1][rule]": ["Never show"],
    "configuration[page_rules][1][url]": ["/aboutus"],
    "acknowledgement[popup][message][0][title]": ["Hola"],
    "acknowledgement[popup][message][0][body]": ["Comoestas"],
    "acknowledgement[popup][message][1][title]": ["Hello"],
    "acknowledgement[popup][message][1][body]": ["How are you?"],
    "acknowledgement[type][object1][prop1]": ["Hola"],
    "acknowledgement[type][object1][prop2]": ["Hola"],
    "acknowledgement[type][object2][prop1]": ["Comoestas"],
    "acknowledgement[type][object2][prop2]": ["Comoestas"],
}

describe("form_data#", () => {
    before(() => {
        form_data = norm(form_data);
    });


    it(`should have an attribute 'configuration' which should be an object.`, () => {
        form_data.should.have.a.property('configuration').which.be.an.Object();
    });

    it(`'configuration' should have attributes 'icon', 'position' and 'message' equal to 'icon', 'Bottom Left', and 'Nice message' respectively.`, () => {
        form_data.configuration.should.have.properties('icon', 'position', 'message');
        form_data.configuration.icon.should.be.equal('icon');
        form_data.configuration.position.should.be.equal('Bottom Left');
        form_data.configuration.message.should.be.equal('Nice message');
    });

    it(`'configuration' should have attribute 'page_rules' which should be an array`, () => {
        form_data.configuration.should.have.property('page_rules').which.is.an.Array();
    });

    it(`first element of 'page_rules' should be an object with attributes 'rule' and 'url' equal to 'Never show' and '/aboutus' respectively`, () => {
        form_data.configuration.page_rules[0].should.be.an.Object().which.deepEqual({rule: 'Never show', url: '/aboutus'});
    });
});

