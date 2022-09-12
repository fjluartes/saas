import Grid from '@material-ui/core/Grid';
import React from 'react';

const styleGrid = {
  width: '100%',
  height: '100vh',
  maxWidth: '100%',
  padding: '0px 10px',
  display: 'flex',
  overflow: 'hidden',
};

type Props = {
  firstGridItem?: boolean;
  children: React.ReactNode;
};

class Layout extends React.Component<Props> {
  public render() {
    const { firstGridItem, children } = this.props;

    return (
      <Grid container direction="row" justify="flex-start" alignItems="stretch" style={styleGrid}>
        {firstGridItem ? (
          <Grid
            item
            sm={2}
            xs={12}
            style={{
              borderRight: '1px #707070 solid',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>SVG Icon</p>
              <p>Clicable Avatar</p>
            </div>
            <hr />
            <p />
            <p />
          </Grid>
        ) : null}
        <Grid item sm={10} xs={12}>
          {children}
        </Grid>
      </Grid>
    );
  }
}

export default Layout;