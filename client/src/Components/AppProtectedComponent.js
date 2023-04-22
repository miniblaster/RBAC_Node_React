import { useAuth } from '../Hooks/context';

export const AppProtectedComponent = (props) => {
    const { name, type, component: MyComponent, ...rest } = props;
    const [auth] = useAuth();
    const permissions = (auth && auth.profile.permissions) || [];
    const hasPermission = permissions.some(x => x.resourceName === name && x.resourceType === type);
    const isDisabled = permissions.some(x => x.resourceName === name && x.resourceType === type && x.isDisabled);
    return (hasPermission && <MyComponent {...rest} disabled={isDisabled} />);
}