import React from 'react'
import { ProfileContainer, ProfileLeft, ProfileRight } from '../component/ProfilePage/ProfileElem'

const Profile = () => {
    return (
        <>
            <ProfileContainer>
                <ProfileLeft>
                    <h1>Left Test Profile</h1>
                </ProfileLeft>
                <ProfileRight>
                <h1>Right Test Profile</h1>
                <div className="card mb-3" style={{width: '500px'}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <svg
                            className="bd-placeholder-img"
                            width="100%"
                            height="250"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="Placeholder: Image"
                            preserveAspectRatio="xMidYMid slice"
                            role="img"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#868e96" />
                            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                            Image
                            </text>
                        </svg>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            Card Text
                            </p>
                            <p className="card-text">
                            <small className="text-muted">Card Text 2</small>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </ProfileRight>
            </ProfileContainer>
        </>
    )
}

export default Profile
