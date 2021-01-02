import * as React from 'react';
import { FC, useState } from 'react';
import styles from '../styles/BasicCheckBox.module.scss';

interface Props {
  style?: React.CSSProperties;
}
const BasicCheckBox: FC<Props> = ({ style }) => {
  const [checked, setChecked] = useState(false);

  const onClickRemember = () => {
    setChecked(!checked);
  }
  return (
    <div className={styles.wrapper} style={style}>
      <div className={styles.checkBox} style={{ backgroundColor: checked ? '#2962FF' : '#dee2e6' }} onClick={onClickRemember}>
        {
          checked && <div className={styles.check} />
        }
      </div>
      Remember me
    </div>
  )
}

export default BasicCheckBox;