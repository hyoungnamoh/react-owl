//공용으로 사용할 axios base url
const backUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3603';

export { backUrl };