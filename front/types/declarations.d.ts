// We need to tell TypeScript that when we write "import styles from './styles.scss' we mean to load a module (to look for a './styles.scss.d.ts'). 
declare module '*.scss';
interface TabItem {
  style?: CSSProperties,
  className?: CSSProperties,
  tabName?: string,
}

interface GetStyleProps {
  item: TabItem,
  index: number,
}


interface ButtonItem {
  image: string,
  onClick?: (e: React.MouseEvent) => void;
  href?: string,
  title?: string,
  subTitle?: string,
}

interface ExpandIcon {
  isActive: boolean,
}

interface HomeData {

}

interface User {
  email: string,
  password: string,
  enabled: boolean,
  name: string,
  profilePic: string | null,
  signFrom: string,
  authOk: boolean,
}

interface UserStore {
  isLoggingIn: boolean,
  data: User | null,
  logIn: (data: User) => void,
  logOut: () => void,
}

interface Project {
  id: string,
  projectName: string,
}