const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((error) => {
        next(error); // Pass the error to the next middleware
  });
};
export default asyncHandler;