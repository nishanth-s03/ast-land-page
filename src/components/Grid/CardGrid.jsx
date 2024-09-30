import { useState, useEffect, useRef } from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Image from '/assets/vintage-4167444.svg'
import PropTypes from 'prop-types'

const CountUp = ({ end, duration, subtitle, symbol = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = performance.now()
          const step = () => {
            const currentTime = performance.now()
            const progress = Math.min((currentTime - startTime) / duration, 1)
            const randomStep = Math.floor(Math.random() * (end / 10)) + 1
            setCount((prev) =>
              prev + randomStep > end ? end : prev + randomStep
            )
            if (progress < 1) {
              requestAnimationFrame(step)
            }
          }
          requestAnimationFrame(step)
          observer.unobserve(ref.current)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <Box
      display={'flex'}
      flexDirection={{ xs: 'row', sm: 'column' }}
      alignItems={{ xs: 'flex-end', sm: 'flex-start' }}
      gap={{ xs: 1, sm: 0 }}
      pb={0.25}
    >
      <Typography
        ref={ref}
        variant='h5'
        fontFamily={'var(--font-title)'}
        fontWeight={600}
        sx={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {count === end ? `${count}${symbol} ` : `${count} `}
      </Typography>
      <Typography
        variant='subtitle1'
        fontFamily={'var(--font-title)'}
        textTransform={'uppercase'}
      >
        {subtitle}
      </Typography>
    </Box>
  )
}

CountUp.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired,
  symbol: PropTypes.string,
}

const CardGrid = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 2,
        width: { xs: 'calc(100% - 1rem)', sm: 'calc(90% - 2rem)' },
        marginInline: 'auto',
      }}
    >
      <CardMedia
        component={'img'}
        image={Image}
        alt='Astrology_Poster'
        width={'100%'}
        sx={{
          maxWidth: 300,
          paddingBlockStart: { xs: 2, sm: 0 },
          paddingInlineStart: { xs: 0, sm: 2 },
          marginInline: { xs: 'auto', sm: 0 },
          aspectRatio: 1 / 1,
          objectFit: 'contain',
        }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flex: 1,
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Card
          sx={{
            width: 'calc(100% - 1rem)',
            padding: 1,
            background: '#B76E79',
            color: 'var(--light)',
            fontFamily: 'var(--font-title)',
          }}
        >
          <Typography
            variant='h5'
            fontFamily={'var(--font-title)'}
            fontWeight={600}
            gutterBottom
          >
            Story
          </Typography>
          <Typography
            variant='body1'
            fontFamily={'var(--font-title)'}
            fontWeight={600}
          >
            Kerala Prasiddha Jyothisyaru
          </Typography>
          <Typography
            variant='body2'
            fontFamily={'var(--font-title)'}
            gutterBottom
          >
            Pandith Shree Nagarajan who present oneself from a family of
            astrologists and features a rich amount of data throughout. He has
            studied astrology from his forefathers as his prime subjects.
          </Typography>
        </Card>

        <Box
          width={'100%'}
          display={'flex'}
          flexWrap={'wrap'}
          gap={1}
        >
          <Card
            sx={{
              padding: 1,
              background: '#B76E79',
              color: 'var(--light)',
              fontFamily: 'var(--font-title)',
              maxWidth: { sm: 'calc(70% + 1rem)' },
            }}
          >
            <Typography
              variant='h5'
              fontFamily={'var(--font-title)'}
              fontWeight={600}
              gutterBottom
            >
              Mission
            </Typography>
            <Typography
              variant='body2'
              fontFamily={'var(--font-title)'}
              gutterBottom
            >
              {`Pandith Shree Nagarajan alongside his father and forefathers have
            to preserve their lives by lending a hand to people with their Vedic
            puja's, prayers and rituals based social conduct on Hindu customs
            and other religions.`}
            </Typography>
          </Card>

          <Card
            sx={{
              padding: 1,
              background: '#B76E79',
              color: 'var(--light)',
              fontFamily: 'var(--font-title)',
              minWidth: 'calc(15% + 1rem)',
              width: { xs: '100%', sm: 'calc(20% + 1rem)' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { xs: 'center', sm: 'flex-start' },
            }}
          >
            <CountUp
              end={429}
              duration={2500}
              subtitle='Founded'
            />

            <CountUp
              end={1903}
              duration={2500}
              subtitle='Clients'
              symbol='+'
            />
          </Card>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardGrid
