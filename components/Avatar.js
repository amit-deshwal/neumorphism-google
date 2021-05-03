function Avatar({ url, className }) {
  return (
    <div className={`shadow-mobile sm:shadow-new rounded-full ${className}`}>
      <img
        loading="lazy"
        src={url}
        alt="Profile Picture"
        className="h-12 w-12 rounded-full  cursor-pointer transition duration-150 transform hover:scale-110"
      />
    </div>
  );
}

export default Avatar;
