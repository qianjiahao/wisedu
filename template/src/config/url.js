export default {
  host: process.env.NODE_ENV === 'production' ? location.origin + location.pathname.substring(0, location.pathname.indexOf('/', 1)) + '/' : 'http://amptest.wisedu.com/xsfwfw/',
  wxCheckSign: 'http://res.wisedu.com:9090/checkSign',
  baseURL: ''
}
