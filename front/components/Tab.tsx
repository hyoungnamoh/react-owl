import { CSSProperties, FC } from "react";

interface Item {
  onClick?: () => void,
  style?: CSSProperties,
  className?: CSSProperties,
  tabName?: string,
}
interface Props {
  items: Item[],
  className?: 'string',
  style?: CSSProperties,
}
const Tab: FC<Props> = ({items, className, style}) => {
  return (
    <div >

    </div>
  );
};

export default Tab;