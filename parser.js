"use strict";

// Parser function
function norm(data) {
    let parsed_object = new Object();

    for (let key in data) {
        parse(parsed_object, key, data[key]);
    }
    return parsed_object;
}

function parse (object, key, value) {
    if (key.includes("[")) {
        let keys = split(key),
            new_key = keys[0].replace("]", "");
        if (!(new_key in object)) {
            object[new_key] = new keys[2]();
        }
        parse(object[new_key], keys[1], value);
    } else {
        object[key.replace("]","")] = value[0];
    }
}

function split(string) {
    let index = string.indexOf("["),
        next_key = string.slice(index+1),
        type = isNaN(next_key.split("[")[0].replace("]", "")) ? Object : Array;
    return [string.slice(0, index), next_key, type]
}

module.exports = norm;

