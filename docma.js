const dcma = require("docma");
dcma.create().build({
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