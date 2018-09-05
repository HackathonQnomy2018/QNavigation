import { BinaryHeap } from './binary-heap';

export function getHeap() {
    return new BinaryHeap(function (node) {
        return node.f;
    });
}
