export const getBaseName = (pathname: string) => {
    let release = '/';
    const pathName = pathname.split('/');

    pathName.shift();

    if (pathName[0] === 'beta') {
        pathName.shift();
        release = `/beta/`;
    }

    return `${release}${pathName[0]}/${pathName[1] || ''}`;
};
