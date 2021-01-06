const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy

module.exports = () => {
  passport.use(new KakaoStrategy({
    clientID: process.env.KAKAO_CLIENT_ID,
    clientSecret: "", // clientSecret을 사용하지 않는다면 넘기지 말거나 빈 스트링을 넘길 것
    callbackURL: process.env.KAKAO_CALLBACK_URL,
  },
    (accessToken, refreshToken, profile, done) => {
      // 사용자의 정보는 profile에 들어있다.
      done(null, profile)
    }
  ))
};