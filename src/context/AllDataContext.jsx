import { createContext, useState,useEffect } from "react";
import axios from "axios";

export const AllDataContext = createContext()

export function AllDataContextProvider({ children }) {

    const [enrolments, setEnrolments] = useState([])
    const [registration, setregistration] = useState([])
    const [courses, setCourses] = useState([])
    

    useEffect(() => {
        axios.get(`https://music-dashboard-api.vercel.app/data`).then((response) => {
            setCourses(response.data[0].courses)
            setEnrolments(response.data[1].enrolments);
            setregistration(response.data[2].registration)

        });
    }, [])

    return(
        <AllDataContext.Provider value={{enrolments,registration,courses}}>
            {children}
        </AllDataContext.Provider>
    )
}