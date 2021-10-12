import { Typography } from '@material-ui/core'
import { text } from '@storybook/addon-knobs'

import { MoreVertIcon } from '../../icons'
import { CardActions, CardContent, Grid } from '..'
import { Button } from '../Button'
import { CardHeader } from '../CardHeader'
import { IconButton } from '../IconButton'
import { Card } from './'

export default {
  title: 'Card',
  component: Card,
}

export const playground = (): JSX.Element => {
  const knobs = {
    title: text('title', 'Add'),
    cardContent: text('cardContent', 'Card Content'),
  }

  return (
    <Card>
      <CardHeader title={knobs.title} />
      <CardContent>
        <Typography variant="body2">{knobs.cardContent}</Typography>
      </CardContent>
    </Card>
  )
}

export const examples = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card>
          <CardHeader title="Simple Card" />
          <CardContent>
            <Typography variant="body2">Card Content</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardHeader title="Card with Info Text" />
          <CardContent>
            <Typography variant="body2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci corporis similique commodi amet, ex,
              animi illo cupiditate possimus sint nobis fugit libero cum quidem quibusdam nulla temporibus odit.
              Voluptates, repellat?
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardHeader action={<Button>Action</Button>} title="Card with Action in Header" />
          <CardContent>
            <Typography variant="body2">Card Content</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardHeader
            title="Card with More Actions in Header"
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
          />
          <CardContent>
            <Typography variant="body2">Card Content</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardHeader title="Card with Action Buttons" />
          <CardContent>
            <Typography variant="body2">Card Content</Typography>
          </CardContent>
          <CardActions>
            <Button>Cancel</Button>
            <Button variant="contained">Add</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}
