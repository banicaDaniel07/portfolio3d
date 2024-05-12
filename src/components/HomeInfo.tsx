
const HomeInfo = () => {
  return (
    <h1
      style={{
        color: 'rgba(0,0,0,.8)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        boxShadow: '4px 4px 10px rgba(0,0,0,.1)',
      }}
      className='sm:text-xl sm:leading-snug text-center py-4 px-8 text-white mx-5 rounded-lg'
    >
      Hi, I'm
      <span className='font-semibold mx-2 text-black'>
        Daniel 👋
      </span>
      <br />
      A Software Engineer from Romania
    </h1>
  );
};

export default HomeInfo;
