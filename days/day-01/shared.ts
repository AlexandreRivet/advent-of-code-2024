export const parseToColumns = (lines: string[]) => {
    const linesValues = lines.map((line) => line.split('   ').map((v => parseInt(v))));
    return Array
        .from({ length: 2 })
        .map((_, colIndex) => 
            linesValues.map((_, lineIndex) => linesValues[lineIndex][colIndex])
        );
}