import { useContextGlobal } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  Package,
  MessageCircle,
  Settings,
  Globe,
  Truck,
  Bell,
  LogOut,
} from "lucide-react";

export default function Profile() {
  const { user, logout } = useContextGlobal();

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const cards = [
    {
      title: "My Orders",
      path: "/orders",
      icon: <Package size={28} />,
    },
    {
      title: "My Chats",
      path: "/chats",
      icon: <MessageCircle size={28} />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <Settings size={28} />,
    },
    {
      title: "Language",
      path: "/language",
      icon: <Globe size={28} />,
    },
    {
      title: "International Orders",
      path: "/international",
      icon: <Truck size={28} />,
    },
    {
      title: "Notifications",
      path: "/notifications",
      icon: <Bell size={28} />,
    },
  ];

  const handleClick = (path) => {
    if (!user) {
      navigate("/");
    } else {
      navigate(path);
    }
  };

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-2xl font-bold mb-6 text-green-600">
        My Profile
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleClick(card.path)}
            className="cursor-pointer p-5 border rounded-xl shadow-sm 
                       hover:shadow-md hover:border-green-500 transition 
                       flex items-center gap-4"
          >
            <div className="text-green-600">{card.icon}</div>

            <h2 className="text-lg font-semibold text-gray-700">
              {card.title}
            </h2>
          </div>
        ))}

        {/* Logout Card */}
        <div
          onClick={() => setShowModal(true)}
          className="cursor-pointer p-5 border rounded-xl shadow-sm 
                     hover:shadow-md hover:border-red-500 transition 
                     flex items-center gap-4"
        >
          <div className="text-red-500">
            <LogOut size={28} />
          </div>

          <h2 className="text-lg font-semibold text-gray-700">
            Logout
          </h2>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center 
                     justify-center z-50 px-4"
        >
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h2 className="text-xl font-bold mb-3 text-gray-800">
              Logout
            </h2>

            <p className="text-gray-600 mb-6">
              Are you sure you want to log out?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 rounded-lg border 
                           hover:bg-gray-100 transition"
              >
                No
              </button>

              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-lg bg-red-500 
                           text-white hover:bg-red-600 transition"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}