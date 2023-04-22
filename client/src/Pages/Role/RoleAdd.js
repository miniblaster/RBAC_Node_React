import { Form, Input, Button, PageHeader, Divider } from "antd";

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 10,
    },
};

const RoleAdd = () => {
    return (
        <Form {...layout} name="nest-messages">
            <PageHeader title="Add Role" />
            <Divider />
            <Form.Item
                name={["user", "role"]}
                label="Role Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={["user", "alias"]}
                label="Role Alias"
                rules={[
                    {
                        type: "string",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RoleAdd;
