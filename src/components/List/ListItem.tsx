import { memo } from 'react'
import { IListItem } from '../../domain/IListItem'

/**
 * Describes ListItem props
 * @see ListItem
 */
export interface IListItemProps {
  /**
   * Single item to render
   */
  item: IListItem
}

/**
 * Renders single list item
 * @param props {IListItemProps}
 * @constructor
 */
export function ListItem(props: IListItemProps): JSX.Element {
  const { item } = props
  return <div className="App-item">{item.title}</div>
}

/**
 * Optimized ListItem component with React.memo.
 */
export const ListItemMemoized = memo<IListItemProps>(
  ListItem,
  (prevProps, nextProps) => prevProps.item.title === nextProps.item.title)