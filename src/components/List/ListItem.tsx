import { memo } from 'react'
import { IListItem } from '../../domain/IListItem'
import {IListSharedProps} from './List'

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

const fallbackFormat = (t: string): string => t

/**
 * Renders single list item
 * @param props {IListItemProps & IListSharedProps}
 * @constructor
 */
export function ListItem(props: IListItemProps & IListSharedProps): JSX.Element {
  const { item, titleFormat } = props
  const formatFn = titleFormat ? titleFormat : fallbackFormat
  return <div className="App-item">{formatFn(item.title)}</div>
}

/**
 * Optimized ListItem component with React.memo.
 */
export const ListItemMemoized = memo<IListItemProps & IListSharedProps>(
  ListItem,
  (prevProps, nextProps) => prevProps.item.title === nextProps.item.title)