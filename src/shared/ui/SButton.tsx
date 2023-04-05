import { ButtonBase, ButtonBaseProps } from '@mui/material'
import { styled } from '@mui/material/styles'

const Btn = styled(ButtonBase)(({ theme }) => ({
  borderRadius: '1rem',
  fontWeight: 400,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  padding: '1.2rem 0',
  fontSize: '2rem',
  lineHeight: 1,
  fontFamily: theme.typography.fontFamily,
})) as React.FC<ButtonBaseProps>

export default function SButton({ btnName, children }: IProps) {
  const styles = () => {
    if (btnName == 'cardBtn') {
      return {
        background: '#fff',
        color: '#000',
        border: '1px solid #000',
        '@media (min-width: 1200px)': {},
      }
    }
    if (btnName == 'formBtn') {
      return {
        background: '#A397A1',
        color: '#fff',
      }
    }
    if (btnName == 'loginBtn') {
      return {
        background: '#fff',
        color: '#000',
      }
    }
  }
  return <Btn sx={styles()}>{children}</Btn>
}

interface IProps {
  btnName: 'cardBtn' | 'loginBtn' | 'formBtn'
  children: string
}
