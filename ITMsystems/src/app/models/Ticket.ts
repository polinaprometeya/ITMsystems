export interface Ticket {
    id?: number|undefined;
    title: string;
    description: string;
    status: 'New' | 'In Progress' | 'Done';
    level: 1 | 2 | 3;
    userId: number;
    timestamp: string|undefined;
    }
