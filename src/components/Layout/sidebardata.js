import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const sidebarData = [
  { path: '/', text: "Dashboard", icon: <GridViewOutlinedIcon /> },
  { path: '/teams', text: "Teams", icon: <KeyboardCommandKeyOutlinedIcon /> },
  { path: '/employees', text: "Employees", icon: <PeopleAltOutlinedIcon /> },
  { path: '/projects', text: "Projects", icon: <WorkOutlineOutlinedIcon /> },
  { path: '/overview', text: "Overview", icon: <SpeedIcon /> },
  { path: '/courses', text: "Courses", icon: <AutoStoriesOutlinedIcon /> },
  { path: '/students', text: "Students", icon: <SchoolOutlinedIcon /> },
  { path: '/teachers', text: "Teachers", icon: <FontAwesomeIcon icon={faPersonChalkboard} /> },
  { path: '/videos', text: "Videos", icon: <PlayCircleOutlinedIcon /> },
];