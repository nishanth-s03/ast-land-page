import { useState } from 'react'
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  Divider,
  useMediaQuery,
  useTheme,
  Link,
} from '@mui/material'
import {
  PlaceOutlined,
  MenuOutlined,
  EmailOutlined,
  FacebookOutlined,
  Instagram,
  YouTube,
  WhatsApp,
  CallOutlined,
} from '@mui/icons-material'
import Logo from '/assets/Mahakali_Maa.webp'
import PropTypes from 'prop-types'
import ContactDialog from '../Dialog/ContactDialog'

const FloatingBar = ({ phone }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box
      position={'fixed'}
      bottom={'50%'}
      right={0}
      zIndex={999}
      display={'flex'}
      flexDirection={'column'}
      gap={2}
      padding={0.5}
      border={'1px solid var(--light)'}
      borderRight={0}
      borderRadius={'1rem 0 0 1rem'}
      sx={{ background: '#B76E79', boxShadow: '0 0 4px var(--light)' }}
    >
      <IconButton
        href={`https://wa.me/${phone[0]}`}
        target='_blank'
      >
        <WhatsApp htmlColor='#F8F8FF' />
      </IconButton>
      <Divider
        flexItem
        orientation='horizontal'
        sx={{ borderColor: '#F8F8FF' }}
      />

      <IconButton
        onClick={handleClickOpen}
        aria-label='Phone'
      >
        <CallOutlined htmlColor='#F8F8FF' />
      </IconButton>

      <ContactDialog
        description={phone}
        open={open}
        handleClose={handleClose}
      />
    </Box>
  )
}

FloatingBar.propTypes = {
  phone: PropTypes.string.isRequired,
}

const Menubar = ({ anchorEl, handleClose, open }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <Link
          href='#home'
          color='inherit'
          underline='none'
        >
          Home
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link
          href='#about'
          color='inherit'
          underline='none'
        >
          About
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link
          href='#services'
          color='inherit'
          underline='none'
        >
          Services
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link
          href='#contact'
          color='inherit'
          underline='none'
        >
          Contact
        </Link>
      </MenuItem>
    </Menu>
  )
}

Menubar.propTypes = {
  anchorEl: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf(Element),
  ]),
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

const Header = ({ links }) => {
  return (
    <Box
      id='home'
      paddingInline={1}
      paddingBlock={0.5}
      display={'flex'}
      backgroundColor={'#B76E79'}
    >
      {/* display in mobile view only */}
      <Box
        display={{ xs: 'flex', sm: 'none' }}
        flex={1}
        gap={1}
      >
        <IconButton
          size='small'
          href={links.locationLink}
          target='_blank'
          aria-label='location'
        >
          <PlaceOutlined htmlColor='#F8F8FF' />
        </IconButton>

        <Divider
          flexItem
          orientation='vertical'
        />

        <IconButton
          size='small'
          href={`mailto:${links.email}`}
          aria-label='email'
        >
          <EmailOutlined htmlColor='#F8F8FF' />
        </IconButton>
      </Box>

      {/* displays in non-mobile view  */}
      <Box
        display={{ xs: 'none', sm: 'flex' }}
        flex={1}
        gap={1}
        alignItems={'center'}
      >
        <Button
          startIcon={<PlaceOutlined fontSize='small' />}
          color='inherit'
          href={links.locationLink}
          target='_blank'
          aria-label='location'
        >
          <Typography
            variant='caption'
            textTransform={'capitalize'}
          >
            Udupi, Karnataka
          </Typography>
        </Button>

        <Divider
          flexItem
          orientation='vertical'
        />

        <Button
          startIcon={<EmailOutlined fontSize='small' />}
          color='inherit'
          href={`mailto:${links.email}`}
          aria-label='email'
        >
          <Typography
            variant='caption'
            textTransform={'lowercase'}
          >
            {links.email}
          </Typography>
        </Button>
      </Box>

      <Box
        display={'flex'}
        gap={1}
      >
        <IconButton
          size='small'
          href={links.facebookLink}
          target='_blank'
          title='Facebook'
          aria-label='facebook'
        >
          <FacebookOutlined htmlColor='var(--dark)' />
        </IconButton>
        <IconButton
          size='small'
          href={links.instagramLink}
          target='_blank'
          title='Instagram'
          aria-label='instagram'
        >
          <Instagram htmlColor='var(--dark)' />
        </IconButton>
      </Box>
    </Box>
  )
}

Header.propTypes = {
  links: PropTypes.shape({
    locationLink: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    facebookLink: PropTypes.string.isRequired,
    instagramLink: PropTypes.string.isRequired,
    youtubeLink: PropTypes.string.isRequired,
  }).isRequired,
}

const Navbar = ({ links }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <>
      <Header links={links} />
      <FloatingBar phone={links.phone} />
      <AppBar
        position='sticky'
        color='transparent'
        sx={{
          top: 0,
          background:
            'radial-gradient(farthest-corner at 50% 0, transparent, #f2f2f2cc)',
          backdropFilter: 'blur(0.5rem)',
        }}
      >
        <Toolbar>
          <Box
            display={'flex'}
            flex={1}
            justifyContent={'flex-start'}
            alignItems={'center'}
          >
            <img
              src={Logo}
              alt='Logo'
              style={{
                width: '100%',
                paddingBlock: '0.5rem',
                paddingInlineEnd: '0.25rem',
                maxWidth: 'calc(50px - 0.5rem)',
                objectFit: 'contain',
              }}
            />
            <Typography
              variant={isSmallScreen ? 'h5' : 'body1'}
              component={'div'}
              noWrap
              fontFamily={'var(--font-title)'}
              fontWeight={600}
              textTransform={'capitalize'}
              display={'flex'}
              flexDirection={'column'}
            >
              Kerala Prasiddha Jyothisyaru
              <Typography
                variant='caption'
                fontFamily={'var(--font-title)'}
                textTransform={'capitalize'}
                component={'span'}
              >
                Pandith Prasad Poduval
              </Typography>
            </Typography>
          </Box>
          {/* Inline menu for sm and up */}
          <Box
            display={{ xs: 'none', md: 'flex' }}
            justifyContent='center'
            alignItems='center'
          >
            <Button
              color='inherit'
              href='#home'
            >
              Home
            </Button>
            <Button
              color='inherit'
              href='#about'
            >
              About
            </Button>
            <Button
              color='inherit'
              href='#services'
            >
              Services
            </Button>
            <Button
              color='inherit'
              href='#contact'
            >
              Contact
            </Button>
          </Box>
          {/* Mobile menu button */}
          <IconButton
            onClick={handleClick}
            aria-label='menu dropdown'
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuOutlined htmlColor='var(--dark)' />
          </IconButton>
        </Toolbar>
        <Menubar
          anchorEl={anchorEl}
          handleClose={handleClose}
          open={open}
        />
      </AppBar>
    </>
  )
}

Navbar.propTypes = {
  links: PropTypes.shape({
    locationLink: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    facebookLink: PropTypes.string.isRequired,
    instagramLink: PropTypes.string.isRequired,
    youtubeLink: PropTypes.string.isRequired,
  }).isRequired,
}

export default Navbar
