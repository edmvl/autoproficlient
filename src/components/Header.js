import React from 'react'

export const Header = ({userData}) => {
    return (
        <div>
            <div>Привет, {userData.firstName}</div>
        </div>
    )
}
