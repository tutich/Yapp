import { useTheme } from '@mui/material'
import React from 'react'

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.nain;
    const medium = palette.neutral.medium;
  return (
    <div>AdvertWidget</div>
  )
}

export default AdvertWidget