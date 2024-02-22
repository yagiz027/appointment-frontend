import React from 'react';
import NavbarAdmin from '../components/navbar/NavbarAdmin';
import AdminBigCalendar from '../components/calendar/Admin/AdminBigCalendar'

const AdminPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
                <NavbarAdmin/>
            </div>
            <div>
                <AdminBigCalendar/>
            </div>
        </div>
    );
};

export default AdminPage;
