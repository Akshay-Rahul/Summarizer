import React from 'react';
import YouTube from 'react-youtube';
import { useLocation } from 'react-router-dom';
import './Search.css';

const YouTubeSearch = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('query') || '';

  // Arrays of YouTube video links for different topics
  const videoLinks = [
    { title: 'Java Programming Tutorial for Beginners', url: 'https://youtu.be/xk4_1vDrzzo?si=tY60Ycxi4u7o623E', description: 'A comprehensive tutorial for beginners in Java programming.' },
    { title: 'Java Full Course for Beginners', url: 'https://youtu.be/yC9ZwDfT3b0?si=mqei2OdC_CB12KIY', description: 'Full course for beginners covering the fundamentals of Java.' },
    { title: 'Java Programming Crash Course', url: 'https://youtu.be/qOWPCPCDRZs?si=gczwpdko_9ZQ5HXt', description: 'Crash course in Java programming with essential concepts.' },
    { title: 'Java Programming Basics', url: 'https://youtu.be/A74TOX803D0?si=whCpTOp-Yn3DDZJM', description: 'Basics of Java programming for new learners.' },
    { title: 'Java Course for Beginners', url: 'https://youtu.be/K-4pZjy6M2U?si=OdepCNIpBx7Ekmgp', description: 'Beginner course with hands-on examples and exercises.' },
    { title: 'Advanced Java Programming', url: 'https://youtu.be/BGTx91t8q50?si=XIIeTQJrn25J16xx', description: 'Advanced topics in Java programming for deeper understanding.' },
    { title: 'Java Programming Tutorial by [Channel Name]', url: 'https://youtu.be/Qgl81fPcLc8?si=j7kFNvojYV-7Z-Vu', description: 'In-depth Java programming tutorial for various topics.' },
    { title: 'Java Programming Fundamentals', url: 'https://youtu.be/o8NQwaG9LsY?si=5nHpd7_8SI6WzkEV', description: 'Fundamentals of Java programming explained clearly.' },
    { title: 'Java Programming Basics by [Channel Name]', url: 'https://youtu.be/Yv_4RXyLjL8?si=5eEsU-ZN4QaCp2v6', description: 'Basic concepts of Java programming with practical examples.' },
    { title: 'Complete Java Programming Guide', url: 'https://youtu.be/Gex-j7GlCHc?si=n8q67kCqgL7uck7t', description: 'Complete guide covering Java programming comprehensively.' },

    // C++ Videos
    { title: 'C++ Programming Tutorial for Beginners', url: 'https://youtu.be/vLnPwxZdW4Y?si=aaK17Z1FhlqK4VZJ', description: 'A complete guide for beginners in C++ programming.' },
    { title: 'C++ Full Course for Beginners', url: 'https://youtu.be/2n2h2JxZJdE?si=Bc3PpqkCKxyW2-j0', description: 'Full course covering C++ fundamentals.' },
    // Add more C++ videos...

    // Python Videos
    { title: 'Python Programming Tutorial for Beginners', url: 'https://youtu.be/h0w8S5_8l38?si=dPyIG4H6B3v_7U7M', description: 'Learn Python programming from scratch.' },
    { title: 'Python Full Course for Beginners', url: 'https://youtu.be/7vS8TCs_9FE?si=SEjS2LkbwST0H8HR', description: 'Complete Python course for beginners.' },
    // Add more Python videos...

    // SQL Videos
    { title: 'SQL Tutorial for Beginners', url: 'https://youtu.be/7S_tz1z_5bA?si=mp3OHkF77e6KtbCe', description: 'Introduction to SQL and database management.' },
    { title: 'SQL Full Course', url: 'https://youtu.be/3q4h8B2b0io?si=s3_W93ofHPu4kH75', description: 'Comprehensive SQL course covering all basics.' },
    // Add more SQL videos...

    // More Videos
    { title: 'JavaScript Basics for Beginners', url: 'https://youtu.be/hdI2bqOjy3c?si=_j0J2Zy9TzU7xeWy', description: 'Learn JavaScript basics quickly.' },
    { title: 'HTML & CSS for Beginners', url: 'https://youtu.be/o9J7U0lph6Y?si=Qv7GvP1y7d3J4h1E', description: 'Learn HTML and CSS with hands-on examples.' },
    // Add more general videos...
  ];

  // Function to extract videoId from the YouTube link
  const extractVideoId = (url) => {
    const urlObj = new URL(url);
    return urlObj.pathname.split('/').pop().split('?')[0];
  };

  // Filter videos based on search term or show all if search term is empty
  const filteredVideos = searchTerm
    ? videoLinks.filter((video) =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : videoLinks;

  return (
    <div className="youtube-search">
      <h1 className="title">Videos</h1>
      <div className="video-grid">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video, index) => {
            const videoId = extractVideoId(video.url);
            return (
              <div key={index} className="video-card">
                <YouTube
                  videoId={videoId}
                  opts={{
                    height: '315', // Increased height
                    width: '100%', // Full width of the card
                    playerVars: {
                      autoplay: 0,
                    },
                  }}
                  onError={(e) => console.error('YouTube video failed to load:', e)}
                />
                <div className="video-info">
                  <h2 className="video-title">{video.title}</h2>
                  <p className="video-description">{video.description}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No videos found</p>
        )}
      </div>
    </div>
  );
};

export default YouTubeSearch;
