import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { faBoxOpen, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const teamsData = [
  {id: 1, icon: <SchoolOutlinedIcon fontSize='30px' />, label: 'Total Student', usernum: '1220', path: 'total-students', iconBg: '#6C5CE7', bgcolor: '#F4F4F8'},
  {id: 2, icon: <FontAwesomeIcon icon={faPersonChalkboard} />, label: 'Total Teacher', usernum: '120', path: 'total-teacher', iconBg: '#FF7675', bgcolor: '#FFF0F3'},
  {id: 3, icon: <AutoStoriesOutlinedIcon fontSize='30px' />, label: 'Total Courses', usernum: '15', path: 'total-courses', iconBg: '#74B9FF', bgcolor: '#F0F7FF'},
  {id: 4, icon: <FontAwesomeIcon icon={faBoxOpen} />, label: 'Faculty Room', usernum: '100', path: 'total-room', iconBg: '#FDCB6E', bgcolor: '#FFF7E6'},
];

export default teamsData;