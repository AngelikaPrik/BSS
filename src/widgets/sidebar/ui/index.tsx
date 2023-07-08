import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Drawer, List, Typography, styled } from '@mui/material'
import closeIcon from '@assets/Sidebar/close.svg'
import { ChangeLanguage } from '@features/language/actions/ui'

const categories = ['Brands', 'Face care', 'Body care', 'Sale', 'All products']
const info = ['About us', 'Contact']

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': { borderRadius: '0 10px 10px 0' },
})

const ListItem = styled(Box)({
  position: 'relative',
  paddingBottom: '4px',
  borderRadius: '1rem',
  transition: 'all .3s ease-in-out',
  padding: '.5rem 0',
  '&:hover': {
    background: '#634F6052',
    cursor: 'pointer',
    paddingLeft: '1rem',
  },
})

const ListItemText = styled(Typography)({
  textTransform: 'uppercase',
  fontSize: '32px',
  color: '#454545',
})

export const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <StyledDrawer anchor='left' open={open} onClose={prev => setOpen(!prev)}>
      <Box width={{ md: 320, sm: 300, xs: 280 }} p='0 4rem'>
        <Box
          width={{ lg: 32, xs: 24 }}
          m='15% 0 10%'
          sx={{ cursor: 'pointer' }}
          onClick={prev => setOpen(!prev)}
        >
          <img width='100%' src={closeIcon} alt='close' />
        </Box>
        <List>
          {categories.map(text => (
            <ListItem key={text}>
              <Link to={`/${text.replace(/\s+/g, '-').toLowerCase()}`}>
                <ListItemText variant='h2'>{text}</ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
        <List sx={{ mt: '2rem' }}>
          {info.map(text => (
            <ListItem key={text}>
              <Link to={`/${text.replace(/\s+/g, '-').toLowerCase()}`}>
                <ListItemText variant='h2'>{text}</ListItemText>
              </Link>
            </ListItem>
          ))}
          <Box
            mt={2}
            width='50px'
            sx={{ display: { sm: 'none', xs: 'block' }, bgcolor: 'black' }}
          >
            <ChangeLanguage />
          </Box>
        </List>
      </Box>
    </StyledDrawer>
  )
}
