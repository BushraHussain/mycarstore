import { type SchemaTypeDefinition } from 'sanity'
import { autopart } from './autopart'
import { category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [autopart, category],
}
