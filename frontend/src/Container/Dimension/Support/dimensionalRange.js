const ranges = [
    100,
    125,
    160,
    180,
    200,
    225,
    250,
    280,
    315,
    355,
    400,
    450,
    500,
    560,
    630,
    710,
    800,
    900,
    1000,
    1250,
];

const lowerRangeFor = (size) => {
    if (size < ranges[0]) {
        return NaN
    }
    return ranges.filter((el) => {
        return el <= size
    }).slice(-1)[0];
};

const higherRangeFor = (size) => {
    if (size > ranges.slice(-1)[0]) {
        return NaN
    }
    return ranges.filter((el) => {
        return el >= size
    })[0]
};

export {lowerRangeFor, higherRangeFor};
export default ranges;