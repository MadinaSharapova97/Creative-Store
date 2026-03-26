import { useState } from "react";
import { useContextGlobal } from "../../context/Context";
import SignInModal from "../../components/SignInModal";

export default function Profile() {
  const { user } = useContextGlobal();
  const [activeTab, setActiveTab] = useState("orders");
  const [showModal, setShowModal] = useState(false);

  const handleTabClick = (tab) => {
    if (!user) {
      setShowModal(true);
      return;
    }
    setActiveTab(tab);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button onClick={() => handleTabClick("orders")}>
          My Orders
        </button>

        <button onClick={() => handleTabClick("chats")}>
          My Chats
        </button>

        <button onClick={() => handleTabClick("settings")}>
          Settings
        </button>
      </div>

      {/* Content */}
      <div className="border p-4 rounded-lg">
        {user ? (
          <>
            {activeTab === "orders" && <p>Your orders here...</p>}
            {activeTab === "chats" && <p>Your chats here...</p>}
            {activeTab === "settings" && <p>Settings here...</p>}
          </>
        ) : (
          <p>Please sign in to view this section</p>
        )}
      </div>

      {/* Modal */}
      {showModal && <SignInModal onClose={() => setShowModal(false)} />}
    </div>
  );
}