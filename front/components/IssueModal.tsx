import React, { FC, useEffect } from 'react';
import styles from '../styles/IssueModal.module.scss';

const IssueModal: FC<IssueModalProps> = ({ id, column, visible, onClickModalClose }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  if (!visible) {
    return <></>;
  }
  return (
    <div className={styles.modal}>
      <div style={{ width: '50%', height: '70%', backgroundColor: 'white', position: 'relative', flexDirection: 'column' }}>
        <div style={{ justifyContent: 'space-between', display: 'flex' }}>
          <div>
            TEST-1
          </div>
          <div style={{ display: 'flex' }}>
            <div>
              ...
            </div>
            <div onClick={onClickModalClose}>
              닫기
            </div>
          </div>
        </div>
      </div>
      <div style={{ overflowY: 'scroll' }}>
        
      </div>
    </div>
  )
}

export default IssueModal;