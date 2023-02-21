function grayCode(n) {
    if (n === 0) {
        return [0];
    } else {
        const prevGray = grayCode(n - 1);
        const leadingBit = 1 << (n - 1);
        const currentGray = prevGray.concat(prevGray.slice().reverse().map(x => x + leadingBit));
        return currentGray;
    }
}

grayCode(3)

it('test example', () => {
    grayCode(0).map(_ => expect(_).toEqual(0))
    const result1 = [0,1]
    grayCode(1).map((_, i) => expect(_).toEqual(result1[i]))
    const result2 = [0,1,3,2]
    grayCode(2).map((_, i) => expect(_).toEqual(result2[i]))
})

it('test extreme ifempty', () => {
    const result3 = [0,1,3,2,6,7,5,4]
    grayCode(3).map((_, i) => expect(_).toEqual(result3[i]))
})

it('test extreme', () => {
    
})
