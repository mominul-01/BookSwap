import BookOwnerInfo from "../book/BookOwnerInfo";

const Profile = () => {
  const ownerInfo = {
    id: 2,
    name: "Prottoy",
    location: "Chuadanga",
    profileImage: "https://randomuser.me/api/portraits/men/23.jpg",
    suggestedBooks: 6,
    wantedBooks: 8,
    booksReceived: 6,
    booksSent: 5,
  };
  return (
    <div className="container mx-auto">
      <BookOwnerInfo owner={ownerInfo} />
    </div>
  );
};

export default Profile;
