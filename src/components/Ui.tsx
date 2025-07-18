import { ReactNode } from "react"

import { AvatarHeading } from "./AvatarHeading"

export const Banner = ({ children }: {
    children: ReactNode
}): ReactNode => {
    return (<div className="border-3 border-l-accent border-r-text border-t-accent border-b-text shadow-[15px_15px_0px_var(--color-bannerShado)] p-6 w-max h-fit">
        {children}
    </div>)
}

export const Center = ({ children }: {
    children: ReactNode
}): ReactNode => {
    return (<div className="flex flex-row min-h-screen justify-center items-center">
        {children}
    </div>)
}

export const Divider = (param: {
    className?: string | undefined,
}): ReactNode => {
    const className = param.className ? param.className : "w-full"
    return (<hr className={`h-0 border-text-3 mt-3 mb-3 mx-auto ${className}`} />)
}

export const BannerContent = ({ headingText, dividerClassNames, children }: {
    headingText: string,
    dividerClassNames?: string,
    children: ReactNode,
}): ReactNode => {
    return (<>
        <AvatarHeading title={headingText} />
        <Divider className={dividerClassNames} />
        {children}
    </>)
}