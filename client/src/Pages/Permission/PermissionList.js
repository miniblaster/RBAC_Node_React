import { Table, Space } from "antd";
import { Link } from "react-router-dom";

const columns = [
    {
        title: "Name",
        // dataIndex: 'name',
        key: "name",
        render: (obj) => {
            console.log(obj);
            return <Link to={`/roles/list/${obj.key}`}>{obj.name}</Link>;
        },
    },
    {
        title: "Alias",
        dataIndex: "alias",
        key: "alias",
    },
    {
        title: "Action",
        key: "action",
        render: (obj) => (
            <Space size="middle">
                <a href="/#">Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: "1",
        name: "Admin",
        alias: "admin"
        
    },
    {
        key: "2",
        name: "Super Admin",
        alias:"super-admin"
    },
    {
        key: "3",
        name: "Sales Team",
        alias:"sales-team"
    },
];
const CustomerList = () => {
    return <Table columns={columns} dataSource={data}></Table>;
};

export default CustomerList;
