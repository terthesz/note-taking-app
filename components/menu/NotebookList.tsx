import { useEffect, useState } from 'react';
import NotebookType from '../../types/notebook';
import Notebook from './Notebook';

const NotebookList = () => {
  const [notebooks, set_notebooks] = useState<Array<NotebookType>>(
    new Array<NotebookType>()
  );

  useEffect(() => {
    set_notebooks([
      {
        name: 'Mat',
        id: '0',
        subject: 'Mat',
        colour: '#73BBFF',
      },
      {
        name: 'Sjl',
        id: '0',
        subject: 'Sjl',
        colour: '#FFAB73',
      },
    ]);
  }, []);

  return (
    <div className='w-full h-full grid grid-cols-5 grid-flow-row px-[17rem] gap-10 py-10'>
      {notebooks.map((notebook) => {
        return <Notebook key={notebook.id} notebook={notebook} />;
      })}
    </div>
  );
};

export default NotebookList;
