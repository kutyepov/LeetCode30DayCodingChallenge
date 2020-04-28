class FirstUnique {
  map: {};
  q: number[];
  constructor(nums: number[]) {
    this.q = [...nums];
    this.map = nums.reduce((memo: object, value: number) => {
      memo[value] = memo[value] ? memo[value] + 1 : 1;
      return memo;
    }, {});
  }

  showFirstUnique(): number {
    const uniq = [];

    for (let key in this.map) {
      if (this.map[key] === 1) {
        uniq.push(Number(key));
      }
    }

    let first: number = null;
    let res = -1;

    uniq.forEach((num) => {
      if (first === null) {
        first = this.q.indexOf(num);
      } else {
        first = Math.min(first, this.q.indexOf(num));
      }
      res = this.q[first];
    });

    return res;
  }

  add(value: number): void {
    this.q.push(value);
    this.map[value] = this.map[value] ? this.map[value] + 1 : 1;
  }
}

export default FirstUnique;
