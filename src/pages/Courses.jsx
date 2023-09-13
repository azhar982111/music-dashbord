import Sidebar from "./sidebar";
import styles from "../css files/Courses.module.css"
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AllDataContext } from "../context/AllDataContext";

export default function Courses() {
    const [filteredCourses, setfilteredCourses] = useState([])

    const { courses } = useContext(AllDataContext)

    useEffect(() => {
            setfilteredCourses(courses);
    }, [])

    console.log(courses)

    function search(e) {
        let searchedValue = e.target.value
        if (searchedValue == "") {
            setfilteredCourses(courses)
        }
        else {
            let filtered = courses.filter(ele => ele.name.toLowerCase().includes(searchedValue.toLowerCase()) || ele.description.toLowerCase().includes(searchedValue.toLowerCase()) || ele.instructor.toLowerCase().includes(searchedValue.toLowerCase()) || ele.instrument.toLowerCase().includes(searchedValue.toLowerCase()) || ele.dayofweek.toLowerCase().includes(searchedValue.toLowerCase()) || ele.noOfStudents.toLowerCase().includes(searchedValue.toLowerCase()) || ele.price.toLowerCase().includes(searchedValue.toLowerCase()) || ele.status.toLowerCase().includes(searchedValue.toLowerCase()))
            setfilteredCourses(filtered)
        }
    }


    return (
        <div className={styles.container}>
            <Sidebar />

            <div className={styles.rightSide}>
                <h2>Courses</h2>



                <div className={styles.tableDiv}>
                    <div>
                        <div className={styles.courseList}>
                            <p>COURSE LIST</p>
                            <input onChange={search} placeholder="search..." />
                        </div>
                        <div>
                            <table className={styles.Table1}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Instructor</th>
                                        <th>Instrument</th>
                                        <th>Day of Week</th>
                                        <th>No.of Students</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        filteredCourses.map((ele) => (
                                            <tr>
                                                <td>{ele.name}</td>
                                                <td >
                                                    <div className={styles.description}>
                                                        {
                                                            ele.description}
                                                    </div>
                                                </td>
                                                <td>{ele.instructor}</td>
                                                <td>{ele.instrument}</td>
                                                <td>{ele.dayofweek}</td>
                                                <td>{ele.noOfStudents}</td>
                                                <td>{ele.price}</td>
                                                <td>
                                                    <div style={{
                                                        "backgroundColor": ele.status == "Active" ? "green" : ele.status == "Closed" ? "pink" : "rgb(189, 132, 243)",
                                                        "width": "5rem",
                                                        "textAlign": "center",
                                                        "color": "white",
                                                        "padding": "0.1rem",
                                                        "fontSize": "0.8rem"
                                                    }}>
                                                        {ele.status}
                                                    </div>
                                                </td>
                                                <td>{ele.dayofweek}</td>
                                            </tr>
                                        ))
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}