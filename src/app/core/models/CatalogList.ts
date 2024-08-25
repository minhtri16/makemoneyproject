export interface CatalogList {
    top:Session;
    title: string;
    items: Item[];
    bottom: Session;
    faq: Question[];
}

export interface Session {
    headingValue: string;
    body: string;
}

export interface Item {
    label: string;
    image: string;
    uri: string;
}

export interface Question {
    question: string;
    answer: string;
}

