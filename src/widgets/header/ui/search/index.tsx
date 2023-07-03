import { Box, Icon, InputBase, styled } from '@mui/material'
import { useState } from 'react'

import searchIcon from '@assets/header/search.svg'

const SearchBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  transition: 'all 1s',
  width: '100%',
  height: '100%',
  borderRadius: '1rem',
  padding: '6px',
  '&:hover, &.expanded': {
    width: '275px',
    cursor: 'pointer',
    background: '#ffffff30',
    '& .MuiInputBase-root': {
      display: 'block',
    },
    '& span': {
      width: '40px',
      height: '40px',
    },
  },
})

const StyledInput = styled(InputBase)({
  position: 'absolute',
  top: '50%',
  left: 0,
  transform: 'translate(0, -50%)',
  width: '90%',
  display: 'none',
  fontSize: '2rem',
  borderRadius: '20px',
  padding: '0 10px',
})

const StyledIcon = styled(Icon)({
  padding: '10px',
  width: '50px',
  height: '50px',
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  right: 0,
  borderRadius: '50%',
  color: '#07051a',
  fontSize: '1.2em',
  transition: 'all 1s',
})


export const Search = () => {
  const [inputVal, setInputVal] = useState('')

  return (
    <Box sx={{ position: 'relative', width: '42px', height: '42px' }}>
      <SearchBox className={inputVal ? 'expanded' : ''}>
        <StyledIcon>
          <img width='100%' src={searchIcon} alt='search' />
        </StyledIcon>
        <StyledInput
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
        />
      </SearchBox>
    </Box>
  )
}
