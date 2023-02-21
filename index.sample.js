// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(N, A) {
    ret = Array(N).fill(0)
    max = 0

    for (i=0; i < A.length; i++) {
        if (A[i] > N) {
            ret.fill(max)
        } else {
            ret[A[i]-1]++
            if (ret[A[i]-1] > max) {
                max = ret[A[i]-1]
            }
        }
    }
    
    return ret
}

it('test example', () => {
  expect(solution(5, [3, 4, 4, 6, 1, 4, 4])).toStrictEqual([3, 2, 2, 4, 2]);
})

it('test single', () => {
  expect(solution(1, [1])).toStrictEqual([1]);
  expect(solution(1, [1, 2])).toStrictEqual([1]);
  expect(solution(1, [1, 2, 2])).not.toStrictEqual([2]);
})

arr = []
for (let i=0; i<90000; i++) {
    arr.push(Math.floor(Math.random() * (9999 - 1) + 1))
}
it('test extreme', () => {
    console.log(solution(9999, arr));
})


