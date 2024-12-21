const { default: axios } = require("axios");
import totalStudents from '../src/datas/totalDatas/total-students';
import totalTeacher from '../src/datas/totalDatas/total-teacher';
import totalCourses from '../src/datas/totalDatas/total-courses';
import totalRoom from '../src/datas/totalDatas/total-room';

const baseUrl = 'http://localhost:3000/api';

const getTeams = async () => {
    try {
      const res = await axios.get(`${baseUrl}/teams/teamsdata`);
      return res.data;

    } catch (error) {
      console.error("Error fetching teams data:", error);
      return []; // Return an empty array in case of an error
    }
};

const getTotal = async (team) => {
    switch(team) {
        case 'total-students':
            return totalStudents;
        case 'total-teacher':
            return totalTeacher;
        case 'total-courses':
            return totalCourses;
        case 'total-room':
            return totalRoom;

        default: 
            return null;
    }
}

export { getTeams, getTotal };