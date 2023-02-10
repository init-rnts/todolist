
module.exports.getDate = () => {
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    const date = new Date();
    return date.toLocaleDateString("tr-TR", options);
};

module.exports.getDay = () => {
    const options = {
        weekday: "long"
    };
    
    const date = new Date();
    return date.toLocaleDateString("tr-TR", options);
};
