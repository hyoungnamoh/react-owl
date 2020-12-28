const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const path = require('path');
const passport = require('passport');
const db = require('../models');
const multer = require('multer');
const { isLoggedIn } = require('./middleware');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');

AWS.config.update({
    region: 'ap-northeast-2',
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
});
Z
//업로드 설정
const upload = multer({
    storage: multerS3({ //저장 옵션 서버쪽 디스크에 저장
        s3: new AWS.S3(),
        bucket: 'react-carddiary',
        key(req, file, cb) {
            cb(null, `original/${+new Date()}${path.basename(file.originalname)}`);
        },
    }),
    limits: { fileSize: 20 * 1024 * 1024 }, //파일크기 제한 옵션
});

// 내 정보 가져오기
router.get('/', async (req, res, next) => {
    try {
        const user = await db.User.findOne({
            where: {id: req.user.id},
            include: [{
                model: db.ProfileImage,
                as: 'ProfileImage',
                attributes: ['src'],
            },],
        })
        delete user.password;
        return res.json(user);
    } catch (e) {
        console.error(e);
        next(e);
    }
});



module.exports = router;