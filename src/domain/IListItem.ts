/**
 * Item identifier type alias
 */
export type ListItemID = string | number

/**
 * Describes List item
 */
export interface IListItem {
  id: ListItemID
  title: string
}