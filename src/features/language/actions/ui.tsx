import { Box, BoxProps, Stack, Typography, styled } from '@mui/material';
import { useState } from 'react'

const MyBox = styled(Box)({
  border: '.15rem solid #fff',
  borderRadius: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.4rem 1rem',
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
          <Box key={l} onClick={() => setCurrentLang(l)}>
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

  return (
    <>
      <Box
        onClick={() => setShowLangs(!showLangs)}
        sx={{ position: 'relative' }}
      >
        <MyBox>
          <Typography fontWeight={275} variant='h4' color='primary'>
            {currentLang}
          </Typography>
        </MyBox>
        {showLangs && (
          <DropdownLangs
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
          />
        )}
      </Box>
    </>
  )
}
