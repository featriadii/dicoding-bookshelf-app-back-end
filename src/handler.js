const addBookHandler = (request, h) => {
  const response = h.response({
    status: 'success',
    message: 'Hello World!'
  })

  response.code(200)
  return response
}

module.exports = { addBookHandler }
