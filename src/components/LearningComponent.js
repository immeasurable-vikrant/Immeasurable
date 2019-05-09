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
          <div className="row row-1">
          <div className="col-12 col-md-10 offset-1">
            <h2>Scientific Rigor</h2>
            <p>At Immeasurable we see meditation as both a practice rooted in ancient history and a topic of modern science. This is why we are as equally committed to providing authentic expertise in meditation and also studying the science of meditation. Science has been an integral part of the Headspace business since day one. We recognize that the only way to know if we are achieving our goal of improving the health and happiness of the world is to measure it. That's where the research comes in.”</p>
          </div>
          </div>
            <div className="row row-2">
            <div className="col-12 col-md-6">
              <img src="assets/images/doctor.png" alt="Doctor"/>
             </div>
            <div className="col-12 col-md-6">
            <p>There are over 2,000 meditation apps out there, but Headspace is one of the only ones committed to advancing the field of mindfulness meditation through clinically-validated research on our product. We are currently in progress on research studies with large national institutions that could be among the largest mindfulness meditation trials ever conducted. We are committed to ensuring Headspace can actually make an impact in our lives.</p> 
            </div>
            </div>
            <div className="row row-3">
            <div className="col-12 col-md-5 offset-1"> 
            <img src="assets/images/doctor1.png" alt="Doctor1"/>
            <p>7-person, in-house science department led by Chief Science Officer Dr. Megan Jones Bell, who has +14 years of experience running National Institutes of Health (NIH) and European Research Council (ERC)-funded clinical trials on digital health interventions.</p>
            <br/>
            <img src="assets/images/doctor2.png" alt="Doctor2"/>
            <p>Studies are in partnership with 35+ of the most prestigious scientific research institutions and organizations such as Stanford and USC, run by leading mindfulness experts.</p>
            </div>
            <div className="col-12 col-md-5 offset-1">
            <img src="assets/images/doctor3.png" alt="Doctor3"/>
            <p>Currently in-process on 65+ research studies to scientifically validate the Headspace approach to meditation. The majority of these studies are being conducted by external third-party researchers with no association with Headspace.</p>
            <br/>
            <img src="assets/images/doctor4.png" alt="Doctor4"/>
            <p>Headspace has 16 published studies in the leading mindfulness peer-reviewed journals showing the impact of Headspace on health outcomes such as stress, focus and compassion.</p>
            </div>
            </div>
          </TabContainer>

         <TabContainer dir={theme.direction}>
         <div className="container">
                <div className="row">
                <div className="col-12 col-md-6 offset-3">
                <h2>The Benefits of Meditation </h2> 
                <p>There are thousands of studies that have shown mindfulness meditation can positively impact mental and physical health. Whether it’s by reducing stress, improving sleep, increasing focus, or improving relationships, research shows mindfulness works. While the research on mindfulness, especially digital mindfulness programs, is still growing, there is evidence to support the use of mindfulness training for many outcomes.</p>
                <br/>
                </div>
                </div>
                <div className="row">
                  <img src="assets/images/stressed.png" alt="Stress"/>
                  <img src="assets/images/focused.png" alt="Focused" />
                  <img src="assets/images/mood.png" alt="mood" />
                  <img src="assets/images/compassion.png" alt="compassion" />
                  <img src="assets/images/anxiety_a.png" alt="agression" />
                  <img src="assets/images/self_compassion.png" alt="self-compassion" />
                  <img src="assets/images/Relationships.png" alt="Work" />
                  <img src="assets/images/self_compassion11.png" alt="clinicalpopulations" />
                  <img src="assets/images/anxiety_.png" alt="Anxiety (Preliminary Evidence)" />
                  <img src="assets/images/depression.png" alt="depression" />
                  </div>
                <div className="row">
               <h2> Research shows Headspace can positively impact</h2> 
               <div className="row">
               <div className="col-12 col-md-6">
               <img src="assets/images/brain.png" alt="Brain"/>
               </div>
               <div className="col-12 col-md-6">
               <h2>How it works</h2>
                <p>At Headspace, we like to think of meditation as exercise for the brain. Through meditation, we can build up areas of our brain and actually rewire it to enhance positive traits like focus and decision making and diminish the less positive ones like fear and stress. Most importantly, this means there is a possibility to change your brain for the better in a way that is long-lasting.</p>
                </div>
               </div>
               
                </div>
                
                </div>
        </TabContainer>
                
         <TabContainer dir={theme.direction}>
         <div className="container">
         <div className="row row-1">
          <div className="col-12 col-md-10 offset-1">
            <h2>Research shows Headspace works</h2>
            <p>Published studies, external scientists, prestigious research organizations and our science team have shown Headspace can improve mental, emotional, and social health.<br/>
            If you are a researcher interested in assessing the impact of Headspace, learn more about our current research priorities and to share a proposal for consideration.</p>
          </div>
          </div>
            <div className="row row-2">
            <div className="col-12 col-md-6">
            <p>Headspace decreases stress. An internal study that was published in the top mindfulness journal found that only 10 days of Headspace reduced stress by 14%.</p> 
            </div>
            <div className="col-12 col-md-6">
              <img src="assets/images/research.svg" alt="Research"/>
             </div>
            </div>
          <div className="row">
          <div className="row row-3">
          <div className="col-12 col-md-6">
              <img src="assets/images/heart.png" alt="Heart"/>
             </div>
          <div className="col-12 col-md-6">
            <p>Headspace decreases stress. An internal study that was published in the top mindfulness journal found that only 10 days of Headspace reduced stress by 14%.</p> 
            </div>
            </div>
          </div>
          <div className="row row-4">
            <div className="col-12 col-md-6">
              <img src="assets/images/sport.png" alt="Sport"/>
             </div>
            <div className="col-12 col-md-6">
            <p>Headspace improves focus. We spend almost half of our waking hours lost in thought and distracted. Research published in a journal focused on cognitive enhancement showed that Headspace improved focus by 14% and significantly decreased mind-wandering.</p> 
            </div>
            </div>
            <div className="row row-5">
            <div className="col-12 col-md-6">
              <img src="assets/images/joker.png" alt="Joker"/>
             </div>
            <div className="col-12 col-md-6">
            <p>And Happier at work. Studies conducted with different populations of employees have found Headspace can reduce stress and job strain and improve job satisfaction.</p> 
            </div>
            </div>
          </div>
         
          
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