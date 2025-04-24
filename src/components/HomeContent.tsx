import { promises as fs } from 'fs';
import Image from "next/image";
import Link from 'next/link';

import { Divider } from './Divider';

export interface IHomeContentObj {
    title: string
    items: IHomeContentObjItem[]
}

export interface IHomeContentObjItem {
    iconPath?: string
    iconalt?: string
    text: string
    value: string
    link?: string
    suffix?: string
}
// 
export const getHomeContentData = async (path: string) => {
    const file = await fs.readFile(path, 'utf8');
    return JSON.parse(file);
}

export const HomeContent = async ({ data }: { data: IHomeContentObj[] }) => {
    return (
        <>
            {data.map((element, index) => (
                <div key={element.title}>
                    <h2>{element.title}</h2>
                    <table>
                        <tbody>
                            {element.items.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        {item.iconPath && item.iconalt ? (
                                            <Image
                                                src={item.iconPath}
                                                alt={item.iconalt}
                                                width={50}
                                                height={50}
                                                className='w-[1em] h-[1em]' />
                                        ) : (<></>)}
                                    </td>
                                    <td className='pl-1'>{item.text}:</td>
                                    <td className='pl-2.5'>
                                        {item.link ? (
                                            <Link
                                                href={item.link}
                                                className='text-accent hover:text-accentHover'
                                            >{item.value}</Link>
                                        ) : (item.value)}
                                        {item.suffix ? <>&nbsp;{item.suffix}</> : (<></>)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {index < data.length - 1 ? (<Divider width="350px" />) : (<></>)}
                </div>
            ))}
        </>
    );
};