export type RetroTicket = {
    title: string;
    votes: Set<string>;
};

export type RetroCategory = {
    title: string;
    tickets: RetroTicket[];
};

