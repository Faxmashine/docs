import cn from 'clsx'
import {FC, ReactNode} from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

function renderComponent<T>(
  ComponentOrNode: FC<T> | ReactNode,
  props?: T
) {
  if (!ComponentOrNode) return null
  if (typeof ComponentOrNode !== 'function') return ComponentOrNode
  return <ComponentOrNode {...props} />
}

const config: DocsThemeConfig = {
  docsRepositoryBase: 'https://github.com/mixpanel/docs/tree/main',
  footer: {
    text: '© Mixpanel 2023',
  },
  logo: <span>Mixpanel Documentation</span>,
  project: {
    link: 'https://github.com/mixpanel/docs'
  },
  sidebar: {
    toggleButton: true,

    // Some magic to make top-level pages look like Separators
    // We should probably redesign this at some point
    titleComponent({ title, type, route }) {
      if (type !== 'separator' && route.match(/\//g) && route.match(/\//g).length == 1) {
      	return (
		    <li
		      className={cn(
		        '[word-break:break-word]',
		        title
		          ? 'nx-mt-5 nx-mb-2 nx-px-2 nx-py-1.5 nx-text-sm nx-font-semibold nx-text-gray-900 first:nx-mt-0 dark:nx-text-gray-100'
		          : 'nx-my-4'
		      )}
		    >
            {title}
		    </li>
		  )
      }
      return <>{title}</>
	},
  }
}

export default config
