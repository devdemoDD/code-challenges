const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
const postIds = [1, 2, 5];

// 1개의 데이터를 받아오는 방법
(async function fetchPost() {
  const response = await fetch(`${BASE_URL}/2`);
  const result = await response.json();
  console.log('1', result);
})();

(function fetchPost() {
  fetch(`${BASE_URL}/2`).then((res) => res.json().then((data) => console.log('2', data)));
})();

// 여러 개의 비동기 처리 방법들
// sol1)
(async function fetchPosts() {
  const results = [];
  for (let i = 0; i < postIds.length; i++) {
    console.log(`시작 ${i}`);
    const response = await fetch(`${BASE_URL}/${postIds[i]}`);
    const result = await response.json();
    results.push(result);
    console.log(`끝 ${i}`);
  }

  console.log('sol1', results);
})();

// sol2-1) map
(async function fetchPosts() {
  const results = postIds.map(async (id) => {
    console.log(`${id} 시작`);
    const response = await fetch(`${BASE_URL}/${id}`);
    const result = await response.json();
    console.log('fetched id', result.id);

    console.log(`${id} 끝`);
    return result;
  });

  console.log('map', results); // Promise[] → 콜백함수가 async/await가 없는 것처럼 작동
})();

// sol2-2) foreach
//
(async function fetchPosts() {
  const results = [];
  postIds.forEach(
    async (id) =>
      await fetch(`${BASE_URL}${id}`).then((res) =>
        res.json().then((data) => {
          results.push(data);
        })
      )
  );

  console.log('foreach', results); // []  → 콜백함수가 async/await가 없는 것처럼 작동, 콜백함수만 실행하고 forEach의 임무는 끝남, 콜백함수 내부의 코드가 작동할때까지 기다리지 않음
})();

// sol3-1)
(async function fetchPosts() {
  const promises = postIds.map((id) => fetch(`${BASE_URL}/${id}`));
  const results = await Promise.allSettled(promises)
    .then((responses) => responses.map((response) => response.value))
    .then(async (responses) => {
      const results = [];
      for (let response of responses) {
        const result = await response.json();
        results.push(result);
      }
      return results;
    });

  console.log(results);
})();

// sol3-2) : Promise.allSettled를 2번 사용할 수도 있다!!
(async function fetchPosts() {
  const promises = postIds.map((id) => fetch(`${BASE_URL}/${id}`));
  const results = await Promise.allSettled(promises)
    .then((responses) => responses.map((response) => response.value))
    .then((responses) => Promise.allSettled(responses.map((response) => response.json())))
    .then((posts) => posts.map((p) => p.value));

  console.log(results);
})();

// sol4)
(async function fetchPosts() {
  const results = await Promise.allSettled(
    postIds.map((id) =>
      fetch(`${BASE_URL}/${id}`)
        .then((res) => res.json())
        .then((data) => data)
    )
  );
  console.log(results);
})();
