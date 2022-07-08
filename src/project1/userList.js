import React from "react";

const UserList = _ => {



    return (
        <>
            <div id="userListOuter">
                {

                    [1, 23, 4, 5, 6].map(el => {
                        return (

                            <div className="listItem">
                                <div className="imgDiv">
                                    <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                </div>
                                <div className="nameDetails">
                                    <p>Full Name</p>
                                    <p>Suban Ali</p>
                                </div>
                                <div className="nameDetails">
                                    <p>Username</p>
                                    <p>Subanprime</p>
                                </div>

                                <div className="detailsInfo">Deatials info</div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default UserList;