import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSync } from '@fortawesome/free-solid-svg-icons'

export default props =>
  <div className={`fadeIn ${props.spinning}`}>
    <i class="fas fa-clock fa-xs"></i>
    {/* <FontAwesomeIcon icon={faSync} size={props.size} /> */}
  </div>