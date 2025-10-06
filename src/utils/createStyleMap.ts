import type { SxProps, Theme } from '@mui/material/styles'

export const createStyleMap = <T extends Record<string, SxProps<Theme>>>(
  styles: (theme: Theme) => T
): T => {
  return styles({} as Theme)
}
