import { initMetrics } from 'metrics'

import {
  initOverlayScrollbars,
  initScrollToSection,
  OverlayScrollbarsContainer,
} from 'utils'


initMetrics()


initScrollToSection()

const scrollBarsContainers: OverlayScrollbarsContainer[] = [
  { selector: 'body', theme: 'os-theme-light' },
  { selector: '.popup__text' },
]

initOverlayScrollbars(scrollBarsContainers)
