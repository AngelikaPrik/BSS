import {
  Box,
  IconButton,
  InputBase,
  List,
  ListItem,
  styled,
  Typography,
} from '@mui/material'
import { useState } from 'react'

import searchIcon from '@assets/header/search.svg'

import searchIconDark from '@assets/header/search_dark.svg'
import { UseCloseClickOutside } from '@shared/lib/hooks'

const Overlay = styled(Box)({
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  background: 'rgba(0, 0, 0, 0.20)',
  backdropFilter: 'blur(7.5px)',
  zIndex: '10',
})

const ModalBox = styled(Box)({
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -30%)',
  backgroundColor: '#fff',
  width: '60rem',
  '@media (max-width:750px)': {
    width: '80%',
  },
  '@media (max-width:450px)': {
    width: '90%',
  },
  minHeight: '10rem',
  borderRadius: '1rem',
  padding: '1rem 2rem',
})

const InputBox = styled(Box)({
  padding: '.5rem 1rem',
  background: '#F5EEF1',
  borderRadius: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 0 1px 1px #00000020',
})

const SearchedProduct = styled(ListItem)({
  padding: '2rem',
  marginBottom: '1rem',
  background: '#F5EEF1',
  borderRadius: '1rem',
  transition: 'box-shadow .1s linear',
  '&:hover': {
    cursor: 'pointer',
    boxShadow: '0 0 1px 1px #00000020',
  },
})

const StyledInput = styled(InputBase)({
  width: '100%',
  fontSize: '2rem',
})

export const Search = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [inputVal, setInputVal] = useState('')

  let itemRef = UseCloseClickOutside(() => {
    setIsOpen(false)
    setInputVal('')
  })

  return (
    <>
      <IconButton
        sx={{ width: { md: '30px', xs: '20px' }, p: 0 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img width='100%' src={searchIcon} alt='search' />
      </IconButton>

      {isOpen && (
        <Overlay>
          <ModalBox ref={itemRef}>
            <InputBox>
              <StyledInput
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                placeholder='Search...'
              />
              <Box width={{ sm: '30px', xs: '20px' }}>
                <img width='100%' src={searchIconDark} alt='search' />
              </Box>
            </InputBox>
            <List sx={{ mt: '2rem' }}>
            </List>
          </ModalBox>
        </Overlay>
      )}
    </>
  )
}
