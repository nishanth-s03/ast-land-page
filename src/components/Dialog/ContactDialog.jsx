import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import { CallOutlined } from '@mui/icons-material'

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction='left'
      ref={ref}
      {...props}
    />
  )
})

const ContactDialog = ({ open, handleClose, description }) => {
  return (
    <Dialog
      maxWidth='xs'
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby='dialog-title'
      aria-describedby='dialog-description'
      sx={{ '& .MuiDialog-paper': { backgroundColor: 'var(--light)', color: '#B76E79' } }}
    >
      <DialogTitle
        id='dialog-title'
        variant='h5'
        align='center'
        fontFamily={'var(--font-title)'}
        fontWeight={700}
      >
        For any further queries, <br /> contact us
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id='dialog-phone-numbers'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          {description.map((phone, index) => (
            <Button
              key={index}
              size='large'
              href={`tel:${phone}`}
              target='_blank'
              startIcon={<CallOutlined fontSize='small' />}
              fullWidth
              color='inherit'
            >
              {phone}
            </Button>
          ))}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

ContactDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
}

export default ContactDialog
