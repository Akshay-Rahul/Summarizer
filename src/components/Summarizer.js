import React, { useState } from 'react';
import './Summarizer.css';

const Summarizer = () => {
  const [link, setLink] = useState('');
  const [file, setFile] = useState(null);
  const [source, setSource] = useState('local');
  const [showMiniWindow, setShowMiniWindow] = useState(false);

  const handleInputChange = (e) => {
    setLink(e.target.value);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    console.log('File dropped:', droppedFile.name);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log('File selected:', e.target.files[0].name);
  };

  const handleSourceChange = (e) => {
    setSource(e.target.value);
    setShowMiniWindow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Link submitted:', link);
    console.log('File submitted:', file);
    // Handle the submitted link and file here
  };

  return (
    <div>
    <div className="homepage-container">
    
      <h1 className="heading">Video Summarizer</h1>
      <h3 className="subheading">Get a shortened, easy-to-understand comprehension of your video in a quick and easy way</h3>
      <div className="input-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter video link here..."
            value={link}
            onChange={handleInputChange}
            />
          <div
            className="file-drop-area"
            onDrop={handleFileDrop}
            onDragOver={(e) => e.preventDefault()}
            >
            {file ? file.name : 'Drag and drop your file here, or click to select'}
            <input type="file" onChange={handleFileChange} />
          </div>
          <select value={source} onChange={handleSourceChange} className="file-source-select">
            <option value="local">Local Files</option>
            <option value="google-drive">Google Drive</option>
            <option value="onedrive">OneDrive</option>
          </select>
          <button type="submit">Summarize</button>
        </form>
        {showMiniWindow && (
          <div className="mini-window">
            <h4>{source === 'google-drive' ? 'Google Drive' : 'OneDrive'}</h4>
            <p>File selection window for {source === 'google-drive' ? 'Google Drive' : 'OneDrive'} appears here.</p>
            <button onClick={() => setShowMiniWindow(false)}>Close</button>
          </div>
        )}
      </div>
      <div className="pamphlet-container">
        <div className="pamphlet">
          <h3>Fast Summaries</h3>
          <p>Quickly summarize videos with just one click. Our advanced algorithms ensure that you receive a concise and informative summary of any video, saving you time and effort.</p>
        </div>
        <div className="pamphlet">
          <h3>Easy to Use</h3>
          <p>User-friendly interface designed for all. Whether you're a tech-savvy user or someone new to the web, our platform is intuitive and easy to navigate, making video summarization a breeze.</p>
        </div>
        <div className="pamphlet">
          <h3>Accurate Results</h3>
          <p>Get reliable summaries with high accuracy. Our system is powered by state-of-the-art technology to ensure that you get the most accurate and relevant information from your videos.</p>
        </div>
      </div>
    </div>
        </div>
  );
};

export default Summarizer;
