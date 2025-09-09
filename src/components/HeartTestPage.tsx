import { useState, useEffect } from 'react';
import { ArrowLeft, Download, Heart, X, User } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Progress } from './ui/progress';
import { ThemeToggle } from './ThemeToggle';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeartTestPageProps {
  onBackToDashboard: () => void;
}

export function HeartTestPage({ onBackToDashboard }: HeartTestPageProps) {
  const [currentStep, setCurrentStep] = useState('instructions'); // instructions, testing, results
  const [timer, setTimer] = useState(15);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (currentStep === 'testing' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCurrentStep('results');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentStep, timer]);

  const handleStartTest = () => {
    setCurrentStep('testing');
    setTimer(15);
  };

  const handleDownloadReport = () => {
    const reportContent = `
Heart Test Report
Date: April 19, 2025
Patient: Kokki Kumaru

Results:
- Heart Rate: 76 BPM (Normal range)
- Rhythm Analysis: Regular rhythm detected
- Heart Sound Analysis:
  * S1 (First Heart Sound): Normal
  * S2 (Second Heart Sound): Normal
  * Murmurs: None detected

AI Assessment:
Based on our AI analysis, your heart sounds appear to be within normal ranges.
No significant abnormalities were detected in this preliminary screening.

Note: This is not a medical diagnosis. Please consult with a healthcare professional for proper evaluation.
    `;
    
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'heart_test_report_19042025.txt';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const handleShareWithDoctor = (doctorName: string) => {
    // Simulate sharing functionality
    setIsShareModalOpen(false);
    // Show success message (you could implement a toast here)
    alert(`Report shared with ${doctorName}`);
  };

  const formatTime = (seconds: number) => {
    return `00:${seconds.toString().padStart(2, '0')}`;
  };

  const doctors = [
    { name: 'Dr. Paal Dappa', specialty: 'Cardiologist', isRecent: true, lastConsultation: 'April 14, 2025' },
    { name: 'Dr. Pacha Kili', specialty: 'Pulmonologist', isRecent: false },
    { name: 'Dr. Poriurunda', specialty: 'General Physician', isRecent: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full bg-card shadow-md border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBackToDashboard}
              className="mr-4"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-pacifico text-foreground">stethopes</h1>
          </div>
          <div className="flex items-center space-x-6">
            <ThemeToggle />
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <span>Kokki Kumaru</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">AI Heart Beat Test</h2>

          {/* Instructions */}
          {currentStep === 'instructions' && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>How to Place Your Stethoscope</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <span className="text-xl font-bold text-blue-600">1</span>
                    </div>
                    <h4 className="font-medium mb-2">Prepare</h4>
                    <p className="text-sm text-muted-foreground">
                      Find a quiet room and sit comfortably
                    </p>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <span className="text-xl font-bold text-blue-600">2</span>
                    </div>
                    <h4 className="font-medium mb-2">Position</h4>
                    <p className="text-sm text-muted-foreground">
                      Place stethoscope on left side of chest
                    </p>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <span className="text-xl font-bold text-blue-600">3</span>
                    </div>
                    <h4 className="font-medium mb-2">Stay Still</h4>
                    <p className="text-sm text-muted-foreground">
                      Remain still and breathe normally
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center mb-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1715111641899-b0118be16660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8fDE3NTczMzYxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Stethoscope Placement"
                    className="rounded-lg max-w-full h-auto max-h-64 object-cover"
                  />
                </div>
                
                <div className="text-center">
                  <Button
                    onClick={handleStartTest}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                  >
                    Start Test
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Test in Progress */}
          {currentStep === 'testing' && (
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Test in Progress</CardTitle>
                <CardDescription>
                  Please keep the stethoscope steady and breathe normally
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-20 mb-8 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-8 bg-green-500 rounded animate-pulse"></div>
                    <div className="w-2 h-12 bg-green-500 rounded animate-pulse delay-75"></div>
                    <div className="w-2 h-6 bg-green-500 rounded animate-pulse delay-150"></div>
                    <div className="w-2 h-10 bg-green-500 rounded animate-pulse delay-225"></div>
                    <div className="w-2 h-4 bg-green-500 rounded animate-pulse delay-300"></div>
                  </div>
                </div>
                
                <div className="flex justify-center items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse mr-3"></div>
                  <p>Recording heart sounds... <span className="font-mono">{formatTime(timer)}</span></p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Test Results */}
          {currentStep === 'results' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Test Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Heart Rate</h4>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold">76</span>
                        <span className="ml-2 text-muted-foreground">BPM</span>
                      </div>
                      <p className="text-green-600 text-sm mt-1">Normal range</p>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Rhythm Analysis</h4>
                      <p className="text-green-600">Regular rhythm detected</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        No irregularities found
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Heart Sound Analysis</h4>
                    <div className="space-y-3 mt-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">S1 (First Heart Sound)</span>
                          <span className="text-green-600 text-sm">Normal</span>
                        </div>
                        <Progress value={95} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">S2 (Second Heart Sound)</span>
                          <span className="text-green-600 text-sm">Normal</span>
                        </div>
                        <Progress value={90} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Murmurs</span>
                          <span className="text-green-600 text-sm">None detected</span>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg mb-8">
                  <h4 className="font-medium mb-3">AI Assessment</h4>
                  <p className="mb-3">
                    Based on our AI analysis, your heart sounds appear to be within
                    normal ranges. No significant abnormalities were detected in this
                    preliminary screening.
                  </p>
                  <p className="text-yellow-600 text-sm">
                    Note: This is not a medical diagnosis. Please consult with a
                    healthcare professional for proper evaluation.
                  </p>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <Button
                    onClick={handleDownloadReport}
                    variant="outline"
                    className="flex items-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                  
                  <Button
                    onClick={() => setIsShareModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Share with Doctor
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      {/* Share with Doctor Modal */}
      <Dialog open={isShareModalOpen} onOpenChange={setIsShareModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Share Report with Doctor</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsShareModalOpen(false)}
              className="absolute right-4 top-4"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Recent Doctor</h3>
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                      <Heart className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Paal Dappa</p>
                      <p className="text-sm text-muted-foreground">Cardiologist</p>
                      <p className="text-sm text-muted-foreground">
                        Last consultation: April 14, 2025
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleShareWithDoctor('Dr. Paal Dappa')}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Share
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Other Doctors</h3>
              <div className="space-y-4">
                {doctors.filter(d => !d.isRecent).map((doctor, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                          <Heart className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{doctor.name}</p>
                          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                        </div>
                      </div>
                      <Button
                        onClick={() => handleShareWithDoctor(doctor.name)}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Share
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}