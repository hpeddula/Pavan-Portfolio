import React from 'react'
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <div className="footer">
    <span><FontAwesomeIcon icon={faCopyright} color="white"/> Pavan Tummala </span>
    <FontAwesomeIcon icon={faGithub} color="white" className="git" /> 
    </div>
  )
}
