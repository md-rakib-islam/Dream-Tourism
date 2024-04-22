const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Customer Care",
      action: "tel:+447549293108",
      text: "+447549293108",
    },
    {
      id: 2,
      title: "Need live support?",
      action: "#",
      text: "info@dreamtourism.co.uk",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-0" key={item.id}>
          <div className={"text-14 mt-0"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-600 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
