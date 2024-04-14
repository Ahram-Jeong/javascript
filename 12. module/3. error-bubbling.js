// Bubbling up, Propagating 🧼 - 전파
function a() {
    throw new Error('ERROR!!');
}

function b() {
    try {
        a();
    } catch (e) {
        console.log('에러 핸들링 불가');
        throw e; // 다시 던짐
    }
}

function c() {
    b();
}

try {
    c();
} catch (error) {
    console.log('Catched!');
}
console.log('Done🎃');