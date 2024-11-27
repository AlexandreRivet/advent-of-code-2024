import { part } from './part1';
import * as fs from 'fs';

describe('part 1', () => {
    it('example', async () => {
        const example = fs.readFileSync(__dirname + '/example.txt', 'utf-8');
        expect(await part(example)).toBe(1);
    });

    it('input', async () => {
        const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8');
        expect(await part(input)).toBe(1);
    });
});