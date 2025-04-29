export const Divider = (param: {
    className?: string | undefined,
}) => {
    const className = param.className ? param.className : "w-full"
    return (<hr
        className={`h-0 border-text-3 mt-3 mb-3 mx-auto ${className}`}
    />)
}