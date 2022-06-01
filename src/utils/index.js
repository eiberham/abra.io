/**
 * Gets the estimted reading time
 * @param {*} post - the post's content
 * @returns {number} - estimated reading time
 */
function getEstimatedReadingTime(post) {
  const words = post.split(' ').length - 1
  const number = words / 200

  if (!Number.isSafeInteger(number)) {
    const [ minutes ] = number.toString().split('.')
    return minutes
  }

  return number
}

export {
  getEstimatedReadingTime
}