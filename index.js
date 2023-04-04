console.log('person1 shows ticket');
console.log('person2 shows ticket');

const createPost = async (post) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

const deletePost = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

const preMovie = async () => {
  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve('popcorn'), 3000);
  });
  const addButter = new Promise((resolve, reject) => {
    setTimeout(() => resolve('butter'), 3000);
  });
  const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('cold drinks'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "I am hungry"`);

  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
  console.log(`Husband: we should go in now`);
  console.log(`Wife: "I don't like popcorn without butter!"`);

  let butter = await addButter;
  console.log(`added ${butter}`);

  console.log(`Husband: Anything else, darling?`);

  let drinks = await getColdDrinks;
  console.log(`got ${drinks}`);

  console.log(`Wife: "Finally, now we can go watch the movie!"`);
  console.log(`Husband: Thanks for the reminder *grin*`);

  // create a new post
  const newPost = { title: 'My New Post', body: 'This is my new post.' };
  await createPost(newPost);

  // delete the post with id 1
  await deletePost(1);

  return ticket;
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');
