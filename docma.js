const dcma = require("docma");
dcma.create().Build({
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

dcma