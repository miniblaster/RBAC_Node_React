import { Table, Tag, Space } from "antd";
import { Link } from "react-router-dom";

const columns = [
    {
        title: "Name",
        // dataIndex: 'name',
        key: "name",
        render: (obj) => {
            console.log(obj);
            return <Link to={`/resources/list/${obj.key}`}>{obj.name}</Link>;
        },
    },
    {
        title: "Resource Type",
        dataIndex: "type",
        key: "type",
    },
    {
        title: "Action",
        key: "action",
        render: () => (
            <Space size="middle">
                <a href="/#">Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: "1",
        name: "dashboard",
        type: "dashboard"
    },
    {
        key: "2",
        name: "Customer",
        type: "customer"
    },
    {
        key: "3",
        name: "Role",
        type: "role"
    },
];
const CustomerList = () => {
    return <Table columns={columns} dataSource={data}></Table>;
};

export default CustomerList;
