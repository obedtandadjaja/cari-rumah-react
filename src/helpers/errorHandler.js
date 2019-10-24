function handleError(error) {
  if (process.env.NODE_ENV === 'dev')
    console.log(JSON.stringify(error))

  window.location = '/error'
}

export default handleError
