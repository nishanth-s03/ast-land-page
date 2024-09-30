import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  Typography,
  Alert,
  Collapse,
} from '@mui/material'
import PropTypes from 'prop-types'
import { CallOutlined, EmailOutlined } from '@mui/icons-material'
import axios from 'axios'

const mailUrl = import.meta.env.VITE_MAIL_URL

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  maxLength,
  pattern,
  ...props
}) => {
  const handleInput = (e) => {
    if (type === 'tel') {
      e.target.value = e.target.value
        .replace(/(?!^\+)[^\d]/g, '')
        .replace(/^(\d+|\+\d*).*/, '$1')
    }
  }

  const handleClick = (e) => {
    if (e.target.value) {
      e.target.select()
    }
  }

  return (
    <TextField
      label={label}
      name={name}
      size='small'
      type={type}
      value={value}
      onChange={onChange}
      onInput={handleInput}
      onClick={handleClick}
      sx={{ fontFamily: 'var(--font-title)' }}
      inputProps={{ maxLength, pattern }}
      required
      {...props}
    />
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
}

const ContactForm = ({ links }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    message: '',
  })

  const [buttonText, setButtonText] = useState('Send message')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertSeverity, setAlertSeverity] = useState('success')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    if (buttonText !== 'Send message') {
      setButtonText('Send message')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setButtonText('Sending...')

    const { name, contactNumber, email, message } = formData

    try {
      await axios.post(`${mailUrl}`, {
        name,
        phone: contactNumber,
        email,
        message,
      })
      setAlertMessage('Your message was sent successfully!')
      setAlertSeverity('success')
      setButtonText('Sent')
    } catch (error) {
      console.error('Error sending message:', error)
      setAlertMessage('Failed to send your message. Please try again later.')
      setAlertSeverity('error')
      setButtonText('Failed to send')
    } finally {
      setIsSubmitting(false)
      setFormData({
        name: '',
        contactNumber: '',
        email: '',
        message: '',
      })

      setTimeout(() => {
        setButtonText('Send message')
      }, 3000)
    }
  }

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage('')
      }, 5000) // 5 seconds timeout

      return () => clearTimeout(timer) // Cleanup timeout on component unmount or alertMessage change
    }
  }, [alertMessage])

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={2}
      maxWidth={350}
      position={'relative'}
    >
      <Collapse
        in={!!alertMessage}
        sx={{ position: 'absolute', bottom: 0, right: 'auto', zIndex: 999 }}
      >
        <Alert
          severity={alertSeverity}
          onClose={() => setAlertMessage('')}
          sx={{ alignItems: 'center' }}
        >
          {alertMessage}
        </Alert>
      </Collapse>

      <Card sx={{ maxWidth: 350, aspectRatio: 1 / 1 }}>
        <CardContent>
          <Typography
            variant='h5'
            fontFamily={'var(--font-title)'}
            fontWeight={600}
            sx={{ textIndent: 5, mt: 1, marginInline: 0 }}
          >
            Contact Form
          </Typography>
          <Typography
            variant='body2'
            fontFamily={'var(--font-title)'}
            fontWeight={300}
            sx={{ textIndent: 5, mb: 2, marginInline: 0 }}
          >
            Ask your queries right away
          </Typography>
          <form
            onSubmit={handleSubmit}
            autoComplete='off'
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={1}
            >
              <Box
                display={'flex'}
                gap={1}
              >
                <InputField
                  label='Name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputField
                  label='Contact Number'
                  name='contactNumber'
                  type='tel'
                  pattern='^(\+?[0-9]{10,15})$'
                  maxLength={15}
                  value={formData.contactNumber}
                  onChange={handleChange}
                  title='Please enter a number between 10 to 13 digits'
                />
              </Box>
              <InputField
                label='Email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
              />
              <InputField
                label='How can we help?'
                name='message'
                multiline
                rows={3}
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type='submit'
                variant='outlined'
                color='inherit'
                disabled={isSubmitting}
                sx={{
                  mt: 1,
                  background: '#B76E79',
                  color: '#F8F8FF',
                }}
              >
                {buttonText}
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>

      <Divider
        flexItem
        orientation='horizontal'
      />

      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'flex-start'}
      >
        <Button
          startIcon={<EmailOutlined fontSize='small' />}
          color='inherit'
          href={`mailto:${links.email}`}
          aria-label='email'
          fullWidth
        >
          <Typography
            variant='caption'
            textTransform={'lowercase'}
            fontFamily={'var(--font-title)'}
          >
            {links.email}
          </Typography>
        </Button>
        <Button
          startIcon={<CallOutlined fontSize='small' />}
          color='inherit'
          href={`tel:${links.phone[0]}`}
          aria-label='phone'
          fullWidth
        >
          <Typography
            variant='caption'
            textTransform={'lowercase'}
            fontFamily={'var(--font-title)'}
          >
            {links.phone[0]}
          </Typography>
        </Button>
        <Button
          startIcon={<CallOutlined fontSize='small' />}
          color='inherit'
          href={`tel:${links.phone[1]}`}
          aria-label='phone'
          fullWidth
        >
          <Typography
            variant='caption'
            textTransform={'lowercase'}
            fontFamily={'var(--font-title)'}
          >
            {links.phone[1]}
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

ContactForm.propTypes = {
  links: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
}

export default ContactForm
