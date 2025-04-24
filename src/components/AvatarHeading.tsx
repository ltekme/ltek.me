import Image from "next/image";
import { title } from "process";

export const AvatarHeading = (param: {
    imagePath: string,
}) => {
    return (
        <h1 className="text-2xl font-light">
            <Image
                width={512}
                height={512}
                src={param.imagePath}
                alt="Avatar"
                className="w-[1.3em] h-[1.3em] rounded-full inline-block align-[-20%] mr-3"
            />
            <span className="text-accent">
                <span className="mr-1">Hello 👋</span>
            </span>
        </h1>
    )
}
