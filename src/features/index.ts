// Type definitions for features
// Definitions by: Chris D <https://github.com/listingslab>

export interface NotifyShape {
    severity: string,
    code: number | string
    message: string
}

export interface BannerShape {
    uid: string,
    sk: string,
}

export interface SiteShape {
    uid: string,
    sk: string,
}

export interface FieldShape {
    label: string,
    value: string
    onChange: any,
}
