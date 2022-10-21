import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const NewsSummaryCard = ({news}) => {
    const {title,_id,total_view,rating,details,author,image_url}= news
    return (
        <Card className="mb-5">
      <Card.Header className='d-flex justify-content-between align-items-center'>

        <div className='d-flex'>
            <Image roundedCircle style={{height:'60px'}} src={author.img} alt="" />

            <div className='ms-3'>
                <p className='mb-0'>{author.name}</p>
                <p>{author.published_date}</p>
            </div>
        </div>
        <div>
        <FaRegBookmark className='me-2'/>
        <FaShareAlt/>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {
          details.length> 200? 
          <>{details.slice(0,250) + '...'} <Link to={`/news/${_id}`} >Read More</Link></>
          : 
          <>{details}</>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
          <div>
          <FaStar className='text-warning me-2'/>
          <span>{rating.number}</span>
          </div>
          <div>
            <FaEye className='me-2'/>
            <span>{total_view}</span>
          </div>
      </Card.Footer>
    </Card>
    );
};

export default NewsSummaryCard;