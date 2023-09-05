// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="notification">
      <div className="notification-content">
        {children}
        <GrFormClose className="close-icon" />
      </div>
    </div>
  )
}
export default Notification
