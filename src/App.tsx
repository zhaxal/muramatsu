import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef, RefObject } from "react";

/* eslint-disable no-irregular-whitespace */
function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dropdownRef: RefObject<HTMLDivElement> = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const members = [
    {
      name: "Pornpimol MOOLKAEW",
      role: "PhD Student",
      skills: [
        "Near infrared spectroscopy",
        "Fluorescence spectroscopy",
        "Data analysis",
        "Food processing",
      ],
      photo:
        "https://i.ibb.co/HgrymJZ/62-A1-FE68-187-A-4111-9-AEC-1-FE96-AFEF302.jpg",
    },
    {
      name: "Lindiwe Hayo",
      role: "PhD Student",
      skills: ["Data analysis"],
      photo: "",
    },
    {
      name: "David Ayomikun Ajayi",
      role: "PhD Student",
      skills: [
        "Remote sensing",
        "GHG mitigation",
        "Image processing",
        "Data processing",
      ],
      photo: "https://i.ibb.co/5kpVQHD/IMG-9448.jpg",
    },
    {
      name: "Akbota Maratova",
      role: "Master Student",
      skills: ["Data analysis", "Prototyping"],
      photo: "https://i.ibb.co/nwdStQS/2024-01-12-06-04-48.jpg",
    },
    {
      name: "Ryusei Hashimoto",
      role: "Master Student",
      skills: ["Remote sensing"],
      photo: "",
    },
    {
      name: "Tania Pereira Alfandega Monjane",
      role: "Master Student",
      skills: ["Ecommerce", "Smart agriculture", "Value chain"],
      photo: "",
    },
    {
      name: "Haruka Suzuki",
      role: "Bachelor Student",
      skills: ["Smart agriculture"],
      photo: "",
    },
  ];

  return (
    <div className="container max-w-4xl mx-auto p-4 min-h-screen flex flex-col">
      <nav className="bg-white p-4 rounded-lg mb-4 flex flex-wrap justify-between items-center shadow-md">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-xl font-bold">
            Laboratory for Bioproduction and Machinery
          </div>
          <button className="text-blue-500 md:hidden" onClick={toggleNav}>
            <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
          </button>
        </div>
        <div
          className={`${
            isNavOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-4 w-full md:w-auto`}
        >
          <span className="block text-blue-500 hover:text-blue-700 md:inline-block">
            Home
          </span>
          <span className="block text-blue-500 hover:text-blue-700 md:inline-block">
            Research
          </span>
          <span className="block text-blue-500 hover:text-blue-700 md:inline-block">
            Work
          </span>
          <span className="block text-blue-500 hover:text-blue-700 md:inline-block">
            Members
          </span>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="block text-blue-500 hover:text-blue-700 md:inline-block"
            >
              Fields
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white shadow-md rounded-lg mt-2">
                <span className="block px-4 py-2 text-blue-500 hover:text-blue-700">
                  Field 1
                </span>
                <span className="block px-4 py-2 text-blue-500 hover:text-blue-700">
                  Field 2
                </span>
              </div>
            )}
          </div>
          <span className="block text-blue-500 hover:text-blue-700 md:inline-block">
            Schedule
          </span>
          <span className="block text-blue-500 hover:text-blue-700 md:inline-block">
            Materials
          </span>
          <span className="block text-blue-500 hover:text-blue-700 md:inline-block">
            FC ホームページ
          </span>
          <span className="block text-blue-500 hover:text-blue-700 md:inline-block">
            JICA
          </span>
        </div>
      </nav>

      <div className="p-4 bg-white rounded-lg mb-4 flex items-center">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mr-6">
          <FontAwesomeIcon icon={faUser} className="text-gray-500 text-3xl" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">Head of the laboratory</h2>
          <p className="text-lg">Hasegawa Hideo</p>
        </div>
      </div>
      <div className="p-4 bg-white rounded-lg flex-1">
        <h2 className="text-2xl font-thin">Laboratory Members</h2>
        <ul className="mt-2 space-y-4">
          {members.map((member, index) => (
            <li
              key={index}
              className="flex items-center p-4 bg-white rounded-lg border border-gray-300"
            >
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mr-6 object-cover"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mr-6">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-gray-500 text-3xl"
                  />
                </div>
              )}
              <div className="flex-1">
                <span className="block text-xl font-semibold">
                  {member.name}
                </span>
                <span className="block text-lg text-gray-600">
                  {member.role}
                </span>
                <span className="block text-sm text-gray-500">
                  Skills: {member.skills.join(", ")}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <footer className="mt-4 p-4 bg-white rounded-lg">
        <p>新潟大学農学部</p>
        <p>
          企画交流担当 〒950-2181　新潟市西区五十嵐2の町8050 TEL：025-262-6672
          FAX：025-262-6594
        </p>
        <p>
          村松ステーション　 〒959-1701　五泉市石曽根6934 TEL：0250-58-5737
          FAX：0250-58-7046
        </p>
        <p>
          新通ステーション 〒950-2035　新潟市西区新通2156-1 TEL：025-260-1633
          FAX：025-260-1633
        </p>
        <p>新潟大学</p>
      </footer>
    </div>
  );
}

export default App;
