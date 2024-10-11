O(n + 10) = O(n)

O(100 * n) = O(n)

O(25) = O(1) // n이 무한이여도 25번만 연산한다는 것이니 O(1)이라고 표기한다. (n:1)

O(n^3 + n^2) = O(n^3) // n^3이 n^2 보다 그래프의 영향이 크다

O(n + n + n + n)  = O(n)

function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
      console.log(i); // n번 순환한다
  }
}
// O(n)

function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
      console.log(i); // n이 무한이면 10번만 순환한다
  }
}
// O(1)

function logAtLeast10(n) {
  for (var i = 1; i <= Math.max(n, 10); i++) {
      console.log(i); // n이 무한이면 n번 순환한다
  }
}
// O(n)

function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2)); // 변수 초기화는 O(1)
  for (var i = 0; i < array.length; i++) {
      // n번 순환
      if (i % 2 === 0) {
          newArray[i / 2] = array[i]; // 변수초기화는 O(1)
      }
  }
  return newArray;
}
// O(1 + 1 + n) = O(n)

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
      // O(n)
      var subtotal = 0;
      for (var j = 0; j <= i; j++) {
          // O(n) // m
          subtotal += array[j];
          // 이것도 j가 m번 순환한다고 하면 이것도 m번 같이 초기화 되니 여기는 O(2n)이 맞기는 한데 O(n * 2n) = O(3n^2) = O(n^2) 이다
      }
      subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
// O(n^2)