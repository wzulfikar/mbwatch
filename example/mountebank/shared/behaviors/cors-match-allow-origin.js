// adjust response header Access-Control-Allow-Origin
// to match request header 'Origin' (if any).
(request, response, logger) => {
  const origin = request.headers['Origin']
  if (origin) {
	response.headers['Access-Control-Allow-Origin'] = origin
  }

  logger.info('request.headers', request.headers)
  logger.info('response.headers', response.headers)
}
