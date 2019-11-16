module.exports = fn => {
  // console.log(fn);
  return (req, res, next) => {
    // console.log(req);
    fn(req, res, next).catch(next);
  };
};
