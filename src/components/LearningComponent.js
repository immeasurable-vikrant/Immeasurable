import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {Jumbotron,Button} from 'reactstrap';

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
    const {  theme } = this.props;

    return (

      <div className="conatiner">
        <Jumbotron className="jumbotron-learning"    >
                     <div className="container">    
                         <div className="row row-header">
                             <div className="col-12 col-sm-10">
                            <h1>Immeasurable</h1>
                             <p><h3>As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.</h3></p>
                                 <Button className="btn-sub">Subscribe Now</Button>
                             </div>
                         </div>
                         </div>
                     </Jumbotron>
      <div className="row-learn">
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Our Approach" />
            <Tab label="The Benefits" />
            <Tab label="Our Research" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          
          <TabContainer dir={theme.direction}>
          <h2>Scientific Rigor</h2>
            <p>At Immeasurable we see meditation as both a practice rooted in ancient history and a topic of modern science. This is why we are as equally committed to providing authentic expertise in meditation and also studying the science of meditation. Science has been an integral part of the Headspace business since day one. We recognize that the only way to know if we are achieving our goal of improving the health and happiness of the world is to measure it. That's where the research comes in.”</p>
            <p>7-person, in-house science department led by Chief Science Officer Dr. Megan Jones Bell, who has +14 years of experience running National Institutes of Health (NIH) and European Research Council (ERC)-funded clinical trials on digital health interventions.</p> 
            <p>Currently in-process on 65+ research studies to scientifically validate the Headspace approach to meditation. The majority of these studies are being conducted by external third-party researchers with no association with Headspace.</p>
            <p>Studies are in partnership with 35+ of the most prestigious scientific research institutions and organizations such as Stanford and USC, run by leading mindfulness experts.</p>
            <p>Immeasurable has 16 published studies in the leading mindfulness peer-reviewed journals showing the impact of Immeasurable on health outcomes such as stress, focus and compassion.</p>
          </TabContainer>

         <TabContainer dir={theme.direction}>
                <h2>The Benefits of Meditation </h2> 
                <p>There are thousands of studies that have shown mindfulness meditation can positively impact mental and physical health. Whether it’s by reducing stress, improving sleep, increasing focus, or improving relationships, research shows mindfulness works. While the research on mindfulness, especially digital mindfulness programs, is still growing, there is evidence to support the use of mindfulness training for many outcomes.</p>
                <br/>
                <p>There are over 2,000 meditation apps out there, but Headspace is one of the only ones committed to advancing the field of mindfulness meditation through clinically-validated research on our product. We are currently in progress on research studies with large national institutions that could be among the largest mindfulness meditation trials ever conducted. We are committed to ensuring Headspace can actually make an impact in our lives. <br /><br />
               

                </p>
        </TabContainer>
                
         <TabContainer dir={theme.direction}>
                <h2>Research shows Immeasurable works</h2>       
                <p> Published studies, external scientists, prestigious research organizations and our science team have shown Immeasurable can improve mental, emotional, and social health.
                <div className="row">
                  <div className="col-12 col-6">
                  7-person, in-house science department led by Chief Science Officer Dr. Megan Jones Bell, who has +14 years of experience running National Institutes of Health (NIH) and European Research Council (ERC)-funded clinical trials on digital health interventions.
                  </div>
                </div>
                <br />
                If you are a researcher interested in assessing the impact of Immeasurable, learn more about our current research priorities and to share a proposal for consideration. <br /><br />
                Immeasurable decreases stress. An internal study that was published in the top mindfulness journal found that only 10 days of Immeasurable reduced stress by 14%.<br /><br />
                Immeasurable can make people kinder to others. Separate studies conducted by Northeastern University found that 3 weeks of Immeasurable increased compassion by 23% and reduced aggression by 57%. In addition, an internal study found 10 days of Immeasurable reduced irritability by 27%. And Kinder to themselves. A study with health professionals found that only 10 days of Immeasurable improved self-compassion. <br /><br />
                Immeasurable improves focus. We spend almost half of our waking hours lost in thought and distracted. Research published in a journal focused on cognitive enhancement showed that Immeasurable improved focus by 14% and significantly decreased mind-wandering. <br /><br />
                Immeasurable can make people happier overall. We put the “website” in happy. A study with students found that just 10 days of Immeasurable increased positivity and well-being. <br /><br />
                And Happier at work. Studies conducted with different populations of employees have found Immeasurable can reduce stress and job strain and improve job satisfaction.
                </p>
                </TabContainer>
                        </SwipeableViews>
      </div>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);