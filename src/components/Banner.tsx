import { ReactNode } from "react"

export const Banner = ({ children }: {
    children: ReactNode
}) => {
    return (
        <div className="
        border-3
        border-l-accent 
        border-r-text 
        border-t-accent
        border-b-text
        shadow-[7px_7px_0px_var(--color-bannerShado)]
        p-4
        w-fit
        h-fit
        ">
            {children}
        </div>
    )
}