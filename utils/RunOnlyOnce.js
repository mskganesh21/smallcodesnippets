const RunOnceOnly = (cb) => {
    let isRun = false;

    return () => {
        if (!isRun) {
            cb();
            isRun = true;
        } else {
            console.log("This function has already been run.");
        }
    };
};

const sayHello = () => {
    console.log("Hello Everyone");
};

const runOnceHello = RunOnceOnly(sayHello);

runOnceHello(); // Output: Hello Everyone
runOnceHello(); // Output: This function has already been run.
runOnceHello(); // Output: This function has already been run.
runOnceHello(); // Output: This function has already been run.
