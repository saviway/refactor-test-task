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

export interface IListSharedProps {
  /**
   * Function for format List's title
   * @param title
   */
  titleFormat?: (title: string) => string
}

/**
 * Component renders list of given items
 * @param props {IListProps & IListSharedProps}
 * @constructor
 */
export function List(props: IListProps & IListSharedProps): JSX.Element {
  const { items, titleFormat } = props

  // For cases when list is empty
  if (items.length === 0) {
    return <div>There are no items to show.</div>
  }

  return (<div>
    {items.map((item: IListItem) => <ListItem key={item.id} item={item} titleFormat={titleFormat} />)}
  </div>)
}