module.exports.AsyncWrapper = function AsyncWrapper(fn) {
    return (req, res, next) => {
        return fn(req, res).catch(next);
    }
}