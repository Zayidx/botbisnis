

// Message Filter / Message Cooldowns
const usedCommandRecently = new Set();

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from);
};

const addFilter = (from) => {
    usedCommandRecently.add(from);
    setTimeout(() => {
        return usedCommandRecently.delete(from);
    }, 3000);// 1.5 sec is delay before processing next command;
};
module.exports = {
    msgFilter: {
        isFiltered,
        addFilter
    }};