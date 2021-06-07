/**
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code: number) {
  return (
    `Minified crypto-helper-js error #${code}; or ` +
    'use the non-minified dev environment for full errors. '
  )
}

export default formatProdErrorMessage
