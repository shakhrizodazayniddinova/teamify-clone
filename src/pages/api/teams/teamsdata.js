import teamsData from "@/datas/teamsData/teamsdata";

export default function handler(req, res){
    res.status(200).json(teamsData);
}