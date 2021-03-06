// We need to tell TypeScript that when we write "import styles from './styles.scss' we mean to load a module (to look for a './styles.scss.d.ts'). 
declare module '*.scss';

type TabType = 'Dash Board' | 'Calendar' | 'Kanban Board' | 'Notice' | 'Drive';

interface TabItem {
  style?: CSSProperties,
  className?: CSSProperties,
  tabName?: TabType,
  onClick?: () => void,
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

interface NoticeItem {
  id: number,
  title: string,
  writer: string,
  createdAt: dayjs.Dayjs,
  view: number,
}

interface CalendarProps {
  year: number,
  month: number,
  className?: string,
  style?: CSSProperties,
  headerHeight?: number,
}

type days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] | ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
type day = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';

interface getDayStyleProps {
  dIndex: number,
}
interface getDayGroundStyleProps {
  isToday: boolean | undefined,
  dIndex: number,
}

interface Week {
  day: number,
  isToday?: boolean,
}

interface OnClickTabProps {
  item: TabItem,
  index: number,
}

interface PagingButtonProps {
  totalPage: number,
  currentPage: number,
  movePage: (page: number) => void,
}

interface PagingBuggonVisibleProps {
  visible: boolean,
}

interface PagingItemProps {
  key: string,
  pageText?: string,
  pageNumber: number,
  movePage: (page: number) => void,
  isActive?: boolean,
  disabled?: boolean,
  image?: string,
}

interface GetPagingItemStyleProps {
  type: string,
}

interface KanbanBoardDummyDataItem {
  belongTo: string,
  index: number,
  title: string,
  content: string,
  id: string,
}

interface DragData {
  target: BaseSyntheticEvent,
  index: number,
  columnIndex: number,
  move_down: number[],
  move_up: number[],
  updateLists: KanbanBoardDummyDataItem[][],
}

interface IssueProps {
  dragData: DragData,
  columnIndex: number,
  index: number,
  isDragged: boolean,
  _onDragOver: DragEventHandler<T>,
  _onDragStart: DragEventHandler<T>,
  _onDragEnd: DragEventHandler<T>,
  _onDragEnter: DragEventHandler<T>,
  _onDragLeave: DragEventHandler<T>,
  onClick: (issue?: KanbanBoardDummyDataItem | null) => void,
  item: KanbanBoardDummyDataItem,
}

interface IssueModalProps {
  issue: KanbanBoardDummyDataItem | null,
  column?: string,
  visible: boolean,
  onClickModalClose: () => void,
}

type KanbanSearchOption = 'Content' | 'Label' | 'Assignee' | 'Priority';