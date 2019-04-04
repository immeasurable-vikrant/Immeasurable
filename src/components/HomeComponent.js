import React from 'react';
import { Card, CardImg, CardBody,CardImgOverlay,
  CardTitle, CardSubtitle,CardText, Button } from 'reactstrap';
  
  const Home = (props) => {
    return (
      <div className="conatiner">
      
        <div className="row">
           <div className="col-6">
           <Card>
               <CardImg top width="100%" src="https://wallpapercave.com/wp/wp3137137.jpg"/>
                 <CardImgOverlay>
                    <CardText className="text-center">
                   End of Addictions and Habits 
                    </CardText>   
                 </CardImgOverlay>
               </Card>
            </div>
  
         <div className="col-6">
           <div className="row">
             <div className="col-6">
               <Card>
               <CardImg top width="100%" src="https://wallpapercave.com/wp/wp3137137.jpg"/>
                 <CardImgOverlay>
                    <CardText className="text-center">
                   Focus and Concentration
                    </CardText>   
                 </CardImgOverlay>
               </Card>
             </div>
  
          <div className="col-6">
             <Card>
              <CardImg top width="100%" src="https://wallpapercave.com/wp/wc3137263.jpg"/>
            </Card>
          </div>
        </div>
  
         <div className="row">
           <div className="col-6">
             <Card>
               <CardImg top width="100%" src="https://images5.alphacoders.com/521/521476.jpg"/>
             </Card>
         </div>
  
            <div className="col-6">
              <Card>
                <CardImg top width="100%" src="https://images.beinsports.com/JYxeyUJG3LbfIwjj35Ez6b8D9W4=/full-fit-in/1000x0/sergioramos-cropped_4e4gspstj1jy1y00ecgzg5hab.jpg"/>
             </Card>
            </div>
         </div>
           </div>
             </div>
  
          <div className="row chacha">
            <div className="col-4">
            <i className="fa fa-user-graduate fa-lg "></i>
              <h4>Unlimited Access</h4>
              <p>Choose what you'd like to learn from 
              our extensive subscription Library.</p>
            </div>
        
           <div className="col-4">
             <i className="fa fa-chalkboard-teacher fa-lg"></i>
               <h4>Expert Masters</h4>
               <p>Learn from industry experts who are <br/>
               &nbsp;&nbsp;&nbsp;&nbsp;passionate about Teaching.
              </p>
              <Button className="btn-chacha" color="warning">Subscribe now</Button>
           </div>
  
            <div className="col-4">
            <i className="fa fa-desktop fa-lg"></i>
              <h4>Learn Anywhere</h4>
              <p>Switch between your copmputer, tablet or mobile device.</p>
            </div>
          </div>
          
         
          
  
          <h3>Browse our top courses</h3>
          <div className="row row-card">
          <div className="col-3 col-md-3 ">
          
          <Card >
          <CardImg top width="100%" src="https://images7.alphacoders.com/770/thumb-350-770680.jpg"/>  
          <CardBody className="text-left">
            <CardTitle>Conquering the Mind by Understanding</CardTitle>
            <CardSubtitle>by Swami Mukundananda</CardSubtitle>
            <CardText>
            <small className="text-muted">.2h 11m </small>
          </CardText>
          </CardBody>
        </Card>
        </div>
          
        
          <div className="col-3 col-md-3">
          
          <Card>
          <CardImg top width="100%" src="https://media.newyorker.com/photos/590952851c7a8e33fb38a898/master/pass/Brando-580.jpg" alt="Card image cap" />
          <CardBody className="text-center">
            <CardTitle>Unwavering Focus and Conecentration</CardTitle>
            <CardSubtitle>by Sadhguru</CardSubtitle>
            <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          </CardBody>
        </Card>
        </div>
  
        <div className="col-3 col-md-3">
          
          <Card>
          <CardImg top width="100%" src="https://i2-prod.mirror.co.uk/incoming/article10585485.ece/ALTERNATES/s615/PROD-The-Godfather.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Overcoming Comfort Zone</CardTitle>
            <CardSubtitle>by Sandeep Maheshwari </CardSubtitle>
            <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          </CardBody>
        </Card>
        </div>
  
        <div className="col-3 col-md-3">
          
          <Card>
          <CardImg top width="100%" src="https://images2.alphacoders.com/144/thumb-1920-144270.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>End of Addictions and Habits</CardTitle>
            <CardSubtitle>by Jiddu Krishnamurti</CardSubtitle>
            <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          </CardBody>
        </Card>
        </div>
        <div className="col-3 col-md-3">
          
          <Card>
          <CardImg top width="100%" src="https://cdn3.movieweb.com/i/article/RcTszAGrRtaXDFyLaHgTVLAvdgzlMn/798:50/Dark-Knight-Trilogy-Villains-Christopher-Nolan.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Mindfulness</CardTitle>
            <CardSubtitle>by Pema Chodron </CardSubtitle>
            <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          </CardBody>
        </Card>
        </div>
  
        <div className="col-3 col-md-3">
          
          <Card>
          <CardImg top width="100%" src="https://johnweirick.files.wordpress.com/2012/12/darkknight.jpeg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Boost Confidence </CardTitle>
            <CardSubtitle>by Sandeep Maheshwari</CardSubtitle>
            <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          </CardBody>
        </Card>
        </div>
  
        <div className="col-3 col-md-3">
          
          <Card>
          <CardImg top width="100%" src="https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE0XFxcLzA0XFxcL0ZpZ2h0LWNsdWIuanBnXCIsXCJ3aWR0aFwiOjc2NyxcImhlaWdodFwiOjQzMSxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3LmpvZS5pZVxcXC9hc3NldHNcXFwvaW1hZ2VzXFxcL2pvZVxcXC9uby1pbWFnZS5wbmc_dj0yMlwiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiJmZWJlYTk3ZjhhNGIyN2ZhYTJlYWVkYTJhNWY5NjNkZjVjMTNkYmIyIn0=/fight-club.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Science of getting Rich </CardTitle>
            <CardSubtitle>by Napolean Hill</CardSubtitle>
            <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          </CardBody>
        </Card>
        </div>
        
        <div className="col-3 col-md-3">
          
          <Card>
          <CardImg top width="100%" src="https://d1u4oo4rb13yy8.cloudfront.net/article/75808-hsuqmrwzof-1512572142.PNG" alt="Card image cap" />
          <CardBody>
            <CardTitle>Mastery Over Health</CardTitle>
            <CardSubtitle>by Bruce Lee</CardSubtitle>
            <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          </CardBody>
          
        </Card>
      
        </div>
  

        </div>
        
    </div>
  
          
    
    );
  };
  
  
  export default Home;
  