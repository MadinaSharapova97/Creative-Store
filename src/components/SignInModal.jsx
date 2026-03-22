export default function SignInModal({ onClose }) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl w-[300px]">
          <h2 className="text-xl font-semibold mb-4">Sign In Required</h2>
  
          <p className="mb-4">Please sign in to continue</p>
  
          <button className="bg-green-600 text-white px-4 py-2 rounded w-full mb-2">
            Sign In
          </button>
  
          <button
            onClick={onClose}
            className="text-gray-500 w-full"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }