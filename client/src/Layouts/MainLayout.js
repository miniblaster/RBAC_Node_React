import React from "react";
import { Layout, Menu } from "antd";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import { ProductAdd, ProductList } from "../Pages/Product";
import { CustomerAdd, CustomerEdit, CustomerList, CustomerDetail } from "../Pages/Customer";
import { RoleAdd, RoleList } from "../Pages/Role";
import { UserAdd, UserList, UserEdit, UserDetail } from "../Pages/User";
import { ResourceAdd, ResourceList} from "../Pages/Resource"
import { PermissionAdd, PermissionList } from "../Pages/Permission";
import { Login } from './../Pages/Authentication/Login';
import { useAuth } from '../Hooks/context';
import { AppProtectedComponent } from './../Components/AppProtectedComponent';

const { Sider, Content } = Layout;
const { SubMenu, Item } = Menu;

export const AuthLayout = () => {
    const [auth] = useAuth();

    return (
        <Layout>
            <Layout style={{ minHeight: "90vh" }}>
                <Content className='main-content'>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route
                            render={({ location }) => {
                                console.log(auth, location);
                                return auth.isAuthenticated ? (
                                    <Redirect to="/dashboard" />
                                ) : (
                                    <Redirect
                                        to={{
                                            pathname: "/login",
                                            state: { from: location }
                                        }}
                                    />
                                )
                            }}
                        />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
}

export const MainLayout = () => {
    return (
        <Layout>
            <Layout style={{ minHeight: "90vh" }}>
                <Sider width={300} style={{ background: "#fff" }}>
                    <Menu
                        mode="inline"
                        style={{ height: "90vh", borderRight: 5 }}
                    >
                        <AppProtectedComponent key="dashboard" component={Item} name='dashboard' type='menu'>
                            <Link to="/">Dashboard</Link>
                        </AppProtectedComponent>
                        <AppProtectedComponent key="product" title="Product" component={SubMenu} name='product' type='menu'>
                            <Item key="product-add">
                                <Link to="/products/add">Add Product</Link>
                            </Item>
                            <Item key="product-list">
                                <Link to="/products/list">Product List</Link>
                            </Item>
                        </AppProtectedComponent>
                        <SubMenu key="customer" title="Customer">
                            <AppProtectedComponent key="customer-add" component={Item} name='customer-add' type='menu'>
                                <Link to="/customers/add">Add Customer</Link>
                            </AppProtectedComponent>
                            <Item key="customer-list">
                                <Link to="/customers/list">Customer List</Link>
                            </Item>
                        </SubMenu>
                        <AppProtectedComponent key="role" title="Role" component={SubMenu} name='role' type='menu'>
                            <Menu.Item key="role-add">
                                <Link to="/roles/add">Add Role</Link>
                            </Menu.Item>
                            <Menu.Item key="role-list">
                                <Link to="/roles/list">Role List</Link>
                            </Menu.Item>
                        </AppProtectedComponent>
                        <AppProtectedComponent key="user" title="User" component={SubMenu} name='user' type='menu'>
                            <Menu.Item key="user-add">
                                <Link to="/users/add">Add User</Link>
                            </Menu.Item>
                            <Menu.Item key="user-list">
                                <Link to="/users/list">User List</Link>
                            </Menu.Item>
                        </AppProtectedComponent>
                        <AppProtectedComponent key="resource" title="Resource" component={SubMenu} name='resource' type='menu'>
                            <Menu.Item key="resource-add">
                                <Link to="/resources/add">Add Resource</Link>
                            </Menu.Item>
                            <Menu.Item key="resource-list">
                                <Link to="/resources/list">Resource List</Link>
                            </Menu.Item>
                        </AppProtectedComponent>
                        <AppProtectedComponent key="permission" title="Permission" component={SubMenu} name='permission' type='menu'>
                            <Menu.Item key="permission-add">
                                <Link to="/permissions/add">
                                    Add Permission
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="permission-list">
                                <Link to="/permissions/list">
                                    Permission List
                                </Link>
                            </Menu.Item>
                        </AppProtectedComponent>
                    </Menu>
                </Sider>

                <Layout style={{ padding: "6px" }}>
                    <Content className="main-content">
                        <Route exact path="/dashboard" component={Dashboard} name='dashboard' type='menu' />
                        <Route exact path="/products/add" component={ProductAdd} />
                        <Route exact path="/products/list" component={ProductList} />
                        <Route exact path="/customers/add" component={CustomerAdd} />
                        <Route
                            exact
                            path="/customers/list"
                            component={CustomerList}
                        />
                        <Route
                            exact
                            path="/customers/list/:id"
                            component={CustomerDetail}
                        />
                        <Route
                            exact
                            path="/customers/edit/:id"
                            component={CustomerEdit}
                        />
                        <Route exact path="/roles/add" component={RoleAdd} />
                        <Route exact path="/roles/list" component={RoleList} />
                        <Route exact path="/users/add" component={UserAdd} />
                        <Route exact path="/users/list" component={UserList} />
                        <Route exact path="/users/edit/:id" component={UserEdit} />
                        <Route
                            exact
                            path="/users/list/:id"
                            component={UserDetail}
                        />
                        <Route exact path="/resources/add" component={ResourceAdd} />
                        <Route
                            exact
                            path="/resources/list"
                            component={ResourceList}
                        />
                        <Route
                            exact
                            path="/permissions/add"
                            component={PermissionAdd}
                        />
                        <Route
                            exact
                            path="/permissions/list"
                            component={PermissionList}
                        />
                        <Route exact path="/" component={Dashboard} />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
