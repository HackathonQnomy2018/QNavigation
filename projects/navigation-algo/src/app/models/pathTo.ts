export function pathTo(node) {
    let curr = node;
    const path = [];
    while (curr.parent) {
        path.unshift(curr);
        curr = curr.parent;
    }
    return path;
}
