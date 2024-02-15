import { questionnaire } from "./questionnaire";

export type answered = {
    id: number; // product id
    questionnaire: questionnaire;
}

export type user = {
    id: number;
    name: string;
    wants: number[];
    bought: number[];
    answered: answered[];
}