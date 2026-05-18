import { useState, useEffect } from 'react';
import { units } from '../data/units';

export interface Progress {
  [unitId: string]: {
    [taskSetId: string]: {
      completed: boolean;
      score: number;
      total: number;
    };
  };
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => {
    const saved = localStorage.getItem('grammatik-plus-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('grammatik-plus-progress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (unitId: string, taskSetId: string, score: number, total: number) => {
    setProgress(prev => ({
      ...prev,
      [unitId]: {
        ...(prev[unitId] || {}),
        [taskSetId]: {
          completed: true,
          score,
          total
        }
      }
    }));
  };

  const getUnitProgress = (unitId: string) => {
    const progressUnit = progress[unitId];
    if (!progressUnit) return 0;
    
    const unitMetaData = units.find(u => u.id === unitId);
    if (!unitMetaData) return 0;
    
    // Calculate total number of task sets across all subunits for this unit
    const totalSetsInUnit = unitMetaData.subunits.reduce((total, subunit) => {
      return total + subunit.taskSets.length;
    }, 0);
    
    if (totalSetsInUnit === 0) return 0;

    const completedSetsCount = Object.values(progressUnit).filter(s => s.completed).length;
    return Math.min(100, Math.max(0, (completedSetsCount / totalSetsInUnit) * 100));
  };

  return { progress, updateProgress, getUnitProgress };
}
