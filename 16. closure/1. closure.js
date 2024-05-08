const text = 'WOODZ';
function func() {
    console.log(text);
}
func();

function outer() {
    const n = 9999;
    function inner() {
        console.log(`inside inner : ${n}`);
    }
    return inner;
}
const func1 = outer();
func1();