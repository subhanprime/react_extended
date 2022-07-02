import React from "react";

const FakeList = ({ data, itemItrate }) => {
    return <div className="fakeList">
        {
            data.map((el) => {
                return (
                     itemItrate(el) 
                )
            })
        }
    </div>
}

export default FakeList;