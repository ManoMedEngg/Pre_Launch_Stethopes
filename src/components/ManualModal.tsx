import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ManualModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ManualModal({ isOpen, onClose }: ManualModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Telemedicine Manual</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-4 top-4"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="p-6 space-y-8">
          {/* Telemedicine Section */}
          <section>
            <h3 className="text-xl font-semibold mb-4">What is Telemedicine?</h3>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/2">
                <p className="text-muted-foreground mb-4">
                  Telemedicine is the practice of providing healthcare remotely using
                  telecommunications technology. It enables healthcare providers to
                  evaluate, diagnose, and treat patients without the need for an
                  in-person visit.
                </p>
                <p className="text-muted-foreground">
                  Modern telemedicine platforms integrate various technologies including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                  <li>Video conferencing systems</li>
                  <li>IoT medical devices</li>
                  <li>Real-time health monitoring</li>
                  <li>Electronic health records</li>
                  <li>AI-powered diagnostics</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1744686910398-426ab2a0ce8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWxlbWVkaWNpbmUlMjBjb25zdWx0YXRpb24lMjB2aWRlbyUyMGNhbGx8ZW58MXx8fHwxNzU3MzM2MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Telemedicine Illustration"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </section>

          {/* Biomedical Engineers Section */}
          <section>
            <h3 className="text-xl font-semibold mb-4">
              Role of Biomedical Engineers in Telemedicine
            </h3>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8fDE3NTczMzYxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Biomedical Engineer"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-muted-foreground mb-4">
                  Biomedical engineers play a crucial role in telemedicine by:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Designing and developing medical devices</li>
                  <li>Creating secure health data transmission systems</li>
                  <li>Implementing IoT healthcare solutions</li>
                  <li>Ensuring device accuracy and reliability</li>
                  <li>Developing AI diagnostic tools</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  They bridge the gap between traditional medical practice and modern
                  technology, making remote healthcare possible and efficient.
                </p>
              </div>
            </div>
          </section>

          {/* ECG Section */}
          <section>
            <h3 className="text-xl font-semibold mb-4">
              Understanding ECG (Electrocardiogram)
            </h3>
            <div className="space-y-6">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-3">What is an ECG?</h4>
                <p className="text-muted-foreground">
                  An ECG records the electrical activity of your heart. Each heartbeat
                  creates an electrical impulse that can be measured and recorded,
                  creating a distinctive pattern.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-3">ECG Wave Components</h4>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1513224502586-d1e602410265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8fDE3NTczMzYxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="ECG Components"
                    className="rounded-lg w-full mb-4"
                  />
                  <ul className="text-muted-foreground space-y-2">
                    <li>• P Wave: Atrial depolarization</li>
                    <li>• QRS Complex: Ventricular depolarization</li>
                    <li>• T Wave: Ventricular repolarization</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-3">How ECG is Generated</h4>
                  <p className="text-muted-foreground">ECG signals are generated by:</p>
                  <ul className="text-muted-foreground space-y-2 mt-2">
                    <li>1. Electrical impulses from the sinoatrial node</li>
                    <li>2. Conduction through heart muscles</li>
                    <li>3. Detection by electrodes on the skin</li>
                    <li>4. Amplification of electrical signals</li>
                    <li>5. Digital conversion and display</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-3">Modern ECG Technology</h4>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1606618871497-d848be8dc159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8fDE3NTczMzYxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Modern ECG Device"
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-muted-foreground mb-4">
                      Modern ECG devices incorporate advanced features:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Wireless connectivity</li>
                      <li>• Real-time monitoring</li>
                      <li>• AI-powered analysis</li>
                      <li>• Cloud data storage</li>
                      <li>• Mobile integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}