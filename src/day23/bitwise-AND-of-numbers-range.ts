export default function rangeBitwiseAnd(m: number, n: number): number {
  let k = 0;

  while (m != n) {
    m >>= 1;
    n >>= 1;
    k++;
  }
  return m << k;
}
