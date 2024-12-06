import { part } from './part2';
import * as fs from 'fs';

describe('part 2', () => {
    it('example', async () => {
        const example = fs.readFileSync(__dirname + '/example.txt', 'utf-8');
        expect(await part(example)).toBe(31);
    });

    it('input', async () => {
        const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8');
        expect(await part(input)).toBe(23126924);
    });
});