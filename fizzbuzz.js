export function fizzbuzz(tall) {
    let result = ""

    if (tall % 3 == 0) {
        result += "Fizz"
    }

    if (tall % 5 == 0) {
        result += "Buzz"
    }

    if (result == "") {
        result = tall.toString()
    }

    return result
}