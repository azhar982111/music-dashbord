

import { useNavigate } from "react-router-dom"
import styles from "../css files/Sidebar.module.css"



export default function Sidebar() {

    let navigate = useNavigate()

    function changepage(res) {
        if (res === "home") {
            navigate("/home")
        }
        else if(res === "courses"){
            navigate("/courses")
        }
        else {
            navigate("/")

        }
    }


    return (
        <div className={styles.sidebar}>
            <img src="https://i.ibb.co/yg04LMS/Untitled.png" />

            <div onClick={() => changepage("home")}>
                <img className={styles.homeLogo} src="https://i.ibb.co/bR7gdkg/icons8-home-64.png" />
                <p>Home</p>
            </div>
            <div onClick={() => changepage("courses")}>
                <img className={styles.overviewLogo} src="https://i.ibb.co/bR7gdkg/icons8-home-64.png" />
                <p>Courses</p>
            </div>

            <div onClick={() => changepage("logout")}>
                <img src="https://i.ibb.co/fHBmxPg/icons8-logout-32.png" />
                <p>Logout</p>
            </div>
        </div>
    )
}