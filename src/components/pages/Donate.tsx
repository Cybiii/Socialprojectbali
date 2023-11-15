import '../../App.css';
import DonorBoxWidget from '../DonorBoxWidget';

export default function Donate() {
  return (
    <div className="bg-white p-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* DonorBoxWidget Column */}
          <div className="md:col-span-1 bg-none">
            <DonorBoxWidget />
          </div>
          
          {/* Alternative Payments Column */}
          <div className="md:col-span-1 bg-indigo-950 text-white p-4 mt-8 md:mt-0 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-white mb-4">Help Us Achieve Our Goals!</h1>
            <p className="text-xl md:text-2xl text-white mb-8 px-4">Your support enables us to continue our mission in Bali, providing education and resources to those in need. Every donation, big or small, contributes to making a lasting impact.</p>
            <h2 className="text-3xl font-semibold mb-2">Alternative ways to donate:</h2>
            <div className="grid gap-4 text-black text-xl md:text-2xl">
              <p className="bg-white p-2 rounded">Venmo: Lorem ipsum</p>
              <p className="bg-white p-2 rounded">Zelle: 1 123 456 7890</p>
              <p className="bg-white p-2 rounded">Bank Number: 1234567890</p>
              <p className="bg-white p-2 rounded">Paypal: example@gmail.com</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
