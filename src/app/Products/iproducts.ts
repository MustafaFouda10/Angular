
// this interface is made by ==> json to ts website
export interface IProducts {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export interface Rating {
    rate: number;
    count: number;
}

// declare module namespace {

//     export interface Rating {
//         rate: number;
//         count: number;
//     }

// }

