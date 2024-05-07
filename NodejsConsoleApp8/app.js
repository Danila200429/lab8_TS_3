function zip(first, second) {
    const minLength = Math.min(first.length, second.length);
    const result = [];
    for (let i = 0; i < minLength; i++) {
        result.push([first[i], second[i]]);
    }
    return result;
}
const q1 = zip([1, 2, 3, 4, 5, 6], ["1", "2", "3"]);
const q2 = zip([true], [false, false]);
console.log(q1, q2);
function groupBy(source, keySelector, valueSelector) {
    const result = new Map();
    for (let i = 0; i < source.length; i++) {
        const item = source[i];
        const key = keySelector(item, i);
        const value = valueSelector(item, i);
        if (!result.has(key)) {
            result.set(key, []);
        }
        const group = result.get(key);
        if (group) {
            group.push(value);
        }
    }
    return result;
}
const q3 = groupBy([1, 2, 3, 4], x => x % 2, x => x + 1);
const q4 = groupBy(["aaa", "bbb", "cc", "q", "lalaka"], (_, i) => i % 2 === 0, (x, i) => ({ i, x }));
console.log(q3, q4);
// ������� �������� ����� ����������� ���������
setTimeout(() => { }, 10000); // 10 ������
//# sourceMappingURL=app.js.map