import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Profile/ProfileContent.css'

const SubmissionDetail = () => {
  const { id } = useParams(); // Access the submission id from the URL
  const [submission, setSubmission] = useState(null);

  useEffect(() => {
    // Retrieve submissions from localStorage on component mount
    const storedSubmissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    const selectedSubmission = storedSubmissions[id];
    setSubmission(selectedSubmission);
  }, [id]);

  if (!submission) {
    return <div>Loading...</div>;
  }

  return (
    <div className="submission-detail">
      <h1>{submission.title}</h1>
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
  );
};

export default SubmissionDetail;
