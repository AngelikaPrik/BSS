import { Box, BoxProps, Stack, Typography, styled } from '@mui/material'
import { UseCloseClickOutside } from '@shared/lib/hooks'
import { useState } from 'react'

const LanguageBox = styled(Box)({
  border: '.2rem solid #fff',
  borderRadius: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    cursor: 'pointer',
    border: '.2rem solid #ffffff30',
  },
}) as React.FC<BoxProps>

type LanguageType = 'EN' | 'RU' | 'GE'
type Props = {
  currentLang: LanguageType
  setCurrentLang: React.Dispatch<React.SetStateAction<LanguageType>>
}

const LANGUAGES: LanguageType[] = ['EN', 'RU', 'GE']

const DropdownLangs = ({ currentLang, setCurrentLang }: Props) => {
  return (
    <Stack
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 50%)',
      }}
    >
      {LANGUAGES.map(l => {
        return (
          <Box
            key={l}
            onClick={() => setCurrentLang(l)}
            sx={{ cursor: 'pointer', '&:hover': { opacity: 0.6 } }}
          >
            <Typography fontWeight={275} variant='h4' color='primary'>
              {l !== currentLang && l}
            </Typography>
          </Box>
        )
      })}
    </Stack>
  )
}

export const ChangeLanguage = () => {
  const [showLangs, setShowLangs] = useState<boolean>(false)
  const [currentLang, setCurrentLang] = useState<LanguageType>('EN')

  let itemRef = UseCloseClickOutside(() => setShowLangs(false))

  return (
    <>
      <Box
        onClick={() => setShowLangs(!showLangs)}
        sx={{ position: 'relative' }}
      >
        <LanguageBox
          width={{ md: '40px', xs: '30px' }}
          height={{ md: '40px', xs: '30px' }}
        >
          <Typography
            fontWeight={275}
            variant='h4'
            color='primary'
            fontSize={{ md: '2rem', xs: '1.6rem' }}
          >
            {currentLang}
          </Typography>
        </LanguageBox>
        {showLangs && (
          <Box ref={itemRef}>
            <DropdownLangs
              currentLang={currentLang}
              setCurrentLang={setCurrentLang}
            />
          </Box>
        )}
      </Box>
    </>
  )
}
