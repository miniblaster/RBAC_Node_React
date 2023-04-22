import { Table, Tag, Space } from "antd";
import { Link } from "react-router-dom";

const columns = [
    {
        title: "Name",
        // dataIndex: 'name',
        key: "name",
        render: (obj) => {
            console.log(obj);
            return <Link to={`/users/list/${obj.key}`}>{obj.name}</Link>;
        },
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Phone Number",
        dataIndex: "contact",
        key: "contact",
    },
    {
        title: "Role",
        dataIndex: "role",
        key: "role",
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: (tags) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 7 ? "lightblue" : "green";
                    if (tag === "putrid") {
                        color = "volcano";
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: "Action",
        key: "action",
        render: (obj) => (
            <Space size="middle">
                <Link to={`/users/edit/${obj.key}`}>Edit</Link>
                <a href="/#">Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: "1",
        name: "Mr.Mango",
        address: "clld-team,abc road, etc",
        role: "Super Admin",
        contact: "115asdf33",
        tags: ["nice", "lazy"],
    },
    {
        key: "2",
        name: "Mr.Orange",
        address: "clld-team,abc road, etc",
        role: "Admin",
        contact: "115asdf33",
        tags: ["nice", "lazy"],
    },
    {
        key: "3",
        name: "Mr.Banana",
        address: "clld-team,abc road, etc",
        role: "Worker",
        contact: "115asdf33",
        tags: ["nice", "lazy"],
    },
];
const UserList = () => {
    return <Table columns={columns} dataSource={data}></Table>;
};

export default UserList;
