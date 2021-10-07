// * Script Start
console.log(`LOAD "#template.js"`);

// ?-----?-----?-----?-----?
// * Pre-loaded Functions

function buildHTML(source) {
    // * Function Start
    console.log(`-CALL buildHTML(${source})`);

    // * Function Body
    // TODO - Make this work
    let classPrefix = `main--source`;

    let resultArray = ``;
    resultArray = source.map((item) => {
        let innerResult = ``;
        return innerResult;
    });

    result = resultArray.join(``);

    // --Finally add the html into the div
    $(`.${classPrefix}`).html(result);

    // * Function End
    console.log(`-END buildHTML(${source})`);
    console.log(`\n`);
}

// ?-----?-----?-----?-----?

// !-----!-----!-----!-----!
// * Event-based Functions

function eventBasedFunction(param) {
    // * Function Start
    console.log(`-CALL eventBasedFunction(${param})`);

    // * Function Body
    // TODO - Make this work

    // * Function End
    console.log(`-END eventBasedFunction(${param})`);
    console.log(`\n`);
}

// !-----!-----!-----!-----!

// * Call Functions
buildHTML(source);

// * Script End
console.log(`END "#template.js"`);
console.log(`\n`);