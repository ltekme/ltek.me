import Image from "next/image";
import avatar from '../../public/avatar.webp'

export const AvatarHeading = ({ title }: {
    title: string,
}) => {
    return (
        <h1 className="text-3xl font-light">
            <Image
                src={avatar}
                alt="Avatar"
                className="w-[1.3em] rounded-full inline-block align-[-20%] mr-3"
            />
            <span className="text-accent">
                <span className="mr-1">{title}</span>
            </span>
        </h1>
    )
}
