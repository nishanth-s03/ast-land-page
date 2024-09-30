import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Tabs, Tab, Avatar, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const Testimonials = ({ testimonials }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [displayedTestimonials, setDisplayedTestimonials] = useState([])
  const intervalRef = useRef(null) // Store the interval ID

  // Function to select a random subset of up to 5 testimonials
  const getRandomTestimonials = (testimonialsList) => {
    const shuffled = [...testimonialsList].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, Math.min(5, shuffled.length))
  }

  // Memoized function to reset the auto-switch interval
  const resetAutoSwitch = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setSelectedTab((prev) =>
        prev === displayedTestimonials.length - 1 ? 0 : prev + 1
      )
    }, 5000)
  }, [displayedTestimonials.length])

  // Select random testimonials when component mounts or when 'testimonials' prop changes
  useEffect(() => {
    const randomTestimonials = getRandomTestimonials(testimonials)
    setDisplayedTestimonials(randomTestimonials)
    setSelectedTab(0) // Reset to first tab whenever testimonials change
    resetAutoSwitch() // Reset the timer when testimonials change

    return () => clearInterval(intervalRef.current) // Clean up the interval on component unmount
  }, [testimonials, resetAutoSwitch])

  // Handle tab change manually
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
    resetAutoSwitch() // Reset the timer when the user manually changes the tab
  }

  if (displayedTestimonials.length === 0) {
    return null // You can replace this with a loader or a message if desired
  }

  return (
    <Box>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        centered
      >
        {displayedTestimonials.map((testimonial) => (
          <Tab
          key={testimonial.id}
          icon={
            <Avatar sx={{ backgroundColor: '#B76E79' }}>
              {testimonial.username.charAt(0)}
            </Avatar>
          }
          aria-label={testimonial.username}
        />
        ))}
      </Tabs>
      <Box
        padding={2}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        textAlign={'center'}
      >
        <Typography
          variant='h6'
          fontWeight={600}
          fontFamily={'var(--font-title)'}
        >
          {displayedTestimonials[selectedTab].username}
        </Typography>
        <Typography
          variant='body1'
          fontStyle='italic'
          marginTop={1}
          minHeight={100}
        >
          {`"${displayedTestimonials[selectedTab].comment}"`}
        </Typography>
      </Box>
    </Box>
  )
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Testimonials
