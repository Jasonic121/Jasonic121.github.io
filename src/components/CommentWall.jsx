import React, { useState, useEffect, useRef } from 'react';
import FloatingBubble from './FloatingBubble';
import { addComment, getComments } from '../utils/firebase';
import { motion } from 'framer-motion';

const CommentWall = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const commentContainerRef = useRef(null);
  const [mood, setMood] = useState('happy');
  const [shuffledIndices, setShuffledIndices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Shuffle function using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Fetch comments from Firebase
  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const data = await getComments();
        setComments(data);
        // Generate shuffled indices when comments are loaded
        setShuffledIndices(shuffleArray(Array.from({ length: data.length }, (_, i) => i)));
      } catch (err) {
        console.error('Error fetching comments:', err);
        setError('Failed to load comments');
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, []);

  // Debug: log when comments change
  useEffect(() => {
    console.log('Comments state updated:', comments);
    console.log('Loading state:', isLoading);
    console.log('Error state:', error);
  }, [comments, isLoading, error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addComment(name, newComment, { x: 0, y: 0 }, mood);
      setNewComment('');
      setName('');
      setSuccessMessage('Your graduation message has lifted off! It will appear in the sky after approval. 🎓');
      setShowForm(false);
      await fetchComments();
    } catch (err) {
      console.error('Error adding comment:', err);
      setError('Failed to add comment');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear success message after 5 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  // Sanitize input to prevent XSS
  const sanitizeInput = (text) => {
    return text
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };
  
  // Get emoji for selected mood
  const getMoodEmoji = (selectedMood) => {
    const emojis = {
      happy: '😊',
      excited: '🤩',
      curious: '🎓',
      surprised: '😲',
      thoughtful: '🎊',
      sad: '😔'
    };
    return emojis[selectedMood] || '😊';
  };

  return (
    <div className="w-full my-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Graduation Congratulations Wall</h2>
      
      {/* Success message */}
      {successMessage && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="max-w-md mx-auto mb-6 bg-button/20 border border-button/50 text-white px-4 py-3 rounded-lg text-center"
        >
          {successMessage}
        </motion.div>
      )}
      
      {/* Loading and error status */}
      {error && (
        <p className="text-center text-accent-3 mb-4">{error}</p>
      )}
      
      {/* Floating bubbles container with transparent background */}
      <div 
        ref={commentContainerRef}
        className="relative h-[500px] w-full overflow-hidden my-8 border border-button/20 rounded-xl backdrop-blur-sm"
        style={{
          backgroundImage: 'url("/assets/images/Sky.JPG")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-button"></div>
          </div>
        ) : (
          <>
            {comments.length === 0 ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-primary/60 text-lg">No congratulations yet. Be the first to leave a graduation message!</p>
              </div>
            ) : (
              <>
                {shuffledIndices.map((shuffledIndex, displayIndex) => (
                  <FloatingBubble 
                    key={comments[shuffledIndex].id || shuffledIndex} 
                    initialPosition={comments[shuffledIndex].position}
                    delay={displayIndex * 2} // Use displayIndex for delay to maintain spacing
                    index={displayIndex}
                    totalCount={comments.length}
                  >
                    <div className="p-4 max-w-[220px] backdrop-blur-sm">
                      <p className="font-bold text-sm">{comments[shuffledIndex].name}</p>
                      <p className="text-sm mt-1 text-white">{comments[shuffledIndex].text}</p>
                      {comments[shuffledIndex].timestamp && (
                        <p className="text-xs text-white/60 mt-2">
                          {new Date(comments[shuffledIndex].timestamp).toLocaleDateString()}
                        </p>
                      )}
                      {comments[shuffledIndex].mood && (
                        <span className="text-xl absolute -top-0 -right-0">{getMoodEmoji(comments[shuffledIndex].mood)}</span>
                      )}
                    </div>
                  </FloatingBubble>
                ))}
              </>
            )}
          </>
        )}
      </div>

      {/* Leave a message button */}
      <div className="flex justify-center mb-8">
        <motion.button
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-accent via-accent-2 to-accent-3 hover:bg-gradient-to-r hover:from-accent/90 hover:via-accent-2/90 hover:to-accent-3/90 text-white font-mono px-6 py-3 rounded-full flex items-center gap-2 group transform hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{showForm ? 'Hide Form' : 'Leave a message!'}</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </motion.button>
      </div>

      {/* Collapsible form */}
      {showForm && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="max-w-md mx-auto mb-10 bg-background/90 backdrop-blur-lg p-6 rounded-xl border border-button/20 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Send Your Congratulations <span className="animate-pulse">🎓</span>
          </h2>
          
          {error && (
            <div className="bg-accent-3/10 border border-accent-3/30 text-accent-3 px-4 py-3 rounded-lg mb-6 text-center">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-button">
                <span className="inline-block mr-2">👋</span> Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(sanitizeInput(e.target.value))}
                className="w-full px-4 py-2 bg-background/80 border border-button/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-button text-white"
                placeholder="Enter your name"
                required
              />
            </div>
            
            {/* Mood selector */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-button">
                <span className="inline-block mr-2">🌈</span> Your Mood
              </label>
              <div className="flex flex-wrap gap-2 justify-center">
                {['happy', 'excited', 'curious', 'surprised', 'thoughtful', 'sad'].map((moodOption) => (
                  <button
                    key={moodOption}
                    type="button"
                    onClick={() => setMood(moodOption)}
                    className={`p-2 rounded-full transition-all ${mood === moodOption ? 'bg-button/40 scale-110 ring-2 ring-button' : 'bg-background/40 hover:bg-button/20'}`}
                  >
                    <span className="text-2xl" role="img" aria-label={moodOption}>
                      {getMoodEmoji(moodOption)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="comment" className="block text-sm font-medium mb-1 text-button">
                <span className="inline-block mr-2">🎉</span> Your Congratulations Message
              </label>
              <textarea
                id="comment"
                value={newComment}
                onChange={(e) => setNewComment(sanitizeInput(e.target.value))}
                className="w-full px-4 py-2 bg-background/80 border border-button/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-button text-white"
                placeholder="Share your graduation wishes, memories, or say hello :-)"
                rows="3"
                required
              />
            </div>
            
            <motion.button 
              type="submit" 
              className="w-full bg-gradient-to-r from-accent via-accent-2 to-accent-3 hover:bg-gradient-to-r hover:from-accent/90 hover:via-accent-2/90 hover:to-accent-3/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px]"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <span>Send Congratulations</span>
                  <span className="ml-2">🎓</span>
                </span>
              )}
            </motion.button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default CommentWall; 