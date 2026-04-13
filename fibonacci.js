export function fibonacci(n) {

    let gen_2 = 0
    let gen_1 = 1
    let result = 1

    for (let x = 2; x <= n; x++) {
        result = gen_1 + gen_2
        gen_2 = gen_1
        gen_1 = result
    }

    return result

}