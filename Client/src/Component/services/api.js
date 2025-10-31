import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

// Fallback data for development
const DEV_FALLBACK_DATA = {
  token: 'A123',
  position: 5,
  peopleAhead: 4,
  visitTime: new Date(Date.now() + 30 * 60000).toISOString(), // 30 mins from now
  currentlyServing: 'A119',
  estimatedWaitTime: 25,
  doctor: {
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiologist',
    qualification: 'MD, DM',
    experience: 15,
    imageUrl: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg'
  },
  department: {
    name: 'Cardiology Department',
    description: 'Specialized in diagnosis and treatment of heart diseases',
    floor: '3rd',
    roomNo: '304'
  }
};

const MAX_RETRIES = 3;
const RETRY_DELAY = 2000; // 2 seconds

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Get queue position by token number
 * @param {string} tokenNo - The token number
 * @returns {Promise} - The queue position data
 */
export const getQueuePosition = async (tokenNo, retryCount = 0) => {
  try {
    const response = await api.get(`/api/user/queue-position/${tokenNo}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching queue position:', error);
    
    // Log detailed error information
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }

    // Retry logic for network errors
    if (error.code === 'ECONNREFUSED' && retryCount < MAX_RETRIES) {
      console.log(`Retrying request (${retryCount + 1}/${MAX_RETRIES})...`);
      await sleep(RETRY_DELAY);
      return getQueuePosition(tokenNo, retryCount + 1);
    }

    // In development, return fallback data after all retries fail
    if (import.meta.env.DEV) {
      console.log('Using fallback data in development mode');
      return DEV_FALLBACK_DATA;
    }

    throw new Error(
      error.response?.data?.message || 
      'Failed to fetch queue data. Please try again later.'
    );
  }
};

/**
 * Submit a comment for a queue token
 * @param {Object} data - The comment data
 * @returns {Promise} - The response from the server
 */
export const submitComment = async (data, retryCount = 0) => {
  try {
    const response = await api.post('/api/queue/comment', data);
    return response.data;
  } catch (error) {
    console.error('Error submitting comment:', error);
    
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }

    // Retry logic for network errors
    if (error.code === 'ECONNREFUSED' && retryCount < MAX_RETRIES) {
      console.log(`Retrying comment submission (${retryCount + 1}/${MAX_RETRIES})...`);
      await sleep(RETRY_DELAY);
      return submitComment(data, retryCount + 1);
    }

    // In development, simulate successful comment submission
    if (import.meta.env.DEV) {
      console.log('Simulating successful comment submission in development mode');
      return { success: true };
    }

    throw new Error(
      error.response?.data?.message || 
      'Failed to submit comment. Please try again later.'
    );
  }
};