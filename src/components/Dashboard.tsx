import { useState } from 'react';
import { 
  Heart, 
  Calendar, 
  FileText, 
  MessageSquare, 
  VideoIcon, 
  History, 
  Pill, 
  CalendarDays, 
  FileBarChart, 
  Settings, 
  User, 
  LogOut,
  ChevronDown
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { ThemeToggle } from './ThemeToggle';

interface DashboardProps {
  onHeartTest: () => void;
  onLogout: () => void;
  onBackToLanding: () => void;
}

export function Dashboard({ onHeartTest, onLogout, onBackToLanding }: DashboardProps) {
  const [heartRate] = useState(78);

  const quickActions = [
    { icon: VideoIcon, label: 'Video Consultation', color: 'bg-blue-600/20 text-blue-600' },
    { icon: History, label: 'Medical History', color: 'bg-green-600/20 text-green-600' },
    { icon: Pill, label: 'Prescriptions', color: 'bg-purple-600/20 text-purple-600' },
    { icon: CalendarDays, label: 'Book Appointment', color: 'bg-orange-600/20 text-orange-600' },
    { icon: FileBarChart, label: 'Test Reports', color: 'bg-red-600/20 text-red-600' },
    { icon: Settings, label: 'Settings', color: 'bg-gray-600/20 text-gray-600' },
  ];

  const recentActivity = [
    {
      icon: VideoIcon,
      title: 'Video consultation with Dr. Paal Dappa',
      time: 'April 14, 2025 - 11:00 AM',
      color: 'bg-blue-600/20 text-blue-600',
    },
    {
      icon: Heart,
      title: 'AI Heart Beat Test',
      time: 'April 12, 2025 - 09:15 AM',
      color: 'bg-red-600/20 text-red-600',
    },
    {
      icon: Pill,
      title: 'New prescription from Dr. Paal Dappa',
      time: 'April 10, 2025 - 02:30 PM',
      color: 'bg-purple-600/20 text-purple-600',
    },
  ];

  const doctors = [
    {
      name: 'Dr. Paal Dappa',
      specialty: 'Cardiologist',
    },
    {
      name: 'Dr. Pacha Kili',
      specialty: 'Pulmonologist',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full bg-card shadow-md border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1
              className="text-2xl font-pacifico text-foreground cursor-pointer"
              onClick={onBackToLanding}
            >
              stethopes
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <span>Kokki Kumaru</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-8">Welcome, Kokki Kumaru</h2>

        {/* Health Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Heart Rate</h3>
                  <p className="text-2xl font-bold">{heartRate} BPM</p>
                </div>
              </div>
              <div className="h-20 bg-muted rounded flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Heart Rate Chart</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Next Appointment</h3>
                  <p className="text-muted-foreground">April 21, 2025 - 10:30 AM</p>
                </div>
              </div>
              <p className="text-muted-foreground">With Dr. Paal Dappa</p>
              <Button variant="link" className="mt-2 text-blue-600 p-0 h-auto">
                View Details
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Prescriptions</h3>
                  <p className="text-muted-foreground">Last updated: April 15, 2025</p>
                </div>
              </div>
              <Button variant="link" className="mt-2 text-blue-600 p-0 h-auto">
                View All
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Messages</h3>
                  <p className="text-muted-foreground">2 unread messages</p>
                </div>
              </div>
              <Button variant="link" className="mt-2 text-blue-600 p-0 h-auto">
                View All
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Actions */}
          <div className="md:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-6 flex flex-col items-center justify-center space-y-3 hover:bg-accent"
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${action.color}`}>
                    <action.icon className="w-6 h-6" />
                  </div>
                  <span className="text-center font-medium">{action.label}</span>
                </Button>
              ))}
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.color} mt-1`}>
                        <activity.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Heart Test */}
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700" />
              <CardContent className="relative p-8 text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                  <Heart className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Heart Beat Test</h3>
                <p className="text-white/80 mb-4">
                  Check your heart health with our AI-powered analysis
                </p>
                <Button
                  onClick={onHeartTest}
                  variant="secondary"
                  className="w-full bg-white text-blue-600 hover:bg-white/90"
                >
                  Start Test
                </Button>
              </CardContent>
            </Card>

            {/* Your Doctors */}
            <Card>
              <CardHeader>
                <CardTitle>Your Doctors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {doctors.map((doctor, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                        <User className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-medium">{doctor.name}</p>
                        <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="link" className="text-blue-600 p-0 h-auto mt-2">
                    View All
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}