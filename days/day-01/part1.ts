import { inputToLines } from '@utils';
import { parseToColumns } from './shared';

export const part = async (input: string): Promise<number> => {
    const lines = inputToLines(input);
    const columns = parseToColumns(lines);
    const sortedColumns = columns.map((col) => col.toSorted());
    
    return sortedColumns[0]
        .reduce((acc, v, index) => acc + Math.abs(v - sortedColumns[1][index]), 0);
}