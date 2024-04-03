import React, {useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import SendIcon from '@mui/icons-material/Send';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('home');
  const navigate = useNavigate(); // Use the useNavigate hook
  const location = useLocation(); // Use the useLocation hook to get the current location object

  useEffect(() => {
    // Set the value based on the current pathname
    const path = location.pathname; // Get the current path
    if (path === '/') {
      setValue('home');
    } else if (path.startsWith('/projects')) {
      setValue('projects');
    } else if (path.startsWith('/contact')) {
      setValue('contact');
    } else if (path.startsWith('/stack')) {
      setValue('stack');
    } else if (path.startsWith('/resume')) {
      setValue('resume');
    }
  }, [location]); // This effect runs when the location changes

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Navigate based on the value
    switch (newValue) {
      case 'home':
        navigate('/');
        break;
      case 'projects':
        navigate('/projects');
        break;
      case 'contact':
        navigate('/contact');
        break;
      case 'stack':
        navigate('/stack');
        break;
      case 'resume':
        navigate('/resume');
        break;
      default:
        navigate('/');
        break;
    }
  };

  return (
    <BottomNavigation sx={{ width: '100%' }} value={value} onChange={handleChange}>
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Projects" value="projects" icon={<CodeIcon />} />
      <BottomNavigationAction label="Contact" value="contact" icon={<SendIcon />} />
      <BottomNavigationAction label="Stack" value="stack" icon={<ClearAllIcon />} />
      <BottomNavigationAction label="Resume" value="resume" icon={<InsertDriveFileIcon />} />
    </BottomNavigation>
  );
}
