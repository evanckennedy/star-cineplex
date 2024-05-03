import { FaInbox, FaAddressBook, FaTicketAlt } from 'react-icons/fa';

function Footer(props) {
  return (
    <footer>
      <div className="container flex justify-between">
        <div className="flex gap-2">
          <FaInbox className='icon'/>
          <FaTicketAlt className='icon'/>
          <FaAddressBook className='icon'/>
        </div>
        <p>&copy;{props.year} All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer;