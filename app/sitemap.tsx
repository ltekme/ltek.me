import type { MetadataRoute } from 'next';
import { domainName } from '@/src/config';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `https://${domainName}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `https://${domainName}/clock`,
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
    ]
}