import React from 'react';

const User = (props) => {
    // console.log(props)
    const { user } = props
    const {id, name, email} = user
    return (
        <div>
            {id} : {name} - {email}
        </div>
    );
};

export default User;