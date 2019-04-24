import React from 'react';
import { Card,CardBody,CardImg,CardTitle, CardText,Button} from 'reactstrap';

function Blogs(props) {



 const blogs =  [
 
    {
      id: 0,
      heading:'Are You A Fan of Positive Thinking? Then Think Again',
      image: 'https://images.sadhguru.org/sites/default/files/media_files/Positivethinking.jpg', 
      caption: 
      'Positive thinking is a popular concept nowadays, but is it the right way to conduct your life? Sadhguru looks at how you may want to ignore the negatiSadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease.. Sadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease.....Positive thinking is a popular concept nowadays, but is it the right way to conduct your life? Sadhguru looks at how you may want to ignore the negatiSadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease.. Sadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease.....Positive thinking is a popular concept nowadays, but is it the right way to conduct your life? Sadhguru looks at how you may want to ignore the negatiSadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease.. Sadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease.....Positive thinking is a popular concept nowadays, but is it the right way to conduct your life? Sadhguru looks at how you may want to ignore the negatiSadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease.. Sadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease.....Positive thinking is a popular concept nowadays, but is it the right way to conduct your life? Sadhguru looks at how you may want to ignore the negatiSadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease.. Sadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease.....Positive thinking is a popular concept nowadays, but is it the right way to conduct your life? Sadhguru looks at how you may want to ignore the negatiSadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease.. Sadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease.....Positive thinking is a popular concept nowadays, but is it the right way to conduct your life? Sadhguru looks at how you may want to ignore the negatiSadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease.. Sadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease.....Positive thinking is a popular concept nowadays, but is it the right way to conduct your life? Sadhguru looks at how you may want to ignore the negatiSadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease.. Sadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease.....'
     },
    
     {
        id: 1,
        heading:'Don’t Pay Attention, Just Be Attentive',
        image: 'https://images.sadhguru.org/sites/default/files/media_files/dont-pay-attention-just-be-attentive.jpg', 
        caption: 
        'How to pay attention to everything? Sadhguru says, don’t try to pay attention to anything. Just become more attentive, and you won’t miss a thing...'
       },
    
       {
        id: 2,
        heading:'5 Simple Ways to Reduce Your Sleep Quota',
        image: 'https://images.sadhguru.org/sites/default/files/media_files/5-simple-ways-to-reduce_Blog-image..jpg', 
        caption: 
        'Sadhguru explains a few simple ways to care for your system which can help you experience an increase in energy and a dramatic decrease..'
       },
    
       {
        id: 3,
        heading:'Are you Desperately Looking for a Soulmate?',
        image: 'https://images.sadhguru.org/sites/default/files/media_files/sadhguru-isha-wisdom-article-image-illustration-hands-two-people-tied-with-sutra-are-you-desparately-looking-for-a-soulmate.jpg', 
        caption: 'Sadhguru looks at the idea that you can find a soulmate who will be a perfect companion, and speaks about the soul, love and why people come together.'
       },
       {
        id: 4,
        heading:'No Safety Net: Sadhguru on Mental Illness',
         image: ' https://images.sadhguru.org/sites/default/files/media_files/sadhguru-isha-wisdom-article-image-watercolor-painting-guy-meditating-flying-yoga-mat-how-do-i-handle-confusion-on-spiritual-path.jpg', 
        caption: 
        'During a recent conversation between Karan Johar and Sadhguru, Karan inquired about the rising incidence of mental illness around the...'
       },
    
       {
        id: 5,
        heading:'Devotion: Keeping All Doors Open',
        image: 'https://images.sadhguru.org/sites/default/files/media_files/iso/en/67550-devotion-keeping-all-doors-open.jpg', 
        caption: 
        'Devotion, Sadhguru says, means to keep all the doors and windows open, so that one is always available to grace...'
       },
       {
        id: 6,
        heading:'Why Is Doing Nothing So Difficult? ',
        image: 'https://images.sadhguru.org/sites/default/files/media_files/iso/en/67610-why-is-doing-nothing-so-difficult.jpg', 
        caption: 
        'A seeker expresses frustration at being unable to simply sit at home without becoming bored. Why is it so difficult to simply do nothing?...'
       },
    
       {
        id: 7,
        heading:'Horror Movie of Your Own Making',
        image: 'https://images.sadhguru.org/sites/default/files/media_files/iso/en/65890-horror-movie-of-your-making-melanie-wasser-233297.jpg', 
        caption: 
        'A young student asks Sadhguru how to overcome a fear of ghosts and the supernatural. Instead of suffering your... '
       },
       {
        id: 8,
        heading:'Will the Buddha Save Him? – A Zen Story',
        image: 'https://images.sadhguru.org/sites/default/files/media_files/sadhguru-isha-wisdom-article-image-fox-does-being-smart-make-you-dumb.jpg', 
        caption: 
        'Man cannot come to it through any organization, through any creed, through any dogma...'
       },
    
    
       {
          id: 9,
          heading:'Is Knowledge a Boon or a Curse?',
          image: 'https://images.sadhguru.org/sites/default/files/media_files/iso/en/65651-is-knowledge-a-boon-or-a-curse-aaron-burden-236415.jpg', 
          caption: 
          'Sadhguru speaks about the pitfalls of polygamy in today’s society, and also looks at how having multiple partners affects the human system....'
         },
         {
          id: 10,
          heading:'How To Deal With Anxiety When Meeting People? ',
          image: 'https://images.sadhguru.org/sites/default/files/media_files/iso/en/67610-why-is-doing-nothing-so-difficult.jpg', 
          caption: 
          'Knowledge, Sadhguru says, is a certain accumulation of information. But is this accumulation a boon or a burden? Without knowledge, he explains, you will have to re-invent the wheel every day. However, if too much accumulated memory sticks to the knife of the intellect, then it cannot cut through anything...'
         },
      
         {
          id: 11,
          heading:'Why Does My Education Seem Pointless?',
          image: 'https://images.sadhguru.org/sites/default/files/media_files/sadhguru-isha-wisdom-article-image-why-does-my-education-seem-pointless-girl-frustrated-with-studying-youth-and-truth.jpg', 
          caption: 
          'During a recent Youth and Truth conversation, a student questions why so much of her education seems to have been pointless. Sadhguru describes the current strides being taken to refocus India’s education system, highlighting the need for a system which identifies and nurtures the aptitude of individual students.... '
         },
         {
          id: 12,
          heading:'Why We Must Not Do Away with Dalit Reservations',
          image: 'https://images.sadhguru.org/sites/default/files/media_files/why-we-must-not-do-away-with-dalit-reservations.jpg', 
          caption: 
          'The month of April marks the birthday of Dr. Bhim Rao Ambedkar, champion for social equality and architect of India’s constitution. In this article, Sadhguru explains that, while it may be high time to review India’s reservation policy, the effort towards combating discrimination remains highly imperative, especially in rural communities....'
         }
    ]

const blogList = blogs.map((blog) => {
    return (
    <div className="col-md-10 gf">
        <h1 className="text-center">{blog.heading}</h1>
            <i><big className="text-muted text-center gk">{blog.heading} and {blog.heading} plus {blog.heading} </big></i>
            <img className="col-12 col-md-10" src ={blog.image} alt = {blog.heading} />
                <p className="col-12 col-md-10">{blog.caption}</p>
                <button className="center">More Blogs</button>     
                       
    </div>
  );
})
return(
<div className="container">
    <div className="row offset-1 center">
      
        {blogList}
       
    </div>
</div>
);
}

export default Blogs;