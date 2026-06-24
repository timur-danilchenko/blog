import cls from './RootPage.module.scss';

const RootPage = () => {
  const blocks = ['Hello, World!', 'Another', 'Something', '2+2'];

  return (
    <div className='page'>
      <div className='content-block'>
        {blocks.map((item) => (
          <div className='code-block'>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default RootPage;
