import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const HomeCard = ({ imageSrc, altTitle, mainTitle, subTitle }) => {
  return (
    <Card
      sx={{
        background: '#B76E79',
        color: '#FFFFFF',
        aspectRatio: 1 / 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '45%',
        maxWidth: 300,
        maxHeight: 300,
        filter: 'sepia(0.5) hue-rotate(-10deg) saturate(2.5)',
        transform: 'scale(1)',
        transition: 'all 0.3s ease-in',
        [`&:hover`]: {
          filter: 'none',
          transform: 'scale(1.025)',
        },
      }}
    >
      <CardMedia
        component={'img'}
        image={imageSrc}
        alt={altTitle}
        height={'100%'}
        filter= { 'sepia(0.5) hue-rotate(-10deg) saturate(2.5)'}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='body1'
          fontFamily={'var(--font-title)'}
          fontWeight={600}
          textTransform={'capitalize'}
          noWrap
          align='center'
        >
          {mainTitle}
        </Typography>
        <Typography
          variant='body2'
          align='center'
          textTransform={'capitalize'}
        >
          {subTitle}
        </Typography>
      </CardContent>
    </Card>
  )
}

HomeCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altTitle: PropTypes.string.isRequired,
  mainTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

export default HomeCard
