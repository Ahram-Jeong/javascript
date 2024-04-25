{
    const x = 1;
    {
        const y = 2;
        console.log(x);
    }
    console.log(x);
    // console.log(y); // 에러
}

const text = 'global'; // 전역 변수/스코프 (글로벌 변수/스코프)
{
    const text = 'inside block 1'; // 지역 변수/스코프 (로컬 변수/스코프)
    {
        console.log(text); // inside block 1
    }
}