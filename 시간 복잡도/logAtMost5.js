const LogAtLeat5 = n => {
  // n = 10000
  for (let i = 1; i < Math.min(5, n); i++) {
    // n이 무한이여도 5번만 순환한다.
    console.log(i);
  }
  // 그러니 n이 무한으로 수렴할때에는 O(1)의 시간 복잡도를 지닌다.
};
