import NotebookType from '../../types/notebook';

const Notebook = ({ notebook }: { notebook: NotebookType }) => {
  return (
    <div
      className='w-full h-[8rem] rounded-lg text-white'
      style={{ backgroundColor: notebook.colour }}
    >
      <h1>{notebook.name}</h1>
    </div>
  );
};

export default Notebook;
