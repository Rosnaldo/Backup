const { getUserName, getRepos } = require('./jest1.js')

test('should resolve user name', async () => {
  const mark = await getUserName(4);
  expect(mark).toBe('Mark');
});

test('should reject user name', async () => {
  try {
    await getUserName(3);
  } catch (e) {
    expect(e).toMatchObject({error: 'User with 3 not found.'})
  }
});

test('github url', () => {
  const url = 'https://api.github.com/users/tryber/repos';
  const repos = ['sd-01-week4-5-project-todo-list',
    'sd-01-week4-5-project-meme-generator'];
  
  return getRepos(url)
  .then(data => repos.some(repo => data.includes(repo)))
  .then(value => expect(value).toBe(true));
});




