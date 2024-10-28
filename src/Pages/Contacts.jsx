import momin from "../assets/Mominul.jpg";
import riyanka from "../assets/riyanka.jpg";

const Contacts = () => {
  const contacts = [
    {
      name: "Mominul Islam",
      role: "Product Manager",
      image: momin,
    },
    {
      name: "Riyanka Biswas ",
      role: "Head of Content",
      image: riyanka,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4">CONTACTS</h2>
      <p className="text-center text-gray-600 mb-2">
        If you have any questions, please contact us by email. by mail:
      </p>
      <p className="text-center text-teal-500 mb-6">
        <a href="mailto:hello@bookswap.lt">hello@bookswap.lt</a>
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {contacts.map((contact, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={contact.image}
              alt={contact.name}
              className="w-28 h-28 rounded-full shadow-md mb-3"
            />
            <a href="#" className="text-blue-500 font-semibold hover:underline">
              {contact.name}
            </a>
            <p className="text-gray-500">{contact.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
