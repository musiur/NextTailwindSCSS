const Footer = () => {
  const date = new Date();
  return (
    <div className="containerG text-center font-medium border-t-2 py-5">
          All rights reserved to <span className="font-bold"> Musiur Alam Opu</span> @{ date.getFullYear()}
    </div>
  );
};

export default Footer;
