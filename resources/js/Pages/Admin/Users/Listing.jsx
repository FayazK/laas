import AdminLayout from "@/Layouts/AdminLayout.jsx";
import {Card, Table} from "antd";
import dayjs from "dayjs";

export default function UsersListing({users}) {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Email Verified At',
            dataIndex: 'email_verified_at',
            key: 'email_verified_at',
        },
        {
            title: 'Created At',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (text) => dayjs(text).format('MM-DD-YYYY'),
        },
        {
            title: 'Updated At',
            dataIndex: 'updated_at',
            key: 'updated_at',
            render: (text) => dayjs(text).format('MM-DD-YYYY'),
        },
    ];
    return (
        <AdminLayout>
            <Card title={'Users'}>
                <Table columns={columns} dataSource={users} rowKey={'id'} />;
            </Card>
        </AdminLayout>
    );
}
