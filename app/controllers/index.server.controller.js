exports.render = function(req, res) {
    const definitions = [
        {
            term: "MongoDB",
            definition: "MongoDB is a NoSQL database used to store application data in flexible document format."
        },
        {
            term: "Express",
            definition: "Express is a Node.js framework used to build routes, APIs, and server-side application logic."
        },
        {
            term: "Angular",
            definition: "Angular is a front-end framework used to build dynamic single-page applications with reusable components."
        },
        {
            term: "Node.js",
            definition: "Node.js is a runtime environment that allows JavaScript to run on the server side."
        }
    ];

    res.render('index', {
        name: "Ulysses Burden III",
        title: "The MEAN Stack",
        definitions: definitions
    });
};