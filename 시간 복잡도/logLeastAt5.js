const LogAtLeat5 = n => {
  // n = 10000
  for (let i = 1; i < Math.max(5, n); i++) {
    // n이 무한이면 무한번 순환한다.
    // n이 5이하이면 5번만 순환한다. => n이 무한번 수렴하는 것만 신경써야 한다.
    console.log(i);
  }
  // 그러니 n이 무한으로 수렴할때에는 O(n)의 시간 복잡도를 지닌다.
};
