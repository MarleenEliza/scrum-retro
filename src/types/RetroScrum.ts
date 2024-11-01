export type RetroTicketType = {
    title: string;
    votes: Set<string>;
};

export type RetroCategoryType = {
    title: string;
    tickets: RetroTicketType[];
};

