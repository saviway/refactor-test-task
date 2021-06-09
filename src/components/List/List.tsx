import { IListItem } from '../../domain/IListItem'
import { ListItemMemoized as ListItem } from './ListItem'

/**
 * List components props
 */
export interface IListProps {
  /**
   * Items as an array of IListItem to render
   * @see IListItem
   */
  items: IListItem[]
}

/**
 * Component renders list of given items
 * @param props {IListProps}
 * @constructor
 */
export function List(props: IListProps): JSX.Element {
  const { items } = props

  // For cases when list is empty
  if (items.length === 0) {
    return <div>There are no items to show.</div>
  }

  return (<div>
    {items.map((item: IListItem) => <ListItem key={item.id} item={item} />)}
  </div>)
}