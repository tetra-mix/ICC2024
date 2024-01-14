import { questionnaire } from "./questionnaire";

export type product = {
    id: number;
    title: string;
    kind: string;
    price: number;
    description: string;
    imageURL: string;
    questionnaire: questionnaire[];
    data: {
        small: number;
        taste: number;
        feel: number;
        when: number;
    }
}