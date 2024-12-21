import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { faBoxOpen, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const teamsData = [
  {
    id: 1, 
    path: 'total-students', 
    label: 'Total Student', 
    icon: () => <SchoolOutlinedIcon fontSize='30px' />, 
    usernum: '1220', 
    iconBg: '#6C5CE7', 
    bgcolor: '#F4F4F8'
  },
  {
    id: 2, 
    path: 'total-teacher', 
    label: 'Total Teacher', 
    icon: () => <FontAwesomeIcon icon={faPersonChalkboard} />, 
    usernum: '120', 
    iconBg: '#FF7675', 
    bgcolor: '#FFF0F3'
  },
  {
    id: 3, 
    path: 'total-courses', 
    label: 'Total Courses', 
    icon: () => <AutoStoriesOutlinedIcon fontSize='30px' />, 
    usernum: '15', 
    iconBg: '#74B9FF', 
    bgcolor: '#F0F7FF'
  },
  {
    id: 4, 
    path: 'total-room', 
    label: 'Faculty Room', 
    icon: () => <FontAwesomeIcon icon={faBoxOpen} />, 
    usernum: '100', 
    iconBg: '#FDCB6E', 
    bgcolor: '#FFF7E6'
  },
];

export default teamsData;