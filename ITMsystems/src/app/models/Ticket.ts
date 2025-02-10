export interface Ticket {
    id?: number|undefined;
    title: string;
    description: string;
    status: string;
    level: number;
    userId: number;
    timestamp: string|undefined;
    }
