import React from 'react';
import NavbarForm from '../components/navbar/NavbarUser';
import UserBigCalendar from '../components/calendar/User/UserBigCalendar';

const UserPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
                <NavbarForm/>
            </div>
            <div>
                <UserBigCalendar/>
            </div>
        </div>
    );
};

export default UserPage;
