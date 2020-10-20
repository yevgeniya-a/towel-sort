
// You should implement your task here.

module.exports = function towelSort(matrix) {
    return (matrix || []).reduce((arr, m, i) => {
        if (i % 2) {
            arr.push(...m.reverse());
        } else {
            arr.push(...m);
        }
        return arr;
    }, []);
};
