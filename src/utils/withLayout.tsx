
export const withLayout= (Layout: React.ComponentType<any>, children: JSX.Element) => {
    return <Layout>{children}</Layout>;
};
