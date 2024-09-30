import { useState } from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import PropTypes from 'prop-types'
import CardDialogSlide from '../Dialog/CardDialog'

const ServiceCard = ({ title, description, image }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Card
        sx={{
          filter: 'sepia(0.7) hue-rotate(-30deg) saturate(3)',
          background: '#B76E79',
          color: '#F8F8FF',  
          transform: 'scale(1)',
          transition: 'all 0.3s ease-in',
          [`&:hover`]: {
            filter: 'none',
            transform: 'scale(1.025)',
          },
        }}
      >
        <CardActionArea
          onClick={handleClickOpen}
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <CardMedia
            component={'img'}
            image={image}
            alt='Service Image'
            sx={{ height: 250, maxHeight: 250 }}
          />
          <CardContent>
            <Typography
              variant='h6'
              fontFamily={'var(--font-title)'}
              fontWeight={600}
              textTransform={'capitalize'}
            >
              {title}
            </Typography>
            <Typography
              variant='body2'
              fontFamily={'var(--font-title)'}
              maxWidth={'100%'}
              overflow={'hidden'}
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <CardDialogSlide
        open={open}
        handleClose={handleClose}
        title={title}
        description={description}
        image={image}
      />
    </>
  )
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default ServiceCard
