import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TokenDisplay from './TokenDisplay';
import UserPosition from './UserPosition';
import VisitingTime from './VisitingTime';
import CurrentlyServing from './CurrentlyServing';
import CommentSection from './CommentSection';
import { getQueueData, submitQueueData } from '../services/api';

const QueueStatus = () => {
  const [queueData, setQueueData] = useState({
    token: '',
    position: 0,
    peopleAhead: 0,
    visitTime: new Date().toISOString(),
    currentlyServing: '',
    estimatedWaitTime: 0,
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getQueueData();
        setQueueData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load queue data');
        setLoading(false);
        console.error('Error fetching queue data:', err);
      }
    };
    
    fetchData();
    
    // Simulate periodic updates
    const intervalId = setInterval(() => {
      // In a real app, this would fetch fresh data from the server
      setQueueData(prevData => ({
        ...prevData,
        // Simulate queue movement
        peopleAhead: Math.max(0, prevData.peopleAhead - Math.floor(Math.random() * 2)),
        // Update currently serving token occasionally
        currentlyServing: Math.random() > 0.7 
          ? `A-${109 + Math.floor((Math.random() * 5))}`
          : prevData.currentlyServing
      }));
    }, 8000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  const handleSubmitComment = async (comment) => {
    try {
      // Example for posting data with a comment to the server
      await submitQueueData({
        ...queueData,
        comment,
        timestamp: new Date().toISOString()
      });
      
      // Show success notification
      alert('Comment submitted successfully!');
    } catch (err) {
      console.error('Error submitting comment:', err);
      alert('Failed to submit comment. Please try again.');
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-8 h-8 border-4 border-primary-200 border-t-primary-500 rounded-full"
        />
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-error-100 text-error-500 p-4 rounded-lg text-center">
        {error}
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1 
        className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Queue Management System
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TokenDisplay token={queueData.token} />
        
        <div className="grid grid-cols-1 gap-4">
          <UserPosition 
            position={queueData.position} 
            peopleAhead={queueData.peopleAhead} 
          />
          <VisitingTime visitTime={queueData.visitTime} />
        </div>
        
        <div className="md:col-span-2">
          <CurrentlyServing 
            currentToken={queueData.currentlyServing} 
            estimatedWaitTime={queueData.estimatedWaitTime}
          />
        </div>
        
        <div className="md:col-span-2">
          <CommentSection onSubmitComment={handleSubmitComment} />
        </div>
      </div>
    </div>
  );
};

export default QueueStatus;