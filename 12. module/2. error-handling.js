// try-catch-finally
function readFile(path) {
    throw new Error('💥cannot found file path!');
    return 'File contents : I love WOODZ🧡💙';
}

function processFile(path) {
    let content;
    try {
        content = readFile(path);
    } catch (error) {
        console.log(error);
        // console.log(error.name);
        // console.log(error.message);
        // console.log(error.stack);
        content = 'Default contents : ASHLEY';
    } finally {
        console.log('무조건 실행하는 부분');
    }
    return 'This is your ' + content;
}

const result = processFile('경로');
console.log(result);