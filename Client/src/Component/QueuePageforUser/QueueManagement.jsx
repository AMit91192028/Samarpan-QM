import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TokenDisplay from './TokenDisplay';
import UserPosition from './UserPosition';
import VisitingTime from './VisitingTime';
import CurrentlyServing from './CurrentlyServing';
import CommentSection from './CommentSection';
import DoctorInfo from './DoctorInfo';
import DepartmentInfo from './DepartmentInfo';
import { useLocation } from "react-router-dom";
import axios from 'axios';

const QueueManagement = () => {
  const location = useLocation();
  const { queueId: initialQueueId } = location.state || {};
  const [queueData, setQueueData] = useState({
    tokenNumber: '',
    position: 0,
    peopleAhead: 0,
    visitTime: null,
    currentlyServing: '',
    estimatedWaitTime: '',
    doctorName: '',
    department: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchToken, setSearchToken] = useState('');
  const [currentQueueId, setCurrentQueueId] = useState(initialQueueId);

  const fetchQueuePosition = async (queueId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:4001/api/queue/queue-position/${queueId}`);
      const data = response.data;
      setQueueData({
        tokenNumber: data.tokenNumber,
        position: data.position,
        peopleAhead: data.peopleAhead,
        visitTime: data.visitTime,
        currentlyServing: data.currentlyServing,
        estimatedWaitTime: data.estimatedWaitTime,
        doctorName: data.doctor,
        department: data.department
      });
      setCurrentQueueId(queueId);
      setLoading(false);
    } catch (err) {
      setError(err.message || 'Failed to load queue data for the given ID');
      setLoading(false);
      setQueueData({
        tokenNumber: '',
        position: 0,
        peopleAhead: 0,
        visitTime: null,
        currentlyServing: '',
        estimatedWaitTime: '',
        doctorName: '',
        department: ''
      });
      setCurrentQueueId(null);
    }
  };

  const handleSearch = async () => {
    if (searchToken) {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:4001/api/queue/queue-by-token/${searchToken}`);
        const { queueId } = response.data;
        if (queueId) {
          fetchQueuePosition(queueId);
        } else {
          setError('Queue ID not found for the given token number.');
          setLoading(false);
          setQueueData({
            tokenNumber: '',
            position: 0,
            peopleAhead: 0,
            visitTime: null,
            currentlyServing: '',
            estimatedWaitTime: '',
            doctorName: '',
            department: ''
          });
          setCurrentQueueId(null);
        }
      } catch (err) {
        setError(err.message || 'Failed to retrieve Queue ID');
        setLoading(false);
        setQueueData({
          tokenNumber: '',
          position: 0,
          peopleAhead: 0,
          visitTime: null,
          currentlyServing: '',
          estimatedWaitTime: '',
          doctorName: '',
          department: ''
        });
        setCurrentQueueId(null);
      } finally {
        setSearchToken(''); // Clear the search input after search
      }
    }
  };

  const handleInputChange = (event) => {
    setSearchToken(event.target.value);
  };

  const handleCommentSubmit = async () => {
    alert("comment section is under process");
  };

  useEffect(() => {
    if (initialQueueId) {
      fetchQueuePosition(initialQueueId);
      const intervalId = setInterval(() => {
        fetchQueuePosition(initialQueueId);
      }, 30000);
      return () => clearInterval(intervalId);
    }
  }, [initialQueueId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-8 h-8 border-4 border-primary-200 border-t-primary-500 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="h-full w-full p-6 bg-gray-50">
      <motion.h1
        className="text-3xl font-semibold text-primary-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Queue Details
      </motion.h1>

      <div className="mb-6 flex items-center justify-center space-x-4">
        <input
          type="text"
          className="shadow-lg rounded-lg py-3 px-6 w-64 text-gray-700"
          placeholder="Enter Token Number"
          value={searchToken}
          onChange={handleInputChange}
        />
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition-colors"
          onClick={handleSearch}
          disabled={loading || !searchToken.trim()} // Disable if loading or no input
        >
          Search
        </button>
      </div>

      {error && (
        <div className="bg-red-100 text-red-600 p-4 rounded-lg text-center mb-6">
          {error}
          {currentQueueId && (
            <button
              onClick={() => fetchQueuePosition(currentQueueId)}
              className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
            >
              Retry
            </button>
          )}
        </div>
      )}

      {currentQueueId && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TokenDisplay token={queueData.tokenNumber} />

          <div className="grid grid-cols-1 gap-6">
            <UserPosition
              position={queueData.position}
              peopleAhead={queueData.peopleAhead}
            />
            <VisitingTime visitTime={queueData.visitTime} />
          </div>

          <DoctorInfo doctor={queueData.doctorName} />
          <DepartmentInfo department={queueData.department} />

          <div className="md:col-span-2">
            <CurrentlyServing
              currentToken={queueData.currentlyServing}
              estimatedWaitTime={queueData.estimatedWaitTime}
            />
          </div>

          <div className="md:col-span-2">
            <CommentSection onSubmitComment={handleCommentSubmit} />
          </div>
        </div>
      )}

      {!currentQueueId && !loading && !error && initialQueueId && (
        <div className="text-center text-gray-500 mt-6">
          Showing initial queue details. You can search for a different token above.
        </div>
      )}

      {!currentQueueId && !loading && !error && !initialQueueId && (
        <div className="text-center text-gray-500 mt-6">
          Please enter a token number to search for queue details.
        </div>
      )}
    </div>
  );
};

export default QueueManagement;
