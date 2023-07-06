import './Profile.css'

const Profile = (props) => {
    return (
        <div className="profile">
            <p>{props.name}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default Profile