export function getStarsRankingUrl() {
  const users = [
    'kitiho',
  ]

  const query = [
    ...users.map(i => `user:${i}`),
  ].join(' ')

  const url = `https://github.com/search?l=&o=desc&s=stars&type=Repositories&q=${encodeURIComponent(query)}`
  return url
}
