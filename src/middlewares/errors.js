const errorHandled = (err, req, res, next) => {
  const estado = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(estado).json({
    message: err.message,
    //? no manda el stack del error en producion
    stack: process.env.NODE_ENV === "production" ? "ups! error" : err.stack,
  });
};

const notFound = (err, req, res, next) => {
  //para url no encontrada
  const error = new Error(`not found -${req.originalUrl}`);
  res.status(404).send("url not found");
  next(error);
};

module.exports = { notFound, errorHandled };
