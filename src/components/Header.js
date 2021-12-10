import React from 'react'

export const Header = ({userData}) => {
    if (!userData) return null;
    return (
        <div>
            <div>Привет, {userData.firstName}</div>
        </div>
    )
}
