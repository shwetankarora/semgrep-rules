let some_json = {"first_name": "Alice", "last_name": "Wonderland", 1: "test", 1.11: "test2"};
let some_other_json = {"first_name": "Bob", "last_name": "Fairyland"}
let some_array = ["first_name", "last_name", 1, 1.11];

// ruleid: custom_object_injection_sink
console.log(some_json[user_input]);

// ok: custom_object_injection_sink
console.log(some_json[user_input + 2]);

// ok: custom_object_injection_sink
console.log(some_json[user_input - 2]);

// ok: custom_object_injection_sink
console.log(some_json[user_input * 2]);

// ok: custom_object_injection_sink
console.log(some_json[user_input / 2]);

// ok: custom_object_injection_sink
console.log(some_json[ 2 + user_input]);

// ok: custom_object_injection_sink
console.log(some_json[-2 + user_input]);

// ok: custom_object_injection_sink
console.log(some_json[another_input + 2 + user_input]);

// ok: custom_object_injection_sink
console.log(some_json[another_input +2 + user_input]);

// ok: custom_object_injection_sink
console.log(some_json[another_input+2 + user_input]);

// ok: custom_object_injection_sink
console.log(some_json[another_input+ 2 + user_input]);

// ok: custom_object_injection_sink
console.log(some_json["constructor"]); // this is a true negative

let some_key = "constructor";
// ok: custom_object_injection_sink
console.log(some_json[some_key]); // this is a true negative

// ok: custom_object_injection_sink
console.log(some_array[1]);

let some_number_key = 1
// ok: custom_object_injection_sink
console.log(some_array[some_number_key]);

// ok: custom_object_injection_sink
console.log(some_json[1]);

let some_number_key = 1
// ok: custom_object_injection_sink
console.log(some_json[some_number_key]);

// ok: custom_object_injection_sink
console.log(some_json[1.11]);

let some_number_key = 1.11
// ok: custom_object_injection_sink
console.log(some_json[some_number_key]);

if (Object.prototype.hasOwnProperty.call(some_json, user_input)) {
	// ok: custom_object_injection_sink
	console.log(some_json[user_input]);
}

if (Object.prototype.hasOwnProperty.call(some_other_json, user_input)) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[user_input]);
}

if(Object.prototype.hasOwnProperty.call(some_json, user_input))
	// ok: custom_object_injection_sink
	console.log(some_json[user_input]);

const [some_number_key, some_value] = useState(2);
// ok: custom_object_injection_sink
console.log(some_json[some_number_key])

function abcd(arg1, user_input, arg3) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[user_input]);
}

function abcd(arg1, user_input) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[user_input]);
}

function abcd(user_input, arg3) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[user_input]);
}

function abcd(user_input) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[user_input]);
}

let abcd = function(arg1, user_input, arg3) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[user_input]);
}

let abcd = function(arg1, user_input) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[user_input]);
}

let abcd = function(user_input, arg3) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[user_input]);
}

let abcd = function(user_input) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[user_input]);
}

for(let some_key = 1; some_key < 10; some_key++) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}

for(let some_key = 1; some_key < 10; ) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[some_key]);
	some_key++
}

for(let some_key = 'a'; some_key < 'z'; some_key=String.fromCharCode(some_key.charCodeAt(0) + 1)) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[some_key]);
}

for(let some_key = some_array.length; some_key < 10; some_key++) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}

for(let some_key = Object.keys(some_json).length; some_key < 10; some_key++) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}

for(let some_key = Object.keys(some_other_json).length; some_key < 10; some_key++) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}

for(let some_key = some_array.length - 2; some_key < 10; some_key++) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}

for(let some_key = some_array.length + 2; some_key < 10; some_key++) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[some_key]);
}

for(let some_key in some_json) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}

for(let some_key in some_array) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[some_key]);
}

for(let some_key in some_other_json) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[some_key]);
}


/*
    - pattern-not-inside: |
        Object.keys($O).forEach(function($ARG, ...) {
          ...
        }, ...)
*/
Object.keys(some_json).forEach(function (some_key, index, array) {
	// ruleid: custom_object_injection_sink
	console.log(some_other_json[some_key]);
}, this);

Object.keys(some_json).forEach(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.keys(some_json).forEach(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.keys(some_json).forEach(function (some_key) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.keys(some_json).forEach(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

Object.keys(some_json).forEach(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

Object.keys(some_json).forEach(function (some_key) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});


/*
    - pattern-not-inside: |
        $ARRAY = Object.keys($O)
        ...
        $ARRAY.forEach(function($ARG, ...) {
          ...
        }, ...)
*/
let some_json_keys = Object.keys(some_json);
some_json_keys.forEach(function (some_key, index, array) {
	// ruleid: custom_object_injection_sink
	console.log(some_other_json[some_key]);
}, this);

some_json_keys.forEach(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

some_json_keys.forEach(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

some_json_keys.forEach(function (some_key) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

some_json_keys.forEach(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

some_json_keys.forEach(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

some_json_keys.forEach(function (some_key) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});


/*
    - pattern-not-inside: |
        $ANYTHING.forEach(function($ARG0, $ARG, $ARG1) {
          ...
        }, ...)
    - pattern-not-inside: |
        $ANYTHING.forEach(function($ARG0, $ARG) {
          ...
        }, ...)
*/
Object.keys(some_other_json).forEach(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[index]);
}, this);

Object.keys(some_other_json).forEach(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[index]);
}, this);

Object.keys(some_other_json).forEach(function (some_key) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.keys(some_other_json).forEach(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[index]);
});

Object.keys(some_other_json).forEach(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[index]);
});

Object.keys(some_other_json).forEach(function (some_key) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[some_key]);
});


/*
    - pattern-not-inside: |
        Object.keys($O).map(function($ARG, ...) {
          ...
        }, ...)
*/
Object.keys(some_json).map(function (some_key, index, array) {
	// ruleid: custom_object_injection_sink
	console.log(some_other_json[some_key]);
}, this);

Object.keys(some_json).map(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.keys(some_json).map(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.keys(some_json).map(function (some_key) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.keys(some_json).map(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

Object.keys(some_json).map(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

Object.keys(some_json).map(function (some_key) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});


/*
    - pattern-not-inside: |
        $ARRAY = Object.keys($O)
        ...
        $ARRAY.map(function($ARG, ...) {
          ...
        }, ...)
*/
let some_json_keys = Object.keys(some_json);
some_json_keys.map(function (some_key, index, array) {
	// ruleid: custom_object_injection_sink
	console.log(some_other_json[some_key]);
}, this);

some_json_keys.map(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

some_json_keys.map(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

some_json_keys.map(function (some_key) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

some_json_keys.map(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

some_json_keys.map(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

some_json_keys.map(function (some_key) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});


/*
    - pattern-not-inside: |
        $ANYTHING.map(function($ARG0, $ARG, $ARG1) {
          ...
        }, ...)
    - pattern-not-inside: |
        $ANYTHING.map(function($ARG0, $ARG) {
          ...
        }, ...)
*/
Object.keys(some_other_json).map(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[index]);
}, this);

Object.keys(some_other_json).map(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[index]);
}, this);

Object.keys(some_other_json).map(function (some_key) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.keys(some_other_json).map(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[index]);
});

Object.keys(some_other_json).map(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[index]);
});

Object.keys(some_other_json).map(function (some_key) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[some_key]);
});


/*
    - pattern-not-inside: |
        Object.keys($O).filter(function($ARG, ...) {
          ...
        }, ...)
*/
Object.keys(some_json).filter(function (some_key, index, array) {
	// ruleid: custom_object_injection_sink
	console.log(some_other_json[some_key]);
}, this);

Object.keys(some_json).filter(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.keys(some_json).filter(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.keys(some_json).filter(function (some_key) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.keys(some_json).filter(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

Object.keys(some_json).filter(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

Object.keys(some_json).filter(function (some_key) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});


/*
    - pattern-not-inside: |
        $ARRAY = Object.keys($O)
        ...
        $ARRAY.filter(function($ARG, ...) {
          ...
        }, ...)
*/
let some_json_keys = Object.keys(some_json);
some_json_keys.filter(function (some_key, index, array) {
	// ruleid: custom_object_injection_sink
	console.log(some_other_json[some_key]);
}, this);

some_json_keys.filter(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

some_json_keys.filter(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

some_json_keys.filter(function (some_key) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

some_json_keys.filter(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

some_json_keys.filter(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

some_json_keys.filter(function (some_key) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});


/*
    - pattern-not-inside: |
        $ANYTHING.filter(function($ARG0, $ARG, $ARG1) {
          ...
        }, ...)
    - pattern-not-inside: |
        $ANYTHING.filter(function($ARG0, $ARG) {
          ...
        }, ...)
*/
Object.keys(some_other_json).filter(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[index]);
}, this);

Object.keys(some_other_json).filter(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[index]);
}, this);

Object.keys(some_other_json).filter(function (some_key) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.keys(some_other_json).filter(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[index]);
});

Object.keys(some_other_json).filter(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[index]);
});

Object.keys(some_other_json).filter(function (some_key) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[some_key]);
});


/*
    - pattern-not-inside: |
        Object.keys($O).some(function($ARG, ...) {
          ...
        }, ...)
*/
Object.keys(some_json).some(function (some_key, index, array) {
	// ruleid: custom_object_injection_sink
	console.log(some_other_json[some_key]);
}, this);

Object.keys(some_json).some(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.keys(some_json).some(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.keys(some_json).some(function (some_key) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.keys(some_json).some(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

Object.keys(some_json).some(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

Object.keys(some_json).some(function (some_key) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});


/*
    - pattern-not-inside: |
        $ARRAY = Object.keys($O)
        ...
        $ARRAY.some(function($ARG, ...) {
          ...
        }, ...)
*/
let some_json_keys = Object.keys(some_json);
some_json_keys.some(function (some_key, index, array) {
	// ruleid: custom_object_injection_sink
	console.log(some_other_json[some_key]);
}, this);

some_json_keys.some(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

some_json_keys.some(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

some_json_keys.some(function (some_key) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

some_json_keys.some(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

some_json_keys.some(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

some_json_keys.some(function (some_key) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});


/*
    - pattern-not-inside: |
        $ANYTHING.some(function($ARG0, $ARG, $ARG1) {
          ...
        }, ...)
    - pattern-not-inside: |
        $ANYTHING.some(function($ARG0, $ARG) {
          ...
        }, ...)
*/
Object.keys(some_other_json).some(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[index]);
}, this);

Object.keys(some_other_json).some(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[index]);
}, this);

Object.keys(some_other_json).some(function (some_key) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.keys(some_other_json).some(function (some_key, index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[index]);
});

Object.keys(some_other_json).some(function (some_key, index) {
	// ok: custom_object_injection_sink
	console.log(some_json[index]);
});

Object.keys(some_other_json).some(function (some_key) {
	// ruleid: custom_object_injection_sink
	console.log(some_json[some_key]);
});


/*
    - pattern-not-inside: |
        Object.entries($O).forEach(function($ARG, ...) {
          ...
        }, ...)
*/
Object.entries(some_json).forEach(function ([some_key, some_value], index, array) {
	// ruleid: custom_object_injection_sink
	console.log(some_other_json[some_key]);
}, this);

Object.entries(some_json).forEach(function ([some_key, some_value], index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.entries(some_json).forEach(function ([some_key, some_value], index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.entries(some_json).forEach(function ([some_key, some_value]) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

Object.entries(some_json).forEach(function ([some_key, some_value], index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

Object.entries(some_json).forEach(function ([some_key, some_value], index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

Object.entries(some_json).forEach(function ([some_key, some_value]) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});


/*
    - pattern-not-inside: |
        $ARRAY = Object.entries($O)
        ...
        $ARRAY.forEach(function($ARG, ...) {
          ...
        }, ...)
*/
let some_json_entries = Object.entries(some_json);
some_json_entries.forEach(function ([some_key, some_value], index, array) {
	// ruleid: custom_object_injection_sink
	console.log(some_other_json[some_key]);
}, this);

some_json_entries.forEach(function ([some_key, some_value], index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

some_json_entries.forEach(function ([some_key, some_value], index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

some_json_entries.forEach(function ([some_key, some_value]) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
}, this);

some_json_entries.forEach(function ([some_key, some_value], index, array) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

some_json_entries.forEach(function ([some_key, some_value], index) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});

some_json_entries.forEach(function ([some_key, some_value]) {
	// ok: custom_object_injection_sink
	console.log(some_json[some_key]);
});