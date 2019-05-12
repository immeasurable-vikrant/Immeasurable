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
                            <h1>The Learning</h1>
                             <h3><p>Your visions will become clear only when you can look into your own heart. Who looks Outside, dreams  who looks Inside, Awakes.</p></h3> 
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
          
          <TabContainer dir={theme.direction} className="tab-container">
          <div className="row row-1 ">
          <div className="col-12 col-md-10 bruce ">
            <h2 className="text-center ">Scientific Rigor</h2>
            <h4 className="text-center">At Immeasurable we see meditation as both a practice rooted in ancient history and a topic of modern science. This is why we are as equally committed to providing authentic expertise in meditation and also studying the science of meditation. Science has been an integral part of the Immeasurable business since day one. We recognize that the only way to know if we are achieving our goal of improving the health and happiness of the world is to measure it. That's where the research comes in.”</h4>
          </div>
          </div>
            <div className="row row-2">
            <div className="col-12 col-md-6 ">
              <img src="assets/images/doctor.png" alt="Doctor" className="img-doc1"/>
             </div>
            <div className="col-12 col-md-6 ">
            <h4 className="text-center">There are over 2,000 meditation apps out there, but Immeasurable is one of the only ones committed to advancing the field of mindfulness meditation through clinically-validated research on our product. We are currently in progress on research studies with large national institutions that could be among the largest mindfulness meditation trials ever conducted. We are committed to ensuring Immeasurable can actually make an impact in our lives.</h4>
            </div>
            </div>
            <div className="row row-3">
            <div className="col-12 col-md-5 wayne"> 
            <img src="assets/images/doctor1.png" alt="Doctor1" className="img-doc"/>
            <h5 className="text-center head5">7-person, in-house science department led by Chief Science Officer Dr. Megan Jones Bell, who has +14 years of experience running National Institutes of Health (NIH) and European Research Council (ERC)-funded clinical trials on digital health interventions.</h5>
            <br/>
            <img src="assets/images/doctor2.png" alt="Doctor2" className="img-doc8"/>
            <h5 className="text-center head5">7 Studies are in partnership with 35+ of the most prestigious scientific research institutions and organizations such as Stanford and USC, run by leading mindfulness experts.</h5>
            </div>
            <div className="col-12 col-md-5 wayne">
            <img src="assets/images/doctor3.png" alt="Doctor3" className="img-doc"/>
            <h5 className="text-center head5">Currently in-process on 65+ research studies to scientifically validate the Immeasurable approach to meditation. The majority of these studies are being conducted by external third-party researchers with no association with Immeasurable.</h5>
            <br/>
            <img src="assets/images/doctor4.png" alt="Doctor4"className="img-doc9"/>
            <h5 className="text-center head5">Immeasurable has 16 published studies in the leading mindfulness peer-reviewed journals showing the impact of Immeasurable on health outcomes such as stress, focus and compassion.</h5>
            </div>
            </div>
          </TabContainer>

         <TabContainer dir={theme.direction}>
         <div className="containe">

                <div className="row row-1 ">
                <div className="col-12 col-md-10  ">
                <h2 className="text-center ml" >The Benefits of Meditation </h2> 
                <h4 className="text-center ml">There are thousands of studies that have shown mindfulness meditation can positively impact mental and physical health. Whether it’s by reducing stress, improving sleep, increasing focus, or improving relationships, research shows mindfulness works. While the research on mindfulness, especially digital mindfulness programs, is still growing, there is evidence to support the use of mindfulness training for many outcomes.</h4>
                <br/>
                </div>
                </div>
                <div className="row row-2 ">
                  <div>
                  <img src="assets/images/stressed.png" alt="Stress" className="img-doctor mt" />
                  <h6 className="text-center">Stress</h6>
                  </div>
                  <div>
                  <img src="assets/images/focused.png" alt="Focused" className="img-doctor mt"/>
                  <h6 className="text-center">Focus</h6>
                   </div>
                   <div>
                  <img src="assets/images/mood.png" alt="mood" className="img-doctor mt"/>
                  <h6 className="text-center">Mood</h6>
                  </div>
                  <div>
                  <img src="assets/images/compassion.png" alt="compassion" className="img-doctor mt"/>
                  <h6 className="text-center">Compassion</h6>
                  </div>
                  <div>
                  <img src="assets/images/anxiety_a.png" alt="agression" className="img-doctor mt"/>
                  <h6 className="text-center">Agression</h6>
                  </div>
                  <div>
                 <img src="assets/images/self_compassion.png" alt="self-compassion" className="img-doctor mt"/>
                 <h6 className="text-center">Self-Compassion</h6>
                 </div> 
                 <div>
                  <img src="assets/images/Relationships.png" alt="Work" className="img-doctor mt" />
                  <h6 className="text-center">Work</h6>
                  </div>
                  
                  <div>
                  <img src="assets/images/self_compassion11.png" alt="clinicalpopulations" className="img-doctor mt"/>
                  <h6 className="text-center">Clinical Populations</h6>
                  </div>
                  <div>
                  <img src="assets/images/anxiety_.png" alt="Anxiety (Preliminary Evidence)" className="img-doctor mt"/>
                  <h6 className="text-center">Anxiety</h6>
                  </div>
                  <div>
                  <img src="assets/images/depression.png" alt="depression" className="img-doctor mt"/>
                  <h6 className="text-center">Drepression </h6>
                  </div>
                  </div>
                <div className="row row-3 ">
                <br/>
               <h2 className="text-center pad "> Research shows Immeasurable can Positively Impact !</h2> 
               <div className="row">
               <div className="col-12 col-md-6">
               <img src="assets/images/brain.png" alt="Brain" className="imgbrain"/>
               </div>
               <div className="col-12 col-md-6">
               <h1 className="text-center ballad">How it works</h1>
               <h4 className="text-center">At Immeasurable, we like to think of meditation as exercise for the brain. Through meditation, we can build up areas of our brain and actually rewire it to enhance positive traits like focus and decision making and diminish the less positive ones like fear and stress. Most importantly, this means there is a possibility to change your brain for the better in a way that is long-lasting.</h4>
                </div>
               </div>
               
                </div>
                
                </div>
        </TabContainer>
                
         <TabContainer dir={theme.direction}>
         <div className="contain">
         <div className="row row-1">
          <div className="col-12 col-md-10 offset-1">
          <h2 className="text-center ">Research shows Immeasurable works</h2>
          <h4 className="text-center research">Published studies, external scientists, prestigious research organizations and our science team have shown Immeasurable can improve mental, emotional, and social health.<br/>
            If you are a researcher interested in assessing the impact of Immeasurable, learn more about our current research priorities and to share a proposal for consideration.</h4>
          </div>
          </div>
            <div className="row row-2">
            <div className="col-12 col-md-6">
            <h4 className="text-center">Immeasurable decreases stress. An internal study that was published in the top mindfulness journal found that only 10 days of Immeasurable reduced stress by 14%.</h4> 
            </div>
            <div className="col-12 col-md-6">
              <img src="assets/images/research.svg" alt="Research" className="img-doc"/>
             </div>
            </div>
          <div className="row">
          <div className="row row-3">
          <div className="col-12 col-md-6 heart">
              <img src="assets/images/heart.png" alt="Heart" className="img-doc"/>
             </div>
          <div className="col-12 col-md-6 heart1">
          <h4 className="text-center"><b>Immeasurable decreases stress. An internal study that was published in the top mindfulness journal found that only 10 days of Immeasurable reduced stress by 14%.</b></h4> 
            </div>
            </div>
          </div>
          <div className="row row-4">
            <div className="col-12 col-md-6 sport">
              <img src="assets/images/sport.png" alt="Sport" className="img-doc"/>
             </div>
            <div className="col-12 col-md-6 sport1">
            <h4 className="text-center mt-2"><b>Immeasurable improves focus. We spend almost half of our waking hours lost in thought and distracted. Research published in a journal focused on cognitive enhancement showed that Immeasurable improved focus by 14% and significantly decreased mind-wandering.</b></h4> 
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