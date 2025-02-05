import { type SchemaTypeDefinition } from 'sanity'

import category from './category'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category,order],
}
