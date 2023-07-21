// 반복문을 통한 여러개의 비동기 처리
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
const postIds = [1, 2, 5, 10];

// Q. fetch가 잘 될까??
// A. 콜백에서는 제대로 작동하지 않음! → 콜백은 (어디선가) 이미 구현 되어있는 로직에 의해서 작동함
// function fetchPosts() {
//   postIds.forEach(async (id) => await fetch(`${BASE_URL}${id}`).then((res) => console.log(res.json())));
// }

// fetchPosts();

async function fetchPosts() {
  const promises = postIds.map((id) => fetch(`${BASE_URL}/${id}`));
  const responses = await Promise.allSettled(promises).then((values) => values.map((value) => value.value.json()));
  // const result = responses.map((res) =>
  //   res.value.json().then((data) => ({
  //     data,
  //     status: res.status,
  //   }))
  // );
  // console.log(result);
  console.log(responses);
}

fetchPosts();
