const mapaddress = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.0505383674!2d-74.30915841691113!3d40.697193362054165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1769055654458!5m2!1sen!2sin"

const GoogleMap = () => {
  return (
    <div className="map-area">
      <div className="maps">
        <iframe src={mapaddress}></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
