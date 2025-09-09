import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface LoginPageProps {
  onSignIn: () => void;
  onBackToLanding: () => void;
}

export function LoginPage({ onSignIn, onBackToLanding }: LoginPageProps) {
  const [patientId, setPatientId] = useState('');
  const [patientMobile, setPatientMobile] = useState('');
  const [patientPassword, setPatientPassword] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [doctorMobile, setDoctorMobile] = useState('');
  const [doctorPassword, setDoctorPassword] = useState('');

  const handlePatientSignIn = () => {
    // In a real app, validate credentials here
    onSignIn();
  };

  const handleDoctorSignIn = () => {
    // In a real app, validate credentials here
    onSignIn();
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <Card className="max-w-md w-full bg-gray-800 border-gray-700">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-pacifico text-white mb-6">
            stethopes
          </CardTitle>
          <CardDescription className="text-2xl font-bold text-white">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="patient" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-700">
              <TabsTrigger value="patient" className="data-[state=active]:bg-blue-600">
                Patient
              </TabsTrigger>
              <TabsTrigger value="doctor" className="data-[state=active]:bg-blue-600">
                Doctor
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="patient">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="patient-id" className="text-gray-300">
                    Patient ID
                  </Label>
                  <Input
                    id="patient-id"
                    type="text"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-600 focus:border-blue-600"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="patient-mobile" className="text-gray-300">
                    Mobile Number
                  </Label>
                  <Input
                    id="patient-mobile"
                    type="tel"
                    value={patientMobile}
                    onChange={(e) => setPatientMobile(e.target.value)}
                    className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-600 focus:border-blue-600"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="patient-password" className="text-gray-300">
                    Password
                  </Label>
                  <Input
                    id="patient-password"
                    type="password"
                    value={patientPassword}
                    onChange={(e) => setPatientPassword(e.target.value)}
                    className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-600 focus:border-blue-600"
                    required
                  />
                </div>
                
                <Button
                  type="button"
                  onClick={handlePatientSignIn}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Sign in
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="doctor">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="doctor-id" className="text-gray-300">
                    Doctor ID
                  </Label>
                  <Input
                    id="doctor-id"
                    type="text"
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-600 focus:border-blue-600"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="doctor-mobile" className="text-gray-300">
                    Mobile Number
                  </Label>
                  <Input
                    id="doctor-mobile"
                    type="tel"
                    value={doctorMobile}
                    onChange={(e) => setDoctorMobile(e.target.value)}
                    className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-600 focus:border-blue-600"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="doctor-password" className="text-gray-300">
                    Password
                  </Label>
                  <Input
                    id="doctor-password"
                    type="password"
                    value={doctorPassword}
                    onChange={(e) => setDoctorPassword(e.target.value)}
                    className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-600 focus:border-blue-600"
                    required
                  />
                </div>
                
                <Button
                  type="button"
                  onClick={handleDoctorSignIn}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Sign in
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Sign up
              </a>
            </p>
            <Button
              variant="ghost"
              onClick={onBackToLanding}
              className="mt-4 text-gray-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}