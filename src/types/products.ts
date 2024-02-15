export type product = {
    id: number;
    title: string;
    kind: string;
    price: number;
    description: string;
    questionnaire: {
        small: number[];
        taste: number[];
        feel: number[];
        health: number[];
        comment: string[];
    
    };
    data: {
        small: number;
        taste: number;
        feel: number;
        when: number;
    }
    // imageURL: string; // storage.tsで追加
}

export type productI = {
    id: number;
    title: string;
    kind: string;
    price: number;
    description: string;
    questionnaire: {
        small: number[];
        taste: number[];
        feel: number[];
        health: number[];
        comment: string[];
    
    };
    data: {
        small: number;
        taste: number;
        feel: number;
        when: number;
    }
    imageURL: string;
}