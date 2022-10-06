const errorHandler = (error, request, response, next) => {
  console.error(error)

  return response.status(400).send({ error })
}

module.exports = {
  errorHandler
}