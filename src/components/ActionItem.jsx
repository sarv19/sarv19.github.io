import { useEffect } from "react";
import { useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';

const ActionItem = ({name}) => {
    const [currentHash, setCurrentHash] = useState('');
    
    useEffect(() => {
        // Function to update the current hash state
        const updateHash = () => {
          setCurrentHash(window.location.hash? window.location.hash : '#about');
        };
    
        // Add a hashchange event listener to update the hash on hash changes
        window.addEventListener('hashchange', updateHash);
    
        // Initial update
        updateHash();
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('hashchange', updateHash);
        };
      }, [window.location.hash]);
    const handleSetActive = (to) => {
      window.location.hash = name.toLowerCase();
    };
    
    return (
        <Link
          className={`action-item`}
          activeClass="active"
          offset={55}
          spy={true}
          to={`${name.toLowerCase()}`}
          smooth={true}
          duration={500}
          onSetActive={handleSetActive}
        >
            <span className='action-item-dash'></span>
            <span className="action-item-name">{name}</span>
        </Link>
    )
}

export default ActionItem;