export enum Categories {
    salary,
    extra,
    investment,
    clothing,
    supermarket,
    fastFood,
    ownTransport,
    publicTransportation,
    fuel
}

export type TransactionType = {
    id: number,
    userId: number,
    type: 'gain' | 'spent',
    date: string,
    value: number,
    category: Categories
}