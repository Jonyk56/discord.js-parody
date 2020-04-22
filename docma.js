const dcma = require("docma");
new dcma().Build({
    "src": [
        {
            "src": ["./src/*", "index.js"]
        },
        { "guide": "./README.md" }
    ],
    "dest": "./docs",
    "clean": true
}
)