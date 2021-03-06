const responseHeaders = {
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

const handleSuccess = response => ({
  statusCode: 200,
  body: JSON.stringify(response),
  headers: responseHeaders,
});

const handleError = err => ({
  statusCode: 500,
  message: err.message || 'Something went terribly wrong.',
  headers: responseHeaders,
});

const tryParse = body => {
  try {
    return JSON.parse(body);
  } catch (err) {
    return body;
  }
};

module.exports = {
  handleError,
  handleSuccess,
  tryParse,
  responseHeaders,
};