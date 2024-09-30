import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import Navbar from './components/Navbar/Navbar'

import './App.css'
import CardGrid from './components/Grid/CardGrid'
import ServiceCard from './components/Card/ServiceCard'
import Home from './components/home/Home'
import Testimonials from './components/Testimonials/Testimonials'
import ContactSection from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import Logo from '/assets/Mahakali_Maa.webp'
import img from '/assets/116656.webp'

import services from './data/services.json'
import links from './data/link.json'
import testimonials from './data/testimonials.json'

const App = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'))
  const columns = isSmallScreen ? [0, 1, 2] : [0]

  return (
    <>
      <Navbar links={links} />
      <Box padding={2}>
        <Home
          isSmallScreen={isSmallScreen}
          links={links}
        />
      </Box>
      <Divider />
      <Box
        id='about'
        marginBlock={2}
        paddingInline={2}
        paddingTop={10}
      >
        <Typography
          variant='h4'
          fontFamily={'var(--font-title)'}
          fontWeight={600}
          align='center'
          color='var(--dark)'
          gutterBottom
        >
          About
        </Typography>
        <CardGrid />
      </Box>
      <Divider />
      <Box
        id='services'
        padding={1}
        paddingBlock={5}
        paddingTop={10}
        width={'calc(100% - 1rem)'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Typography
          variant='h4'
          fontFamily={'var(--font-title)'}
          fontWeight={600}
          align='center'
          color='var(--dark)'
          gutterBottom
        >
          Services
        </Typography>
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexWrap={'wrap'}
          gap={2}
        >
          {columns.map((topIndex) => (
            <Box
              key={`column-${topIndex}`}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'flex-start'}
              alignItems={'flex-start'}
              gap={2}
              width={isSmallScreen ? `calc(93%/${columns.length})` : '93%'}
            >
              {services
                .filter((_, index) => index % columns.length === topIndex)
                .map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service?.title}
                    description={service?.description}
                    image={service?.image ?? img}
                  />
                ))}
            </Box>
          ))}
        </Box>
      </Box>
      <Divider />
      <Box
        id='testimonials'
        paddingBlockStart={5}
        paddingInline={2}
      >
        <Typography
          variant='h4'
          fontFamily={'var(--font-title)'}
          fontWeight={600}
          align='center'
          gutterBottom
        >
          Happy Customers
        </Typography>
        <Testimonials testimonials={testimonials} />
      </Box>
      <Divider />
      <Box
        id='contact'
        paddingBlock={5}
        paddingBlockStart={10}
        paddingInline={2}
        display={'flex'}
        flexDirection={'column'}
        width={'calc(100% - 2rem)'}
      >
        <Typography
          variant='h4'
          fontFamily={'var(--font-title)'}
          fontWeight={700}
          align='center'
          gutterBottom
        >
          Get in Touch
        </Typography>
        <ContactSection
          Logo={Logo}
          isSmallScreen={isSmallScreen}
          links={links}
        />
      </Box>
      <Footer links={links} />
    </>
  )
}

export default App
