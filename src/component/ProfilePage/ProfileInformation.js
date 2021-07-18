import React from 'react'
import {
    DetailsH6,
    DetailsDes,
    ProfileButton,
    ProfileName,
    ProfileSum
} from "../../component/ProfilePage/ProfileElem";
import Boy from "../../images/boy-5.svg"

export const ProfileInformation = () => {
    return (
        <>
            <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img style={{marginBottom:'-80px'}}
                                    src={Boy}
                                    alt="Admin"
                                    className="rounded-circle"
                                    width={150}
                                />
                                <div className="mt-3">
                                    <ProfileName>John Doe</ProfileName>
                                    <ProfileSum className="text-secondary mb-1">Full Stack Developer</ProfileSum>
                                    <ProfileSum className="text-muted font-size-sm">Subang Jaya, Selengor, Malaysia</ProfileSum>
                                    <ProfileButton className="btn btn-outline-primary">Follow</ProfileButton>
                                    <ProfileButton className="btn btn-outline-primary">Message</ProfileButton>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{padding: "20px"}}></div>        
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <DetailsH6 className="mb-0">Full Name</DetailsH6>
                                </div>
                                <DetailsDes className="col-sm-9 text-secondary">
                                    John Doe
                                </DetailsDes>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <DetailsH6 className="mb-0">Email</DetailsH6>
                                </div>
                                <DetailsDes className="col-sm-9 text-secondary">
                                    abc@mail.co.kk
                                </DetailsDes>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <DetailsH6 className="mb-0">Phone</DetailsH6>
                                </div>
                                <DetailsDes className="col-sm-9 text-secondary">
                                    +6019-98765432
                                </DetailsDes>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <DetailsH6 className="mb-0">Mobile</DetailsH6>
                                </div>
                                <DetailsDes className="col-sm-9 text-secondary">
                                    +6012-3456789
                                </DetailsDes>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <DetailsH6 className="mb-0">Address</DetailsH6>
                                </div>
                                <DetailsDes className="col-sm-9 text-secondary">
                                    Subang Jaya, Selengor, Malaysia
                                </DetailsDes>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-12">
                                    <ProfileButton href="/" target="_blank" className="btn btn-outline-primary">Edit</ProfileButton>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default ProfileInformation
