import { inputToLines } from "@utils";
import { parseToColumns } from "./shared";

export const part = async (input: string): Promise<number> => {
    const lines = inputToLines(input);
    const columns = parseToColumns(lines);

    return columns[0].reduce((acc, v) => 
        acc + columns[1].reduce((otherAcc, otherV) => otherAcc + (v === otherV ? v : 0), 0),
        0
    )
}