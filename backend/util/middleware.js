const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  return response.status(400).send({ error })
}

module.exports = {
  errorHandler
}