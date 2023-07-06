import { type SchemaTypeDefinition } from 'sanity'
import { autopart } from './autopart'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [autopart],
}
