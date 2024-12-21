import totalStudents from '../../../datas/totalDatas/total-students';
import totalTeacher from '../../../datas/totalDatas/total-teacher';
import totalCourses from '../../../datas/totalDatas/total-courses';
import totalRoom from '../../../datas/totalDatas/total-room';

export default function handler(req, res){
    if(req.method === 'GET'){
        const {team} = req.query;

        switch (team) {
            case 'total-students':
              return res.status(200).json(totalStudents);
            case 'total-teacher':
              return res.status(200).json(totalTeacher);
            case 'total-courses':
              return res.status(200).json(totalCourses);
            case 'total-room':
              return res.status(200).json(totalRoom);
              
            default:
              return res.status(404).json({ message: 'Team not found' });
        }
    }else{
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}