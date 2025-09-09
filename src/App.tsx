import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { Dashboard } from './components/Dashboard';
import { HeartTestPage } from './components/HeartTestPage';
import { ChatBot } from './components/ChatBot';

type Page = 'landing' | 'login' | 'dashboard' | 'heart-test';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const navigateToLogin = () => setCurrentPage('login');
  const navigateToLanding = () => setCurrentPage('landing');
  const navigateToDashboard = () => setCurrentPage('dashboard');
  const navigateToHeartTest = () => setCurrentPage('heart-test');

  const handleSignIn = () => {
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentPage('landing');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        {currentPage === 'landing' && (
          <LandingPage onTryNow={navigateToLogin} />
        )}
        
        {currentPage === 'login' && (
          <LoginPage 
            onSignIn={handleSignIn}
            onBackToLanding={navigateToLanding}
          />
        )}
        
        {currentPage === 'dashboard' && (
          <Dashboard
            onHeartTest={navigateToHeartTest}
            onLogout={handleLogout}
            onBackToLanding={navigateToLanding}
          />
        )}
        
        {currentPage === 'heart-test' && (
          <HeartTestPage onBackToDashboard={navigateToDashboard} />
        )}
        
        {/* Chat Bot - Available on all pages except login */}
        {currentPage !== 'login' && <ChatBot />}
      </div>
    </ThemeProvider>
  );
}