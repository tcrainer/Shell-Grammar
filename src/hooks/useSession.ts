import { useState, useEffect } from 'react';

export function useSession() {
  const [studentName, setStudentName] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  
  const [startTime, setStartTime] = useState<number | null>(null);
  const [activeTime, setActiveTime] = useState(0); // in seconds
  const [idleTime, setIdleTime] = useState(0); // in seconds
  const [lastActivity, setLastActivity] = useState<number>(Date.now());
  
  const [exercisesAttempted, setExercisesAttempted] = useState(0);
  const [exercisesCorrect, setExercisesCorrect] = useState(0);

  useEffect(() => {
    if (!hasStarted || isFinished) return;
    
    const handleActivity = () => {
      setLastActivity(Date.now());
    };
    
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('click', handleActivity);
    
    const interval = setInterval(() => {
      setLastActivity(currentLastActivity => {
        const now = Date.now();
        if (now - currentLastActivity > 10000) { // 10 seconds idle threshold
          setIdleTime(prev => prev + 1);
        } else {
          setActiveTime(prev => prev + 1);
        }
        return currentLastActivity;
      });
    }, 1000);
    
    return () => {
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('click', handleActivity);
      clearInterval(interval);
    };
  }, [hasStarted, isFinished]);
  
  const startSession = (name: string) => {
    setStudentName(name);
    setHasStarted(true);
    setStartTime(Date.now());
    setLastActivity(Date.now());
  };
  
  const finishSession = () => {
    setIsFinished(true);
  };

  const resumeSession = () => {
    setIsFinished(false);
    setLastActivity(Date.now());
  };

  const recordExercise = (correct: boolean) => {
    setExercisesAttempted(prev => prev + 1);
    if (correct) {
      setExercisesCorrect(prev => prev + 1);
    }
  };
  
  return {
    studentName,
    hasStarted,
    isFinished,
    startTime,
    activeTime,
    idleTime,
    exercisesAttempted,
    exercisesCorrect,
    startSession,
    finishSession,
    resumeSession,
    recordExercise
  };
}
