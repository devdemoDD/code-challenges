// 반복문을 통한 여러 개의 비동기 처리
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
const postIds = [1, 2, 5];

// 1개의 데이터를 받아오는 방법
// async function fetchPost() {
//   const response = await fetch(`${BASE_URL}/2`);
//   const result = await response.json();
//   console.log(result);
// }

// fetchPost();

// sol1)
(async function fetchPosts() {
  const results = [];
  for (let i = 0; i < postIds.length; i++) {
    const response = await fetch(`${BASE_URL}/${postIds[i]}`);
    const result = await response.json();
    results.push(result);
  }

  // console.log('sol1', results);
})();

// sol2)
(async function fetchPosts() {
  const results = [];
  postIds.forEach(async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    const result = await response.json();
    results.push(result);
  });

  // console.log('sol2', results);
})();

// sol3)
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
      // return responses.map(async (response) => await response.json()); // 이렇게 변경되면 안되는 이유! → array method안에서 async-await를 사용하지 못하는 이유
    });

  // console.log('allSettled', results);
})();

// sol4)
(async function fetchPosts() {
  const results = await Promise.allSettled(
    postIds.map(
      (id) => fetch(`${BASE_URL}/${id}`).then((res) => res.json())
      // .then((data) => data)
    )
  );
  console.log(results);
})();

// Q. fetch가 잘 될까??
// A. 배열 메소드 안의 콜백에서는 async-await가 동작하지 않음!
// function fetchPosts() {
//   postIds.forEach(async (id) => await fetch(`${BASE_URL}${id}`).then((res) => console.log(res.json())));
// }

// fetchPosts();

// async function fetchPosts() {
//   const promises = postIds.map((id) => fetch(`${BASE_URL}/${id}`));
//   const results = await Promise.allSettled(promises).then((responses) =>
//     responses.map((res) => res.value.body.then((body) => body.json()))
//   );

//   console.log(results);
// }

// fetchPosts();
