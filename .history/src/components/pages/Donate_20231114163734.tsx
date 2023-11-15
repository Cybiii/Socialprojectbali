import '../../App.css';
import DonorBoxWidget from './DonorBoxWidget';

export default function Donate() {
  return (
    <>
    <DonorBoxWidget />
    <div className="bg-indigo-900 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-4">Help Us Achieve Our Goals!</h1>
          <p className="text-xl md:text-2xl text-white mb-8 px-4">Your support enables us to continue our mission in Bali, providing education and resources to those in need. Every donation, big or small, contributes to making a lasting impact.</p>
        </div>
        <div className="bg-purple-200 text-indigo-900 p-4 mt-8 rounded-lg shadow-md">
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
  );
}
