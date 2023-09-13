import Sidebar from "./sidebar";
import styles from "../css files/Home.module.css"
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { AllDataContext } from "../context/AllDataContext";




export default function Home() {



    const { enrolments, registration } = useContext(AllDataContext)




    const total = registration.reduce((total, item) => total + Number(item.TotalFees),0);


    console.log(total)


    return (

        <div className={styles.container}>

            <Sidebar />

            <div className={styles.rightSide}>
                <h2>Overview</h2>

                <div className={styles.topFlexBox}>
                    <div className={styles.dataDiv}>
                        <div>
                            <img className={styles.proPic} src="https://i.ibb.co/rbxkK9b/icons8-male-user-50.png" />
                        </div>
                        <div>
                            <p>{registration.length}</p>
                            <p>total number of students</p>
                            <p style={{"cursor":"pointer"}}>view</p>
                        </div>
                    </div>
                    <div className={styles.dataDiv}>
                        <div>
                            <img className={styles.proPic} src="https://i.ibb.co/rbxkK9b/icons8-male-user-50.png" />
                        </div>
                        <div>
                            <p>12</p>
                            <p>total number of courses</p>
                            <p style={{"cursor":"pointer"}}>view</p>
                        </div>
                    </div>
                    <div className={styles.dataDiv}>
                        <div>
                            <img className={styles.proPic} src="https://i.ibb.co/rbxkK9b/icons8-male-user-50.png" />
                        </div>
                        <div>
                            <p><span>$</span>{total}</p>
                            <p>total amount earned</p>
                            <p style={{"cursor":"pointer"}}>view</p>
                        </div>
                    </div>
                    <div className={styles.dataDiv}>
                        <div>
                            <img className={styles.proPic} src="https://i.ibb.co/rbxkK9b/icons8-male-user-50.png" />
                        </div>
                        <div>
                            <p>Guitar</p>
                            <p>best performing course</p>
                            <p style={{"cursor":"pointer"}}>view</p>
                        </div>
                    </div>
                    <div className={styles.dataDiv}>
                        <div>
                            <img className={styles.proPic} src="https://i.ibb.co/rbxkK9b/icons8-male-user-50.png" />
                        </div>
                        <div>
                            <p>Flute</p>
                            <p>worst performing course</p>
                            <p style={{"cursor":"pointer"}}>view</p>
                        </div>
                    </div>
                </div>

                <div className={styles.secondDiv}>
                    <div>
                        <p>LATEST ENROLMENTS</p>
                        <p>View All Courses</p>
                    </div>

                    <div>
                        <table className={styles.Table1}>
                            <thead>
                                <tr>
                                    <th>Enr.No</th>
                                    <th>S.Name</th>
                                    <th>C.Name</th>
                                    <th>Fees</th>
                                    <th>Enr.Date</th>
                                </tr>

                            </thead>

                            <tbody>
                                {
                                    enrolments.map((ele) => (
                                        <tr key={ele.Eno}>
                                            <td>{ele.Eno}</td>
                                            <td>{ele.SName}</td>
                                            <td>{ele.CName}</td>
                                            <td>{ele.Fees}</td>
                                            <td>{ele.EDate}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ======================================================================================================== */}

                <div className={styles.thirdDiv}>
                    <div>
                        <p>BEST STUDENTS</p>
                        <p>View All Students</p>
                    </div>

                    <div>
                        <table className={styles.Table2}>
                            <thead>
                                <tr>
                                    <th>Reg.No</th>
                                    <th>F.Name</th>
                                    <th>L.Name</th>
                                    <th>Course #</th>
                                    <th>Total Fees</th>
                                    <th>Reg.Date</th>
                                </tr>

                            </thead>

                            <tbody>

                                {
                                    registration.map((ele) => (
                                        <tr key={ele.RegNo}>
                                            <td>{ele.RegNo}</td>
                                            <td>{ele.FName}</td>
                                            <td>{ele.LName}</td>
                                            <td>{ele.CourseNo}</td>
                                            <td>{ele.TotalFees}</td>
                                            <td>{ele.RegDate}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>

    )
}