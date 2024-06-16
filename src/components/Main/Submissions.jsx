import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Submissions.css'; // Import the CSS file for styling the card

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Retrieve submissions from localStorage on component mount
    const storedSubmissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    setSubmissions(storedSubmissions);
  }, []);

  return (
    <div className="main-page">
      <h1 className='subheader'>Chip in on existing bets and start winning!</h1>
      <div className="submissions-row">
        {submissions.map((submission, index) => (
           <Link to={`/bet/${index}`} key={index} className="submission-link">
            {/* Wrap entire card in Link */}
            <div className="card">
              <h2>{submission.title}</h2>
              {submission.media && submission.media.url && submission.media.type && (
                <div className="media">
                  {submission.media.type.startsWith('image/') ? (
                    <img src={submission.media.url} alt={submission.title} />
                  ) : (
                    <video controls>
                      <source src={submission.media.url} type={submission.media.type} />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              )}
              <p><strong>Description:</strong> {submission.description}</p>
              <p><strong>Category:</strong> {submission.category}</p>
              <p><strong>Date and Time:</strong> {submission.dateTime}</p>
              <p><strong>Number:</strong> {submission.number}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Submissions;
