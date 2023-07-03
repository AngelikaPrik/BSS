import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Drawer, List, Typography, styled } from '@mui/material'
import line from '@assets/Sidebar/line.svg'
import closeIcon from '@assets/Sidebar/close.svg'

const categories = ['Brands', 'Face care', 'Body care', 'Sale', 'All products']
const info = ['About us', 'Contact']

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': { borderRadius: '0 10px 10px 0' },
})

const ListItem = styled(Box)({
  position: 'relative',
  margin: '1rem 0',
  paddingBottom: '4px',
  '&:hover': {
    cursor: 'pointer',
    '&::after': {
      width: '100%',
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  '&::after': {
    position: 'absolute',
    content: '""',
    backgroundImage: `url(${line})`,
    backgroundSize: '100%',
    backgroundPosition: '0 100%',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: 0,
    bottom: '-5px',
    opacity: 0,
    transform: 'translateX(-20%)',
    transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out',
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
      <Box width={{ md: 320, sm: 300, xs: 280 }} p='0 4rem 0 6rem'>
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
        </List>
      </Box>
    </StyledDrawer>
  )
}
