import { IPosition } from './position';

export class Heuristics {
    static manhattan(pos0: IPosition, pos1: IPosition): number {
        const d1 = Math.abs(pos1.x - pos0.x);
        const d2 = Math.abs(pos1.y - pos0.y);
        return d1 + d2;
    }

    static diagonal(pos0: IPosition, pos1: IPosition): number {
        const D = 1;
        const D2 = Math.sqrt(2);
        const d1 = Math.abs(pos1.x - pos0.x);
        const d2 = Math.abs(pos1.y - pos0.y);
        return (D * (d1 + d2)) + ((D2 - (2 * D)) * Math.min(d1, d2));
    }
}
