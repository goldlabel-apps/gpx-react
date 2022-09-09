// Type definitions for features
// Project: https://github.com/DT9Media/dt9-hub-frontend
// Definitions by: Chris D <https://github.com/listingslab>

export interface NotifyShape {
    severity: string,
    code: number | string
    message: string
}

export interface BannerShape {
    pk: string,
    sk: string,
}

export interface SiteShape {
    pk: string,
    sk: string,
}

export interface FieldShape {
    label: string,
    value: string
    onChange: any,
}
