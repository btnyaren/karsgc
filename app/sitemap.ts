import {MetadataRoute} from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://ialgc.org",
            lastModified: new Date(),
            priority: 1
        },
        {
            url: "https://ialgc.org/apply",
            lastModified: new Date(),
            priority: 0.8
        },
        {
            url: "https://ialgc.org/committees",
            lastModified: new Date(),
            priority: 0.5
        }
    ]
}