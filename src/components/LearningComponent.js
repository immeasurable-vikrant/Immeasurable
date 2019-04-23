import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1200,
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="The Science " />
            <Tab label="The Meditation" />
            <Tab label="The Learning" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><h2>Scientific Rigor

At Headspace we see meditation as both a practice rooted in ancient history and a topic of modern science. This is why we are as equally committed to providing authentic expertise in meditation and also studying the science of meditation. Science has been an integral part of the Headspace business since day one. We recognize that the only way to know if we are achieving our goal of improving the health and happiness of the world is to measure it. That's where the research comes in.”</h2>

</TabContainer>
          <TabContainer dir={theme.direction}>Sadhguru: After the game of dice, the Pandavas had to leave their kingdom. They lost not only their inheritance but also what they had earned and built – all in a matter of an hour or two – with a roll of dice, not in battle or otherwise, as it should have been. Now, they prepared to leave for the forest. In a sense the whole situation moved from civilized ways of handling life to the ways of the wild, where might is right. It was a transition from properly laid out rules and everyone talking about rules, to turning into the wild.
When they set out to go into the forest, instead of wearing royal robes, they appropriately dressed in simple hermit’s clothes. As they walked out of Hastinapur, people gathered and wailed. A large number of people loved the Pandava brothers, particularly Yudhishthira, because he had earned the reputation of being the most evenhanded ruler that they had ever seen. So when the Pandavas and Draupadi left, a lot of people wanted to go with them to the forest. If you are going into the forest and a lot of people come with you, it is not of help, it is a lot of trouble. It took a lot of convincing to make people understand and get them to stay away. People walked behind them for miles. But they were turned away except for Dhaumya, their family priest and a little over a dozen other brahmins, to take care of the ritual part of their lives.</TabContainer>
          <TabContainer dir={theme.direction}>They went into the Kamakhya Vana, a forest that was about a day’s travel away. By evening, they reached the forest and camped near a river. Now, these brahmins who had come with them set up their rituals and things to support the family. No one spoke to anyone. Everyone was distraught except Yudhishthira – he looked around the forest and started enjoying it. While the others were grief-stricken because they had lost everything, Yudhishthira looked at the green forest, the chirping birds – everything was so beautiful, far more beautiful than the palace. He started going around with a smile on his face. Looking at the smile upon his face, Bhima and particularly Draupadi got incensed. She was angry because of what had happened to her, because of losing the comfort, clothes, and conveniences they had in the palace. A woman is generally more dependent on those things than a man, because of the very way she is made. A house is a lot more important for the feminine than the masculine. Men would rather sleep under a tree.

</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);