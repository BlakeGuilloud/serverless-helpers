const responseHeaders = {
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

function handleSuccess(response) {
  return {
    statusCode: 200,
    body: JSON.stringify(response),
    headers: responseHeaders,
  }
}

function handleError(err) {
  return {
    statusCode: 500,
    message: 'Something went terribly wrong.',
    headers: responseHeaders,
  }
}

module.exports = {
  handleError,
  handleSuccess,
  responseHeaders,
};