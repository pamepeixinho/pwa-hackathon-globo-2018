import React, { Component } from 'react';
import styled from 'styled-components';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LineSeparator = styled.div`
  width: 100%;
  height: 1px;
  background: grey;
`;

const styles = {
  root: {
    minWidth: 245,
    float: 'left',
  },
  title: {
    fontSize: 14,
  },
  button: {
    marginTop: '-16px !important',
  },
  actions: {
    textTransform: 'lowercase',
    float: 'right',
  }
};


class ProductCard extends Component {
  render() {
    const { classes, actionLabel, titleLabel, onAddIconClick, withPlus } = this.props;
    return (
      <Card className={classes.root}>
        <CardContent>
          <Header>
            <Typography className={classes.title} color="textSecondary">
              {titleLabel}
            </Typography>
            { withPlus && <IconButton className={classes.button}>
              <div>+</div>
            </IconButton> }
          </Header>
          <LineSeparator/>
        </CardContent>
        { actionLabel && 
          <CardActions className={classes.actions}>
            <Button size="small" onClick={onAddIconClick}>{actionLabel}</Button>
          </CardActions>
        }
      </Card>
    );
  }
}

export default withStyles(styles)(ProductCard);
