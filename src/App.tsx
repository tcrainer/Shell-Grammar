/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Reorder } from 'motion/react';
import { BookOpen, CheckCircle2, ChevronLeft, Trophy, GraduationCap, ArrowRight, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { units, Unit, Subunit, TaskSet, Exercise } from './data/units';
import { useProgress } from './hooks/useProgress';
import { useSession } from './hooks/useSession';

export default function App() {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [selectedSubunit, setSelectedSubunit] = useState<Subunit | null>(null);
  const [activeTaskSet, setActiveTaskSet] = useState<string | null>(null);
  const { progress, updateProgress, getUnitProgress } = useProgress();
  const session = useSession();

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  if (!session.hasStarted) {
    return (
      <div className="flex h-screen bg-background items-center justify-center p-6">
        <Card className="w-full max-w-md shadow-xl border-primary/20">
          <CardHeader className="text-center space-y-2">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold text-primary tracking-tight">Grammatik Plus</CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Please enter your name to start the session.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name') as string;
              if (name.trim()) session.startSession(name.trim());
            }}>
              <Input 
                name="name" 
                placeholder="Your name..." 
                className="h-14 text-lg px-4" 
                autoFocus 
                required 
              />
              <Button type="submit" className="w-full h-14 text-lg font-bold mt-6 shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Start Learning
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (session.isFinished) {
    return (
      <div className="flex bg-background items-center justify-center p-6 min-h-screen w-full">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-4xl py-10">
          <Card className="shadow-2xl border-primary/20 w-full overflow-hidden">
            <div className="h-4 bg-primary w-full" />
            <CardHeader className="text-center space-y-4 pt-10 pb-2">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Trophy className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-4xl font-extrabold text-foreground tracking-tight">Session Complete!</CardTitle>
              <CardDescription className="text-lg text-muted-foreground uppercase tracking-widest font-semibold">
                Report for {session.studentName}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-10 pb-10 space-y-8 mt-6">
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-accent rounded-xl p-5 border border-primary/10">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Time Spent Working</div>
                  <div className="text-2xl font-black text-foreground">{formatTime(session.activeTime)}</div>
                </div>
                <div className="bg-destructive/5 rounded-xl p-5 border border-destructive/10">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Idle Time</div>
                  <div className="text-2xl font-black text-foreground">{formatTime(session.idleTime)}</div>
                </div>
                <div className="bg-muted rounded-xl p-5 border border-border">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Exercises Attempted</div>
                  <div className="text-2xl font-black text-foreground">{session.exercisesAttempted}</div>
                </div>
                <div className="bg-success/10 rounded-xl p-5 border border-success/20">
                  <div className="text-xs uppercase tracking-wider text-success font-semibold mb-1">Successfully Correct</div>
                  <div className="text-2xl font-black text-success">{session.exercisesCorrect}</div>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <div className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">Unit Progress Summary</div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 pr-2">
                  {units.map(u => {
                    const prog = getUnitProgress(u.id);
                    return (
                      <div key={u.id}>
                        <div className="flex justify-between text-sm font-medium mb-1.5">
                          <span className="truncate pr-4">{u.title}</span>
                          <span className={`font-bold ${prog > 0 ? 'text-primary' : 'text-muted-foreground'}`}>{Math.round(prog)}%</span>
                        </div>
                        <Progress value={prog} className="h-2" />
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted px-10 py-6 border-t border-border flex flex-col gap-4 items-center justify-center">
              <p className="text-sm text-muted-foreground font-medium text-center max-w-md">
                Please take a screenshot of this page and send it to your teacher as proof of your work.
              </p>
              <Button onClick={session.resumeSession} variant="outline" className="w-full max-w-sm border-primary/20 hover:bg-primary hover:text-white transition-all font-semibold">
                Continue Session
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar - Student Tracker */}
      <aside className="w-[280px] bg-white border-r border-border flex flex-col p-6 shrink-0">
        <div 
          className="text-xl font-bold tracking-tight text-primary mb-10 cursor-pointer flex items-center gap-2"
          onClick={() => setSelectedUnit(null)}
        >
          <GraduationCap className="w-6 h-6" />
          Grammatik Plus
        </div>
        
        <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground mb-4">
          My Learning Path
        </div>
        
        <ScrollArea className="flex-1 -mx-2 px-2">
          <div className="space-y-1">
            {units.map((unit, idx) => {
              const progressVal = getUnitProgress(unit.id);
              const isActive = selectedUnit?.id === unit.id;
              
              return (
                <div key={unit.id} className="flex flex-col">
                  <div 
                    onClick={() => {
                        setSelectedUnit(unit);
                        setSelectedSubunit(unit.subunits[0]);
                        setActiveTaskSet(unit.subunits[0].taskSets[0].id);
                    }}
                    className={`group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                      isActive ? 'bg-accent text-primary font-medium' : 'hover:bg-muted text-foreground/80'
                    }`}
                  >
                    <span className="text-sm truncate pr-2 font-semibold">
                      Unit {idx + 1}: {unit.title.split(': ')[1]}
                    </span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[8px] shrink-0 ${
                      progressVal === 100 ? 'bg-success border-success text-white' : 'border-border'
                    }`}>
                      {progressVal === 100 ? '✓' : progressVal > 0 ? `${Math.round(progressVal)}%` : ''}
                    </div>
                  </div>
                  
                  {isActive && (
                    <div className="ml-4 pl-2 border-l-2 border-muted mt-1 mb-2 space-y-1 flex flex-col">
                      {unit.subunits.map((subunit) => {
                        const isSubActive = selectedSubunit?.id === subunit.id;
                        return (
                          <div key={subunit.id} className="flex flex-col">
                            <div 
                              onClick={() => {
                                setSelectedSubunit(subunit);
                                setActiveTaskSet(subunit.taskSets[0].id);
                              }}
                              className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors text-xs ${
                                isSubActive ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted text-muted-foreground'
                              }`}
                            >
                              <span className="truncate pr-2">{subunit.title}</span>
                            </div>
                            
                            <AnimatePresence>
                              {isSubActive && (
                                <motion.div 
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="ml-2 pl-2 border-l border-primary/20 overflow-hidden flex flex-col mt-1"
                                >
                                  {subunit.taskSets.map(taskSet => {
                                    const taskProg = progress[unit.id]?.[taskSet.id];
                                    const isTaskActive = activeTaskSet === taskSet.id;
                                    let perc = 0;
                                    if (taskProg && taskProg.total > 0) {
                                      perc = Math.round((taskProg.score / taskProg.total) * 100);
                                    }
                                    return (
                                      <div 
                                        key={taskSet.id}
                                        onClick={() => setActiveTaskSet(taskSet.id)}
                                        className={`flex items-center justify-between p-1.5 rounded-sm cursor-pointer transition-colors text-[10px] ${
                                          isTaskActive ? 'text-primary font-bold bg-primary/5' : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                                        }`}
                                      >
                                        <span className="truncate pr-1">{taskSet.title}</span>
                                        {perc > 0 && <span>{perc}%</span>}
                                      </div>
                                    )
                                  })}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollArea>

        <div className="mt-auto pt-6 border-t border-border flex flex-col gap-4">
          <div className="bg-muted/50 rounded-lg p-3 border border-border">
            <div className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Student Session</div>
            <div className="font-semibold text-sm truncate">{session.studentName}</div>
            <div className="text-xs text-muted-foreground mt-1">Active: {formatTime(session.activeTime)}</div>
          </div>
          <Button onClick={session.finishSession} variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all font-semibold break-words whitespace-normal h-auto py-2">
            Finish Session
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <ScrollArea className="flex-1">
          <div className="max-w-4xl mx-auto p-10 w-full">
            <AnimatePresence mode="wait">
              {!selectedUnit ? (
                <Dashboard 
                  key="dashboard"
                  units={units} 
                  onSelectUnit={(u) => {
                    setSelectedUnit(u);
                    setSelectedSubunit(u.subunits[0]);
                    setActiveTaskSet(u.subunits[0].taskSets[0].id);
                  }} 
                  getUnitProgress={getUnitProgress}
                />
              ) : selectedSubunit ? (
                <UnitView 
                  key="unit-view"
                  unit={selectedUnit} 
                  subunit={selectedSubunit}
                  activeTaskSet={activeTaskSet!}
                  setActiveTaskSet={setActiveTaskSet}
                  onBack={() => {
                    setSelectedUnit(null);
                    setSelectedSubunit(null);
                    setActiveTaskSet(null);
                  }}
                  onCompleteTask={(taskSetId, score, total) => updateProgress(selectedUnit.id, taskSetId, score, total)}
                  taskProgress={progress[selectedUnit.id] || {}}
                  recordExercise={session.recordExercise}
                />
              ) : null}
            </AnimatePresence>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}

function Dashboard({ units, onSelectUnit, getUnitProgress }: { 
  units: Unit[], 
  onSelectUnit: (u: Unit) => void,
  getUnitProgress: (id: string) => number,
  key?: string
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-10"
    >
      <div className="space-y-3">
        <h2 className="text-4xl font-bold tracking-tight">Willkommen!</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Master German grammar with interactive exercises and real-time feedback. Choose a unit from the sidebar to begin your journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {units.map((unit, index) => {
          const progressVal = getUnitProgress(unit.id);
          return (
            <Card 
              key={unit.id}
              className="group hover:shadow-md transition-all cursor-pointer border-border"
              onClick={() => onSelectUnit(unit)}
            >
              <CardHeader>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Unit {index + 1}</span>
                  {progressVal === 100 && <CheckCircle2 className="text-success w-4 h-4" />}
                </div>
                <CardTitle className="text-xl">{unit.title.split(': ')[1]}</CardTitle>
                <CardDescription className="line-clamp-2">{unit.explanation}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Progress value={progressVal} className="h-1.5 flex-1" />
                  <span className="text-xs font-medium text-muted-foreground">{Math.round(progressVal)}%</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
}

function UnitView({ unit, subunit, activeTaskSet, setActiveTaskSet, onBack, onCompleteTask, taskProgress, recordExercise }: { 
  unit: Unit, 
  subunit: Subunit,
  activeTaskSet: string,
  setActiveTaskSet: (id: string) => void,
  onBack: () => void,
  onCompleteTask: (id: string, score: number, total: number) => void,
  taskProgress: any,
  recordExercise: (correct: boolean) => void,
  key?: string
}) {
  return (
    <Tabs value={activeTaskSet} onValueChange={setActiveTaskSet} className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="space-y-8"
      >
        <header className="flex justify-between items-end">
          <div>
            <div className="text-sm text-muted-foreground mb-1 hover:underline cursor-pointer" onClick={onBack}><ChevronLeft className="inline w-4 h-4 mr-1"/>Back to Overview</div>
            <h1 className="text-3xl font-bold tracking-tight">{unit.title.split(': ')[1]} - {subunit.title}</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mr-2">Tasks:</span>
            <TabsList className="bg-muted p-1 rounded-full h-auto flex-wrap">
              {subunit.taskSets.map((set, idx) => (
                <TabsTrigger 
                  key={set.id} 
                  value={set.id}
                  className={`rounded-full px-5 py-1.5 text-xs font-medium data-[state=active]:bg-foreground data-[state=active]:text-white ${
                    taskProgress[set.id]?.completed ? 'text-success' : ''
                  }`}
                >
                  {set.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </header>

        {(unit.explanation || subunit.explanation) && (
          <section className="explanation-card bg-accent rounded-xl p-6">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-primary mb-2">Quick Rule</h2>
            <div className="text-muted-foreground leading-relaxed text-sm space-y-2">
              {unit.explanation && <p>{unit.explanation}</p>}
              {subunit.explanation && <p className="font-medium text-foreground">{subunit.explanation}</p>}
            </div>
          </section>
        )}

        <div className="work-area">
          {subunit.taskSets.map((set, idx) => {
            const nextSetId = subunit.taskSets[idx + 1]?.id;
            return (
              <TabsContent key={set.id} value={set.id} className="mt-0">
                <TaskSetView 
                  taskSet={set} 
                  onComplete={(score) => onCompleteTask(set.id, score, set.exercises.filter(e => e.type !== 'info').length)}
                  recordExercise={recordExercise}
                  onNextSet={nextSetId ? () => setActiveTaskSet(nextSetId) : undefined}
                />
              </TabsContent>
            );
          })}
        </div>
      </motion.div>
    </Tabs>
  );
}

function TaskSetView({ taskSet, onComplete, recordExercise, onNextSet }: { 
  taskSet: TaskSet, 
  onComplete: (score: number) => void,
  recordExercise: (correct: boolean) => void,
  onNextSet?: () => void
}) {
  const [exercisesList, setExercisesList] = useState<Exercise[]>(taskSet.exercises);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{[key: string]: string | string[]}>({});
  const [submitted, setSubmitted] = useState<{[key: string]: boolean}>({});
  const [totalScore, setTotalScore] = useState(0);
  const [retryCount, setRetryCount] = useState(0); // to ensure unique IDs

  // Reset state if taskSet changes
  useEffect(() => {
    setExercisesList(taskSet.exercises);
    setCurrentIndex(0);
    setAnswers({});
    setSubmitted({});
    setTotalScore(0);
    setRetryCount(0);
  }, [taskSet]);

  const currentExercise = exercisesList[currentIndex];

  const handleInputChange = (exerciseId: string, value: string, index?: number) => {
    if (index !== undefined) {
      setAnswers(prev => {
        const current = (prev[exerciseId] as string[]) || [];
        const next = [...current];
        next[index] = value;
        return { ...prev, [exerciseId]: next };
      });
    } else {
      setAnswers(prev => ({ ...prev, [exerciseId]: value }));
    }
  };

  const checkAnswer = (exercise: Exercise) => {
    if (exercise.type === 'info') return true;
    
    const userAnswer = answers[exercise.id];
    if (!userAnswer) return false;

    const exerciseType = exercise.type || 'gap';

    if (exerciseType === 'order') {
      const userList = (userAnswer as any[]) || [];
      const userStr = userList.map(t => typeof t === 'string' ? t : t.current).join(" ").replace(/[.!?]/g, "");
      const correctStr = (exercise.answer as string).replace(/[.!?]/g, "");
      return userStr.toLowerCase().trim() === correctStr.toLowerCase().trim();
    }

    if (Array.isArray(exercise.answer)) {
      const userArray = userAnswer as string[];
      return exercise.answer.every((ans, idx) => 
        ans.toLowerCase().trim() === (userArray[idx] || '').toLowerCase().trim()
      );
    }
    
    return (userAnswer as string).toLowerCase().trim() === (exercise.answer as string).toLowerCase().trim();
  };

  const handleCheck = () => {
    const isInfo = currentExercise.type === 'info';
    const isCorrect = isInfo ? true : checkAnswer(currentExercise);
    
    if (!isInfo) {
      recordExercise(isCorrect);
    }
    
    const newScore = totalScore + (isCorrect && !isInfo ? 1 : 0);
    setTotalScore(newScore);
    setSubmitted(prev => ({ ...prev, [currentExercise.id]: true }));
    
    if (!isCorrect && !isInfo) {
      // Append the exercise to the end with a new ID
      const newId = `${currentExercise.id}-retry-${retryCount + 1}`;
      setRetryCount(prev => prev + 1);
      setExercisesList(prev => [...prev, { ...currentExercise, id: newId }]);
    }
    
    if (currentIndex === exercisesList.length - 1 && (isCorrect || isInfo)) {
      onComplete(newScore);
    }
  };

  const next = () => {
    if (currentIndex < exercisesList.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (currentIndex === exercisesList.length - 1) {
      // If we got here, it means we are at the last exercise and they just clicked next (which means it must have been correct or info, or they are finishing the retries)
      // but if the last exercise was just completed and handled check fired, it would have called onComplete already. 
      // We will also call onComplete here just in case.
      onComplete(totalScore);
    }
  };

  const isCurrentSubmitted = submitted[currentExercise.id];
  const isCurrentCorrect = isCurrentSubmitted && checkAnswer(currentExercise);
  const isLastExercise = currentIndex === exercisesList.length - 1;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        const activeNode = document.activeElement;
        // Let the button handle its own click if it's focused to avoid double-firing
        if (activeNode && activeNode.tagName === 'BUTTON') {
          return;
        }
        
        e.preventDefault();
        if (!isCurrentSubmitted) {
          handleCheck();
        } else if (!isLastExercise) {
          next();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCurrentSubmitted, isLastExercise, currentExercise, answers, submitted, totalScore, currentIndex]);

  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement && e.target.type === 'text') {
        if (!e.ctrlKey && !e.metaKey && !e.altKey && ['1', '2', '3', '4'].includes(e.key)) {
          e.preventDefault();
          const charMap: Record<string, string> = { '1': 'ä', '2': 'ö', '3': 'ü', '4': 'ß' };
          const char = charMap[e.key];
          
          const target = e.target;
          const start = target.selectionStart || target.value.length;
          const end = target.selectionEnd || target.value.length;
          const newValue = target.value.slice(0, start) + char + target.value.slice(end);
          
          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
          nativeInputValueSetter?.call(target, newValue);
          target.dispatchEvent(new Event('input', { bubbles: true }));
          
          target.selectionStart = target.selectionEnd = start + 1;
        }
      }
    };
    window.addEventListener('keydown', handleGlobalKey, true); // use capture phase so we get it before normal typing
    return () => window.removeEventListener('keydown', handleGlobalKey, true);
  }, []);

  const renderExerciseContent = () => {
    const type = currentExercise.type || 'gap';

    if (type === 'info') {
      return (
        <div className="flex flex-col items-center justify-center p-8 gap-8 max-w-2xl text-center">
          <BookOpen className="w-16 h-16 text-primary mb-2" />
          <h2 className="text-3xl font-bold">{currentExercise.sentence}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {currentExercise.infoText}
          </p>
          {!isCurrentSubmitted && (
            <Button size="lg" onClick={handleCheck} className="mt-4 px-12 rounded-xl text-lg h-14 font-bold shadow-md hover:scale-105 active:scale-95 transition-all">
              Got it, let's start!
            </Button>
          )}
        </div>
      );
    }

    if (type === 'gap') {
      const parts = currentExercise.sentence.split('___');
      return (
        <div className="text-3xl font-medium leading-relaxed flex flex-wrap items-center gap-x-4 gap-y-6">
          {parts.map((part, i) => (
            <span key={i} className="flex items-center gap-2">
              {part}
              {i < parts.length - 1 && (
                <input
                  key={`${currentExercise.id}-input-${i}`}
                  type="text"
                  value={Array.isArray(answers[currentExercise.id]) ? (answers[currentExercise.id] as string[])[i] || '' : (answers[currentExercise.id] as string) || ''}
                  onChange={(e) => handleInputChange(currentExercise.id, e.target.value, parts.length > 2 ? i : undefined)}
                  disabled={isCurrentSubmitted}
                  className="input-blank w-48 text-2xl"
                  placeholder="..."
                  autoFocus={i === 0}
                />
              )}
            </span>
          ))}
        </div>
      );
    }

    if (type === 'type') {
      return (
        <div className="text-3xl font-medium leading-relaxed flex flex-col gap-6">
          <span className="text-muted-foreground">{currentExercise.sentence}</span>
          <input
            key={`${currentExercise.id}-input`}
            type="text"
            value={(answers[currentExercise.id] as string) || ''}
            onChange={(e) => handleInputChange(currentExercise.id, e.target.value)}
            disabled={isCurrentSubmitted}
            className="input-blank w-full text-2xl"
            placeholder="Type your answer here..."
            autoFocus
          />
        </div>
      );
    }

    if (type === 'order') {
      const selected = (answers[currentExercise.id] as any[]) || [];
      let available = [...(currentExercise.orderTokens || [])];
      for (const sel of selected) {
        const originalVal = typeof sel === 'string' ? sel : sel.original;
        const idx = available.indexOf(originalVal);
        if (idx !== -1) available.splice(idx, 1);
      }

      return (
        <div className="flex flex-col gap-8 w-full max-w-3xl">
          <div className="text-xl font-medium text-muted-foreground mb-4 bg-muted/50 p-4 rounded-xl">
            Translate: <span className="text-foreground">{currentExercise.sentence}</span>
          </div>

          <div className="min-h-[80px] border-b-2 border-border pb-4 flex flex-wrap gap-3 items-end">
            {selected.length === 0 && <span className="text-muted-foreground/30 text-2xl px-2">Construct sentence here...</span>}
            {selected.map((sel, i) => {
              const currentVal = typeof sel === 'string' ? sel : sel.current;
              return (
                <motion.div 
                  layout
                  key={`sel-${i}`}
                  className="flex items-stretch bg-foreground text-background rounded-xl shadow-md overflow-hidden text-xl font-bold transition-transform"
                >
                  <input
                    value={currentVal}
                    onChange={(e) => {
                       const newSel = [...selected];
                       newSel[i] = { original: typeof sel === 'string' ? sel : sel.original, current: e.target.value };
                       setAnswers(prev => ({ ...prev, [currentExercise.id]: newSel }));
                    }}
                    onKeyDown={(e) => {
                       // Suppress the global Enter key logic for "check answer" while typing.
                       // We can let it bubble if we want, but better to allow them to press enter to submit if they are done.
                       // The global Enter handler will catch it as long as we don't call e.stopPropagation()
                    }}
                    disabled={isCurrentSubmitted}
                    className="bg-transparent text-center outline-none px-4 py-3 w-auto min-w-[3ch] max-w-full"
                    style={{ width: `${Math.max(currentVal.length, 3) + 2}ch` }}
                  />
                  {!isCurrentSubmitted && (
                    <button 
                      onClick={() => {
                        const newSel = [...selected];
                        newSel.splice(i, 1);
                        setAnswers(prev => ({ ...prev, [currentExercise.id]: newSel }));
                      }}
                      className="px-3 hover:bg-white/20 transition-colors flex items-center justify-center text-white/70 hover:text-white"
                    >
                      ×
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3 pt-6">
            {available.map((token, i) => (
              <motion.button 
                layout
                key={`avail-${i}-${token}`}
                onClick={() => {
                  if (isCurrentSubmitted) return;
                  setAnswers(prev => ({ ...prev, [currentExercise.id]: [...selected, { original: token, current: token }] }));
                }}
                disabled={isCurrentSubmitted}
                className="px-5 py-3 bg-white text-foreground border-2 border-border rounded-xl shadow-sm text-xl font-bold transition-all hover:border-primary/50 hover:bg-primary/5 hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                {token}
              </motion.button>
            ))}
          </div>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="flex flex-col min-h-[450px]">
      <div className="px-6 py-4 border-b border-border flex justify-between items-center bg-white">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Exercise {currentIndex + 1} of {exercisesList.length}</span>
        <div className="flex gap-2 flex-wrap">
          {exercisesList.map((ex, idx) => (
            <div 
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-primary scale-125' : 
                submitted[ex.id] ? (checkAnswer(ex) || ex.type === 'info' ? 'bg-success' : 'bg-destructive') : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-12 flex-1 flex flex-col gap-10 overflow-y-auto relative">
        {renderExerciseContent()}

        {currentExercise.type !== 'info' && currentExercise.type !== 'order' && (
          <div className="fixed bottom-32 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-white rounded-full shadow-lg border border-border">
            {[
              { char: 'ä', num: '1' },
              { char: 'ö', num: '2' },
              { char: 'ü', num: '3' },
              { char: 'ß', num: '4' }
            ].map(btn => (
              <button
                key={btn.char}
                onMouseDown={(e) => {
                  e.preventDefault(); // keep focus on the input
                  const active = document.activeElement;
                  if (active && active.tagName === 'INPUT' && (active as HTMLInputElement).type === 'text') {
                    const target = active as HTMLInputElement;
                    const start = target.selectionStart || target.value.length;
                    const end = target.selectionEnd || target.value.length;
                    const newValue = target.value.slice(0, start) + btn.char + target.value.slice(end);
                    
                    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
                    nativeInputValueSetter?.call(target, newValue);
                    target.dispatchEvent(new Event('input', { bubbles: true }));
                    target.selectionStart = target.selectionEnd = start + 1;
                  }
                }}
                className="w-12 h-12 flex flex-col items-center justify-center rounded-full hover:bg-muted active:scale-95 transition-all"
              >
                <span className="text-lg leading-none font-medium text-foreground">{btn.char}</span>
                <span className="text-[10px] text-muted-foreground mt-0.5">{btn.num}</span>
              </button>
            ))}
          </div>
        )}

        <AnimatePresence>
          {isCurrentSubmitted && !isCurrentCorrect && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-destructive font-medium bg-destructive/5 p-5 rounded-xl border border-destructive/10 max-w-md"
            >
              <div className="uppercase text-[10px] tracking-widest mb-1 opacity-70">Correct Answer</div>
              <div className="text-lg font-bold">{Array.isArray(currentExercise.answer) ? currentExercise.answer.join(', ') : currentExercise.answer}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-8 border-t border-border flex justify-between items-center bg-white mt-auto">
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {isCurrentSubmitted && (
              <motion.div 
                key={isCurrentCorrect ? 'correct' : 'incorrect'}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex items-center gap-3 font-semibold ${isCurrentCorrect ? 'text-success' : 'text-destructive'}`}
              >
                {isCurrentCorrect ? (
                  <>
                    <div className="bg-success/10 p-1 rounded-full"><CheckCircle2 className="w-5 h-5" /></div>
                    Correct! Well done.
                  </>
                ) : (
                  <>
                    <div className="bg-destructive/10 p-1 rounded-full"><RotateCcw className="w-5 h-5" /></div>
                    Not quite right.
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {!isCurrentSubmitted ? (
          <Button onClick={handleCheck} className="px-12 py-7 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
            Check Answer
          </Button>
        ) : (
          isLastExercise ? (
            onNextSet ? (
              <Button onClick={onNextSet} className="px-12 py-7 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 bg-success hover:bg-success/90 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Task Set Complete - Next Set
              </Button>
            ) : (
              <div className="px-12 py-5 rounded-2xl font-bold text-lg bg-success text-white">
                All Sets Complete
              </div>
            )
          ) : (
            <Button 
              onClick={next} 
              className="px-12 py-7 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Next Exercise
            </Button>
          )
        )}
      </div>
    </div>
  );
}
