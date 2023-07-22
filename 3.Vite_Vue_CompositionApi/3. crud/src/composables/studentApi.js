import { ref } from "vue";
import axios from 'axios';

export default function useStudent(){
    const url = "http://localhost:3000/students";

    const getAllStudents = async () => {
        try{
            const res = await axios(url);
            return res.data;
        }
        catch(error){
            console.log(error);
        }
    }

    getAllStudents()
}