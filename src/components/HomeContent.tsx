import Image from "next/image";
import Link from 'next/link';

import { Divider } from './Ui';

import aboutData from "@/src/about"

export const HomeContent = async () => {
    return (
        <>
            {aboutData.map((element, index) => (
                <div key={element.title}>
                    <h2>{element.title}</h2>
                    <table>
                        <tbody>
                            {element.items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.iconText ? (
                                        <span className='text-accent'>{item.iconText}</span>
                                    ) : (<></>)}
                                        {item.iconPath && item.iconAlt ? (
                                            <Image
                                                src={item.iconPath}
                                                alt={item.iconAlt}
                                                width={50}
                                                height={50}
                                                className='w-[1em] h-[1em]' />
                                        ) : (<></>)}
                                    </td>
                                    <td className='pl-1'>{item.itemText}:</td>
                                    <td className='pl-2.5'>
                                        {item.link ? (
                                            <Link
                                                href={item.link}
                                                className='text-accent hover:text-normal'
                                            >{item.linkText}{item.linkTextSuffix ?
                                                <span className="text-normal hover:text-accent">&nbsp;{item.linkTextSuffix}</span>
                                                : ("")
                                                }</Link>
                                        ) : (item.linkText)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {index < aboutData.length - 1 ? (<Divider />) : (<></>)}
                </div>
            ))}
        </>
    );
};