import logMessage from './js/logger'
import './css/style.css'

// Log message to console
logMessage('Welcome to Expack!')

// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef
  module.hot.accept() // eslint-disable-line no-undef
}