export interface LocationMetadata {
    x?: number;
    y?: number;
    id?: number;
    name?: string;
}


export interface Location {
    value: string;
    viewValue: string;
    metadata?: LocationMetadata;
}