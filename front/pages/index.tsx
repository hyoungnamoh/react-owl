import { useCallback, useEffect, useRef, useState, FC } from "react";
import { NextPage } from 'next'
import React from 'react';
import styles from '../styles/index.module.scss';
import Buttons from "../components/Buttons";
import Link from "next/link";
import AOS from 'aos';
import "aos/dist/aos.css"
interface Props {
  // userAgent?: string;
}
const Index: NextPage<Props> = ({ }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const items = [
    {
      image: '/images/indexIcon/global.png',
      title: 'Team Work',
      subTitle: 'OWL을 사용하면 팀 구성이 쉽고<br/>어디서든 팀원간의 소통이 가능합니다',
    },
    {
      image: '/images/indexIcon/customizing.png',
      title: 'Customizing',
      subTitle: '개인별 혹은 프로젝트별로<br/>커스터마이징이 가능합니다',
    },
    {
      image: '/images/indexIcon/chatting.png',
      title: 'Chatting',
      subTitle: '일대일, 프로젝트별, 다수의 사람들과<br/>다양한 채팅을 즐겨보세요',
    },
    {
      image: '/images/indexIcon/alarm.png',
      title: 'Alarm',
      subTitle: '알람을 통해서 프로젝트내에서<br/>업무효율을 높여보세요',
    },
  ]

  const getSection4ItemStyle = (): React.CSSProperties => {
    return { margin: 100, marginTop: 0, width: 200, height: 200, marginBottom: 20 };
  }
  const getSection4WrapperStyle = (): React.CSSProperties => {
    return { display: "flex", alignItems: 'center', flexDirection: 'column', marginRight: 100, marginLeft: 100 };
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.section1}>
        <h1 className={styles.section1Text}>OWL</h1>
        <h5 className={styles.section1SubText}>Our Work Leader</h5>
        <p className={styles.section1SubSmallText}>효과적인 팀워크와 가벼워진 업무를 이끌어내는 공간, OWL</p>
      </div>
      <div className={styles.section2}>
        <div className={styles.section2TextContainer}>
          <p className={styles.section2Text} >전체 흐름 이해를 위한 DashBoard</p>
          <p className={styles.section2SubText} style={{ marginTop: 50 }}>프로젝트 내 전반적인 진행상황을 한눈에!</p>
          <p className={styles.section2SubText}>프로젝트별 진행상황을 수치화하여 확인이 가능하며</p>
          <p className={styles.section2SubText}>개인별, 프로젝트별 할당된 업무를 한눈에 확인할 수 있습니다.</p>
        </div>
        <div className={styles.section2ImageContainer} >
          <img src='/images/indexImage/kanbanEx3.JPG' className={styles.section2Image} data-aos="fade-left" data-aos-duration="1500" />
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.section3ImageContainer}>
          <img src='/images/indexImage/CalendarEx5.JPG' className={styles.section3Image} data-aos="fade-right" data-aos-duration="1500" />
        </div>
        <div className={styles.section3TextContainer}>
          <p className={styles.section3Text} >체계적인 스케줄 관리에 필요한 Calendar</p>
          <p className={styles.section3SubText} style={{ marginTop: 50 }}>완벽한 팀워크를 위해 가장 필수적인 첫걸음!</p>
          <p className={styles.section3SubText}>OWL을 이용하면 개인 스케줄 관리 뿐만 아니라</p>
          <p className={styles.section3SubText}>참여하는 프로젝트 내의 프로젝트도 함께 관리 할 수 있습니다.</p>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.section2TextContainer}>
          <p className={styles.section2Text} >업무진행 체크 시 필수인 Kanban Board</p>
          <p className={styles.section2SubText} style={{ marginTop: 50 }}>프로젝트 내 전반적인 진행상황을 한눈에!</p>
          <p className={styles.section2SubText}>컬럼 및 이슈설정을 통해 업무의 진행상태를 실시간 트래킹 하여</p>
          <p className={styles.section2SubText}>프로젝트를 효율적으로 진행할 수 있도록 도와줍니다.</p>
        </div>
        <div className={styles.section2ImageContainer}>
          <img src='/images/indexImage/kanbanEx3.JPG' className={styles.section2Image} data-aos="fade-left" data-aos-duration="1500" />
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.section3ImageContainer}>
          <img src='/images/indexImage/DriveEx3.JPG' className={styles.section3Image} data-aos="fade-right" data-aos-duration="1500" />
        </div>
        <div className={styles.section3TextContainer}>
          <p className={styles.section3Text} >Drive를 통한 효율적인 문서 공유 및 관리</p>
          <p className={styles.section3SubText} style={{ marginTop: 50 }}>완벽한 팀워크를 위해 가장 필수적인 첫걸음!</p>
          <p className={styles.section3Li}>✓ 프로젝트 생성 시 기본 폴더 자동 생성</p>
          <p className={styles.section3Li}>✓ 폴더 생성 기능</p>
          <p className={styles.section3Li}>✓ 검색 기능</p>
        </div>
      </div>
      <div className={styles.section4} data-aos="fade-up" data-aos-duration="1500">
        <p className={styles.section4Title}>OWL YOUR WAY !</p>
        <Buttons items={items} itemStyle={getSection4ItemStyle()} wrapperStyle={getSection4WrapperStyle()} spacing={0} />
      </div>
      <p className={styles.copyright}>Copyright © Designed & Developed by <Link href='https://github.com/hyoungnamoh/react-owl'><a style={{ textDecoration: 'none', color: '#7460ee' }}>OWL and hyoungnam</a></Link> 2021</p>
    </div>
  )
}

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}
export default Index;