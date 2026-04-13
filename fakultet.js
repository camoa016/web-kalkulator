export function fakultet(tall) {

    let sum = 1

    for (let x = 1; x < (tall + 1); x++) {
        sum *= x
    }

    return sum
}