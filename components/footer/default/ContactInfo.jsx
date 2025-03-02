const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Customer Care",
      action: "tel:+393887748015",
      text: "+393887748015",
    },
    {
      id: 2,
      title: "Need live support?",
      action: "#",
      text: "info@dreamtourism.it",
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
