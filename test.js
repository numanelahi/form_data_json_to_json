const norm = require('./parser');

// Dummy data
const data1 = {
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

// TODO: Write proper test for the dummy data above
const app = norm(data1);
console.log(app);

