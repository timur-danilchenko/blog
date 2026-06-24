import cls from './RootPage.module.scss';

const RootPage = () => {
  return (
    <div className='page'>
      <div className='block'>
        <div className={cls.bubble}>Hello, World!</div>
        <div className={cls.bubble}>another</div>
      </div>
    </div>
  );
};

export default RootPage;
