import './Profile.css'
import ProfilePicture from '../../../../../assets/profile.jpg';

const Profile = (props) => {
    return (
        <div className="profile">
            <div>
                <img className="profile_picture" src={ProfilePicture} alt="" />    
            </div>
            <div className="data">
                <p>{props.name}</p>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Profile