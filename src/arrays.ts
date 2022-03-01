/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const firstlast: number[] =
        numbers.length > 0 ? [numbers[0], numbers[numbers.length - 1]] : [];
    return firstlast;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map(
        (each_number: number): number => each_number * 3
    );
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const conv_int = numbers.map((each_number: string): number =>
        +each_number ? +each_number : 0
    );
    return conv_int;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const new_amounts = amounts.map((amount: string): string =>
        amount.replace("$", "")
    );
    const integros = stringsToIntegers(new_amounts);
    return integros;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const new_array = messages.map((message: string): string =>
        message.includes("!") ? message.toUpperCase() : message
    );
    const final = new_array.filter(
        (sentence: string): boolean => !sentence.includes("?")
    );
    return final;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const final = words.filter((word: string): boolean => word.length < 4);
    const numwords = final.length;
    return numwords;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const newColors = colors.filter(
        (color: string): boolean =>
            color !== "red" && color !== "blue" && color !== "green"
    );
    const final = newColors.length > 0 ? false : true;
    return final;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const final = addends.length > 0 ? addends.join("+") : "0";
    const result = sum + "=" + final;
    return result;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const cloneValues = [...values];
    let indexes = cloneValues.findIndex((value: number): boolean => value < 0);
    indexes = indexes < 0 ? values.length : indexes;
    const take = cloneValues.slice(0, indexes);
    const sum = take.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    cloneValues.splice(indexes + 1, 0, sum);
    return cloneValues;
}
