module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { //앞에 대문자로 만들면 테이블 만들어질 때 자동으로 앞에 소문자로 바뀌고 뒤에 s붙음
    email: {
      type: DataTypes.STRING(100),
      allowNull: false, //false 면 필수 true면 선택
      unique: true,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false, //필수
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false, //필수
    },
    profilepic: {
      type: DataTypes.STRING(2000),
      allowNull: true, //필수
    },
    signfrom: {
      type: DataTypes.STRING(100),
      allowNull: true, //필수
    },
    authok: {
      type: DataTypes.BOOLEAN(20),
      allowNull: true, //필수
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  User.associate = (db) => {
  };
  // db.User.hasMany(db.Diary, {as: 'Diaries'});
  // db.User.hasMany(db.Todo, {as: 'Todo'});
  // db.User.belongsToMany(db.Diary, {through: 'Like', as: 'Liked'}); //다 : 다 형식으로 through로 테이블이 만들어짐, as 컬럼명
  // db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'followingId'});
  // db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'followerId'});
  // db.User.hasMany(db.ProfileImage, {as: 'ProfileImage'});
  // `email`      VARCHAR(200) NOT NULL COMMENT '이메일', -- 이메일
  // `password`   VARCHAR(200) NULL     COMMENT '비밀번호', -- 비밀번호
  // `enabled`    BIT          NOT NULL DEFAULT 1 COMMENT '계정사용여부', -- 계정사용여부
  // `name`       VARCHAR(100) NOT NULL COMMENT '이름', -- 이름
  // `profilepic` MEDIUMTEXT   NULL     COMMENT '프로필사진', -- 프로필사진
  // `signfrom`   VARCHAR(100) NULL     COMMENT '가입경로', -- 가입경로
  // `authok`     INT          NOT NULL DEFAULT 0 COMMENT '이메일인증상태' -- 이메일인증상태
  return User;
};