import { Box, Typography, IconButton } from '@mui/material'
import {
  Facebook,
  Instagram,
  EmailOutlined,
  YouTube,
  CallOutlined,
  WhatsApp,
} from '@mui/icons-material'
import PropTypes from 'prop-types'
import ContactDialog from '../Dialog/ContactDialog'
import { useState } from 'react'

const Footer = ({ links = {} }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: '#B76E79',
        color: '#F8F8FF',
        padding: '2rem',
        mt: 'auto',
      }}
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='flex-start'
        flexWrap='wrap'
      >
        <Box
          component='a'
          href={links.locationLink || '#'}
          target='_blank'
          color='var(--light)'
        >
          <Typography
            variant='h6'
            fontFamily='var(--font-title)'
            fontWeight={600}
            gutterBottom
          >
            Kerala Prasiddha Jyothisyaru
          </Typography>
          <Typography
            variant='body2'
            fontFamily='var(--font-title)'
            textTransform='capitalize'
          >
            Pandith Prasad Poduval
            <br />
            Near Giriyas Building Court
            <br />
            Udupi, Karnataka
          </Typography>
        </Box>

        <Box>
          <Typography
            variant='h6'
            fontFamily='var(--font-title)'
            gutterBottom
          >
            Quick Links
          </Typography>
          <Box
            display='flex'
            flexDirection='column'
          >
            <Typography
              component='a'
              href='#home'
              color='inherit'
              sx={{ cursor: 'pointer', textDecoration: 'none', mb: 1 }}
            >
              Home
            </Typography>
            <Typography
              component='a'
              href='#about'
              color='inherit'
              sx={{ cursor: 'pointer', textDecoration: 'none', mb: 1 }}
            >
              About
            </Typography>
            <Typography
              component='a'
              href='#services'
              color='inherit'
              sx={{ cursor: 'pointer', textDecoration: 'none', mb: 1 }}
            >
              Services
            </Typography>
            <Typography
              component='a'
              href='#contact'
              color='inherit'
              sx={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              Contact
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography
            variant='h6'
            fontFamily='var(--font-title)'
            gutterBottom
          >
            Follow On
          </Typography>
          <Box display='flex'>
            {links.email && (
              <IconButton
                color='inherit'
                href={`mailto:${links.email}`}
                aria-label='Email'
              >
                <EmailOutlined />
              </IconButton>
            )}

            {links.facebookLink && (
              <IconButton
                color='inherit'
                href={links.facebookLink}
                target='_blank'
                aria-label='Facebook'
              >
                <Facebook />
              </IconButton>
            )}

            {links.instagramLink && (
              <IconButton
                color='inherit'
                href={links.instagramLink}
                target='_blank'
                aria-label='Instagram'
              >
                <Instagram />
              </IconButton>
            )}

            {links.phone && (
              <IconButton
                color='inherit'
                onClick={handleClickOpen}
                aria-label='Phone'
              >
                <CallOutlined />
              </IconButton>
            )}

            <ContactDialog
              description={links.phone}
              open={open}
              handleClose={handleClose}
            />

            {links.phone && (
              <IconButton
                color='inherit'
                href={`https://wa.me/${links.phone[0]}/`}
                target='_blank'
                aria-label='WhatsApp'
              >
                <WhatsApp />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>

      <Box
        mt={3}
        textAlign='center'
      >
        <Typography
          variant='body2'
          color='inherit'
          fontFamily='var(--font-title)'
        >
          &copy; {new Date().getFullYear()} Shree Chamudeshwari Devi Jyothisyalaya.
          All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}

Footer.propTypes = {
  links: PropTypes.shape({
    email: PropTypes.string,
    facebookLink: PropTypes.string,
    instagramLink: PropTypes.string,
    locationLink: PropTypes.string,
    phone: PropTypes.string,
    youtubeLink: PropTypes.string,
  }),
}

export default Footer
