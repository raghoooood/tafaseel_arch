/**
 * Sanity Studio config mounted on `/tafaseelblog`
 */

import {defineConfig} from 'sanity'
import {dataset, projectId} from './sanity/env'
import {schemaTypes} from './sanity/schemaTypes'
import {structureTool} from 'sanity/structure'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/tafaseelblog',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool({structure})],
})