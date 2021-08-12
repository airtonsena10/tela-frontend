import { Avatar } from '@material-ui/core'
import "./profile.css"

function Profile() {
    return (
        <div className="profile">
            <div className="profile__top">
                <img src="/images/header-background.jpg" alt="" />
                <Avatar className="profile__avatar" />
                <h2>Airton Sena</h2>
                <h4>@airtonsena</h4>
            </div>

            <div className="profile__city">
                <p>Jeremoabo/Bahia -Brasil</p>
            </div>
            <div className="profile__infor">
                <p>Rocketseat</p>
                <p>React Estudos</p>
            </div>






        </div>
    )
}

export default Profile
